import { ModuleConfig } from 'reactmos';
import Welcome from './pages/Welcome';
import App from './App';

const module: ModuleConfig = {
  root: App,
  moduleName: 'module-boilerplate',
  routes: () => {
    return [
      {
        path: '/welcome',
        Component: Welcome,
      },
    ];
  },
  hooks: {
    'app:beforeRender': () => {
      console.log('Before render')
    }
  }
}

export default module