import viteReact from '@vitejs/plugin-react';
import { dirname, resolve } from 'pathe';
import type { InlineConfig, PluginOption } from 'vite';
import { createRequire } from 'module';
import modulesPlugin from 'vite-plugin-react-modules';
import fs from 'fs-extra';
import { defu } from 'defu';

const require = createRequire(import.meta.url);

export async function createViteConfig(): Promise<InlineConfig> {
  const appPackageJson = require.resolve('reactmos/package.json');
  const appRoot = dirname(appPackageJson);

  const defaultConfig = {
    plugins: [viteReact(), modulesPlugin()],
    root: appRoot,
    build: {
      emptyOutDir: true,
      outDir: `${process.cwd()}/dist`,
    },
    envPrefix: 'APP_',
    optimizeDeps: {
      exclude: ['reactmos'],
      include: ['react-router'],
    },
  };
  const hostConfig = await getHostViteConfig();

  return {
    ...defu(hostConfig, defaultConfig),
    plugins: [...(defaultConfig.plugins || []), ...(hostConfig.plugins || [])]
      .filter(Boolean) as PluginOption[],
  };
}

async function getHostViteConfig(): Promise<InlineConfig> {
  const viteConfigPath = resolve(process.cwd(), 'vite.config.ts');
  if (!fs.existsSync(viteConfigPath)) {
    return {};
  }
  return (await import(viteConfigPath));
}