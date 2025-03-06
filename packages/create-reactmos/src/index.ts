import { defineCommand, runMain } from "citty";
import { execSync } from 'child_process';
import { consola } from "consola";
import { existsSync, renameSync, mkdirSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const main = defineCommand({
  meta: {
    name: "Create Reactmos Module",
    version: "0.1.0",
    description: "Create a extendable React Module",
  },
  args: {
    name: {
      type: "positional",
      description: "Project name",
      required: true,
    },
  },
  run({ args }) {
    consola.info('Create consola')
  
    const targetDir = join(process.cwd(), args.name);

    if (existsSync(targetDir)) {
      consola.error(`Dir ${args.name} alredy exists.`);
      process.exit(1);
    }

    mkdirSync(targetDir, { recursive: true });

    consola.start("📦 Copying files...");
    
    // Opção 2: Copiar arquivos locais de um template embutido
    const templateDir = join(__dirname, "../template");
    cpSync(templateDir, targetDir, { recursive: true });

    const filesToRename = {
      "_gitignore": ".gitignore",
      "_npmrc": ".npmrc",
    };
  
    Object.entries(filesToRename).forEach(([oldName, newName]) => {
      const oldPath = join(targetDir, oldName);
      const newPath = join(targetDir, newName);
      
      if (existsSync(oldPath)) {
        renameSync(oldPath, newPath);
      }
    });

    consola.info("📦 Installing dependêncies...");
    execSync(`cd ${args.name} && pnpm install`, { stdio: "inherit" });

    consola.success("Project created!");
    consola.info(`cd ${args.name} && pnpm dev`);
  },
});

runMain(main);