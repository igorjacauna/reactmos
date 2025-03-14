declare module 'virtual:modules' {
  import type { RouteObject } from 'react-router';
  import type { JSX } from 'react';
  import type { Hookable } from 'hookable';

  export type ModuleConfig = {
    moduleName: string;
    root?: () => JSX.Element;
    routes?: () => (RouteObject[] | Promise<RouteObject[]>);
    extends?: string[];
    hooks?: Partial<Hooks>;
    extras?: ModuleExtras;
  };

  export interface Hooks {}
  export const hooks: Hookable<Hooks>;

  export const getRoutes: () => RouteObject[];
  export const getRoot: () =>() => JSX.Element;
  export const getExtras: <T = object>(moduleName: string) => T | undefined;
  export const getModules: () => ModuleConfig[];
  export const getModuleConfig: (moduleName: string) => ModuleConfig | undefined;
  export const boot: (callback: () => void) => void;
}