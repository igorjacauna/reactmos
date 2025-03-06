import { Plugin } from 'vite'
import { dirname, resolve } from 'pathe'
import fs from 'node:fs'
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import { getHostConfig } from '../helpers/modules';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function modulesPlugin(): Plugin {
  const virtualModuleId = 'virtual:modules'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'vite-plugin-modules',
    enforce: 'pre',

    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },

    async load(id) {
      if (id !== resolvedVirtualModuleId) return
      const hostConfig = await getHostConfig()
      const template = fs.readFileSync(resolve(__dirname, './templates/modules.ejs'), 'utf-8');
      const code = ejs.render(template, { hostConfig });
      return code
    }
  }
}