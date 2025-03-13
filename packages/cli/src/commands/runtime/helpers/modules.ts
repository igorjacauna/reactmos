import { dirname, resolve } from 'pathe';
import { transform } from 'esbuild';
import { createRequire } from 'module';
import { parse } from 'acorn';
import { existsSync, readFileSync } from 'fs-extra';

const require = createRequire(import.meta.url);

export async function getExtends() {
  const code = readHostConfigFile();
  const result = await transform(code, {
    loader: 'ts',
    target: 'esnext'
  });
  const ast = customParser(result.code);

  const exportDefaultObject = findExportDefaultObject(ast);

  return exportDefaultObject
    ? extractExtendsFromObject(exportDefaultObject)
    : [];
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

function extractExtendsFromObject(obj: any): string[] {
  for (const prop of obj.properties) {
    if (prop.type !== 'Property') continue;

    let keyName: string | null = null;
    if (prop.key.type === 'Identifier') {
      keyName = prop.key.name;
    } else if (prop.key.type === 'Literal') {
      keyName = prop.key.value;
    }

    if (keyName === 'extends' && prop.value.type === 'ArrayExpression') {
      return prop.value.elements
        .filter((el: any) => el && el.type === 'Literal')
        .map((el: any) => el.value);
    }
  }
  return [];
}

function findExportDefaultObject(ast: any): any | null {
  for (const node of ast.body) {
    if (node.type === 'ExportDefaultDeclaration') {
      if (node.declaration.type === 'ObjectExpression') {
        return node.declaration;
      }
      else if (node.declaration.type === 'Identifier') {
        const varName = node.declaration.name;
        for (const other of ast.body) {
          if (other.type === 'VariableDeclaration') {
            for (const decl of other.declarations) {
              if (
                decl.id.type === 'Identifier' &&
                decl.id.name === varName &&
                decl.init &&
                decl.init.type === 'ObjectExpression'
              ) {
                return decl.init;
              }
            }
          }
        }
      }
    }
  }
  return null;
}


function customParser(code: string) {
  return parse(code, {
    ecmaVersion: 'latest',
    sourceType: 'module'
  });
}

function readHostConfigFile() {
  let configPath = resolve(process.cwd(), `src/module.config.ts`);
  if (!existsSync(configPath)) {
    configPath = resolve(process.cwd(), `src/module.config.tsx`);
  }
  if (!existsSync(configPath)) {
    throw new Error(`Cannot find module.config.ts or module.config.tsx in ${process.cwd()}/src`);
  }
  return readFileSync(configPath, 'utf-8');
}