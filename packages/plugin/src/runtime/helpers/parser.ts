import { transform } from 'esbuild';
import { parse } from 'acorn';

export async function parseConfigFileContent(code: string) {
  const result = await transform(code, {
    loader: 'ts',
    target: 'esnext',
  });
  return parse(result.code, {
    ecmaVersion: 'latest',
    sourceType: 'module',
  });
}

export async function parseExtends(code: string) {
  const ast = await parseConfigFileContent(code);

  const exportDefaultObject = findExportDefaultObject(ast);

  return exportDefaultObject
    ? extractExtendsFromObject(exportDefaultObject)
    : [];
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

// eslint-disable-next-line complexity
function findExportDefaultObject(ast: any): any | null {
  for (const node of ast.body) {
    if (node.type === 'ExportDefaultDeclaration') {
      if (node.declaration.type === 'ObjectExpression') {
        return node.declaration;
      }
      else if (node.declaration.type === 'Identifier') {
        const varName = node.declaration.name;
        // eslint-disable-next-line max-depth
        for (const other of ast.body) {
          // eslint-disable-next-line max-depth
          if (other.type === 'VariableDeclaration') {
            // eslint-disable-next-line max-depth
            for (const decl of other.declarations) {
              // eslint-disable-next-line max-depth
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
