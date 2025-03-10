import type { ModuleConfig } from 'reactmos';
import Welcome from './pages/Welcome';
import App from './App';

const module: ModuleConfig = {
  root: App,
  moduleName: 'module-c',
  extends: ['../module-b', '../module-a'],
  routes: () => {
    return [
      {
        path: '/module-c',
        Component: Welcome,
      },
    ];
  }
}

export default module