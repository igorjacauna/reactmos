import { ModuleConfig } from 'reactmos';
import React from 'react'
import DefaultLayout from './layouts/Default';
import Private from './pages/Private';

const Login = React.lazy(() => import('./pages/Login'))

const module: ModuleConfig = {
  moduleName: 'module-example',
  routes: () => {
    return [
      {
        path: '/',
        element: <DefaultLayout />,
        children: [
          {
            path: '/private',
            element: <Private />
          }
        ]
      },
      {
        path: '/login',
        element: <Login />
      }
    ];
  },
  hooks: {
    'app:beforeRender': () => {
      console.log('Before render')
    }
  },
  extends: ['@reactmos/module-boilerplate']
}

export default module