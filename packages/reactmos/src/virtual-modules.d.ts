declare module 'virtual:modules' {
  import type { RouteObject } from "react-router";
  import type { JSX } from "react";
  type RoutesFn = () => RouteObject[];
  
  const getRoutes: RoutesFn;
  const boot: () => Promise<void>;
  const getRoot: () =>() => JSX.Element;
  const getExtras: (moduleName: string) => Record<string, unknown> | undefined;
  export { getRoutes, boot, getRoot, getExtras }
}