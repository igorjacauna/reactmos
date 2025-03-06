import { createJiti } from 'jiti'
import { dirname, relative } from 'pathe'
import { fileURLToPath } from 'url';
import { ModuleConfig } from '../../../types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const jiti = createJiti(import.meta.url, { jsx: true });

export async function getHostConfig() {
  return await jiti.import<ModuleConfig>(relative(__dirname, "./src/module.config"));
}

export async function getDependenciesConfigs() {
  const hostConfig = await getHostConfig();
  return hostConfig.dependencies;
}