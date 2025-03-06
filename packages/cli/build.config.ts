import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      builder: "copy",
      input: 'src/commands/runtime/plugins/templates',
      pattern: '**/*.ejs',
      outDir: 'dist/shared/templates'
    },
  ],
});