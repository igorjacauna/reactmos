import type { Plugin } from 'vite';
import { dirname, join, resolve } from 'pathe';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import { getExtendsConfigs, getExtendsDir } from '../../runtime/helpers/config';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function modules(): Promise<Plugin> {
  const virtualModuleId = 'virtual:modules';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  let directories: string[] = [];
  let outputDir: string = 'dist';
  let publicDir: string = 'public';
  directories = await getPublicDirectories(publicDir);

  return {
    name: 'modules',
    enforce: 'pre',

    configResolved(config) {
      outputDir = config.build.outDir || 'dist';
      publicDir = config.publicDir || 'public';
    },

    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      if (directories.some(dir => id.startsWith(dir))) {
        return { id, external: true };
      }
    },

    async load(id) {
      if (id !== resolvedVirtualModuleId) return;
      const extendModules = await getExtendsConfigs();
      const template = fs.readFileSync(resolve(__dirname, './templates/modules.ejs'), 'utf-8');
      const code = ejs.render(template, { extendModules });
      return code;
    },

    async configureServer(server) {
      directories.forEach((dir) => {
        server.middlewares.use((req, res, next) => {
          if (req.url) {
            const filePath = join(dir, req.url);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      });
    },

    async closeBundle() {
      directories.forEach((dir) => {
        const destPath = resolve(outputDir);
        fs.copySync(dir, destPath);
      });
    },
  };
}

async function getPublicDirectories(publicDir: string): Promise<string[]> {
  const extDirs = await getExtendsDir();
  const extDirsResolved = extDirs.map((dir) => resolve(dir, publicDir));
  const hostPulicDirResolved = resolve(process.cwd(), publicDir);
  return [hostPulicDirResolved, ...extDirsResolved].filter((dir) => fs.existsSync(dir));
}
