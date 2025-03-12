import viteReact from '@vitejs/plugin-react';
import { dirname } from 'pathe';
import type { InlineConfig } from 'vite';
import { createRequire } from 'module';
import modulesPlugin from './plugins/modules';
import { publicDirs } from './plugins/publicDirs';

const require = createRequire(import.meta.url);

export async function createViteConfig(): Promise<InlineConfig> {
  const appPackageJson = require.resolve('reactmos/package.json');
  const appRoot = dirname(appPackageJson);
  
  return {
    plugins: [viteReact(), modulesPlugin(), publicDirs()],
    root: appRoot,
    build: {
      emptyOutDir: true,
      outDir: `${process.cwd()}/dist`,
    },
    envPrefix: 'APP_',
    optimizeDeps: {
      exclude: ['reactmos'],
      include: ['react-router']
    },
  };
}