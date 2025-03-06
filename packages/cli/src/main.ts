import { defineCommand } from 'citty';

import { description, version } from '../package.json';
import { commands } from './commands';

export const main = defineCommand({
  meta: {
    name: 'reactmox',
    version,
    description,
  },
  args: {
    command: {
      type: 'positional',
      required: false,
    },
  },
  subCommands: commands,
});