import { ModuleConfig } from 'reactmos';
import React from 'react';

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