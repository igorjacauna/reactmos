declare module 'virtual:modules' {
  import type { RouteObject } from "react-router";
  import type { JSX } from "react";
  import type { ModuleConfig } from "reactmos";
  
  export const getRoutes: () => RouteObject[];
  export const getRoot: () =>() => JSX.Element;
  export const getExtras: <T = object>(moduleName: string) => T | undefined;
  export const getModules: () => ModuleConfig[];
  export const getModuleConfig: (moduleName: string) => ModuleConfig | undefined;
}