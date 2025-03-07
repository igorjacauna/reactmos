import { ModuleConfig } from 'reactmos';
import Welcome from './pages/Welcome';

const module: ModuleConfig = {
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