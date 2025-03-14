/// <reference types="vite-plugin-react-modules/modules" />

declare module 'virtual:modules' {
  export interface Hooks {
    'app:afterBoot': () => void;
    'app:init': () => void;
    'app:beforeRender': () => void;
    'app:afterRender': () => void;
  }
}