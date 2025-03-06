import { defineCommand } from 'citty';
import { startBuild } from './runtime/build';

export default defineCommand({
  meta: {
    name: 'build',
    description: 'Build your application',
  },
  run() {
    startBuild()
  },
});