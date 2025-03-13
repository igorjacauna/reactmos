declare module 'virtual:modules' {
  import type { RouteObject } from "react-router";
  import type { JSX } from "react";
  
  export const getRoutes: () => RouteObject[];
  export const getRoot: () =>() => JSX.Element;
  export const getExtras: (moduleName: string) => Record<string, unknown> | undefined;
  export const getModules: () => string[];
}