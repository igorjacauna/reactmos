import { resolve } from 'pathe';
import { readFileSync } from 'node:fs';
import type { ParseAst } from 'rollup';
import { transform } from 'esbuild';

export async function getExtends(parser: ParseAst) {
  const code = readFileSync(resolve(process.cwd(), `src/module.config.ts`), 'utf-8');
  const result = await transform(code, {
    loader: 'ts',
    target: 'esnext'
  });
  const ast = parser(result.code, {
    jsx: true,
  });

  const exportDefaultObject = findExportDefaultObject(ast);

  const extendsArray = exportDefaultObject
    ? extractExtendsFromObject(exportDefaultObject)
    : [];

  return extendsArray;
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
