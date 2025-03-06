import React from 'react';
import { ModuleConfig } from 'reactmos';

const module: ModuleConfig = {
  moduleName: 'module-boilerplate',
  routes: () => {
    return [
      {
        path: '/welcome',
        Component: React.lazy(() => import('./pages/Welcome')),
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