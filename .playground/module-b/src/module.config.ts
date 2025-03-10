import type { ModuleConfig } from 'reactmos';
import Welcome from './pages/Welcome';
import App from './App';

const module: ModuleConfig = {
  root: App,
  moduleName: 'module-b',
  extends: ['../module-a'],
  routes: () => {
    return [
      {
        path: '/module-b',
        Component: Welcome,
      },
    ];
  },
}

export default module