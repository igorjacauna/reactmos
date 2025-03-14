import { dirname, resolve } from 'pathe';
import { createRequire } from 'module';
import fs from 'fs-extra';
import { parseExtends } from './parser';

const require = createRequire(import.meta.url);

export async function getExtends() {
  const code = readHostConfigFile();
  return parseExtends(code);
}

export async function getExtendsConfigs() {
  const extendsArray = await getExtends();

  return extendsArray.map((ext) => {
    if (ext.startsWith('.')) {
      return resolve(process.cwd(), ext, 'src/module.config');
    }
    return ext;
  });
}

export async function getExtendsDir() {
  const extendsArray = await getExtends();

  return extendsArray.map((ext) => {
    if (ext.startsWith('.')) {
      return resolve(process.cwd(), ext);
    }
    const appPackageJson = require.resolve(`${ext}/package.json`);
    return dirname(appPackageJson);
  });
}

export function readHostConfigFile() {
  let configPath = resolve(process.cwd(), 'src/module.config.ts');
  if (!fs.existsSync(configPath)) {
    configPath = resolve(process.cwd(), 'src/module.config.tsx');
  }
  if (!fs.existsSync(configPath)) {
    throw new Error(`Cannot find module.config.ts or module.config.tsx in ${process.cwd()}/src`);
  }
  return fs.readFileSync(configPath, 'utf-8');
}