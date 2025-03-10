import type { ModuleConfig } from 'reactmos';
import Welcome from './pages/Welcome';
import App from './App';

const module: ModuleConfig = {
  root: App,
  moduleName: 'module-a',
  routes: () => {
    return [
      {
        path: '/',
        Component: Welcome,
      },
    ];
  },
  extras: {
    menuEntries: [
      {
        label: 'Module A',
        to: '/'
      }
    ]
  }
}

export default module