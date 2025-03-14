import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  declaration: true,
  externals: ['vite', 'virtual:modules'],
  entries: [
    'src/index',
    {
      builder: 'copy',
      input: 'src/runtime/templates',
      pattern: '**/*.ejs',
      outDir: 'dist/templates',
    },
  ],
});