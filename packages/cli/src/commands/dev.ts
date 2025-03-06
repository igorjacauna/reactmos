import { defineCommand } from 'citty';
import { startDevServer } from './runtime/devServer';

export default defineCommand({
  meta: {
    name: 'dev',
    description: 'Start development server',
  },
  run() {
    startDevServer();
  },
});