import { join, resolve } from 'pathe';
import { Plugin } from 'vite';
import fs from 'fs-extra';

import { getExtendsDir } from '../helpers/modules';

export async function publicDirs(): Promise<Plugin> {
  const hostPublic = resolve(process.cwd(), `public`);
  let directories: string[] = []
  let outputDir: string = 'dist';
  const extDirs = await getExtendsDir();
      directories = ([hostPublic].concat(extDirs.map((dir) => resolve(dir, 'public')))).filter((dir) => fs.existsSync(dir));

  return {
    name: 'vite-static-files-plugin',
    configResolved(config) {
      outputDir = config.build.outDir || 'dist';
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
    resolveId(id) {
      if (directories.some(dir => id.startsWith(dir))) {
        return { id, external: true };
      }
      return null;
    }
  };
}