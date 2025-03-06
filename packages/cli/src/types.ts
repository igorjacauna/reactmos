import type { RouteObject } from "react-router";

export type Hooks = {
  'app:beforeBoot': () => void;
  'app:afterBoot': () => void;
  'app:init': () => void;
  'app:beforeRender': () => void;
  'app:afterRender': () => void;
}

export type ModuleConfig = {
  moduleName: string;
  routes?: () => (RouteObject[] | Promise<RouteObject[]>);
  extends?: string[];
  hooks?: Partial<Hooks>;
};