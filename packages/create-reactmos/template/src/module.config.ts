import { ModuleConfig } from 'reactmos';
import Welcome from './pages/Welcome';
import App from './App';

const module: ModuleConfig = {
  moduleName: 'module-boilerplate',
  root: App,
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