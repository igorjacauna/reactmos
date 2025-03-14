import { ModuleConfig } from "virtual:modules";

const module: ModuleConfig = {
  moduleName: 'core',
  extends: ['../module-c', '../module-b', '../module-a'],
};

export default module