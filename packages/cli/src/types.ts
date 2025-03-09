import type { JSX } from 'react';
import type { RouteObject } from "react-router";

export type Hooks = {
  'app:afterBoot': () => void;
  'app:init': () => void;
  'app:beforeRender': () => void;
  'app:afterRender': () => void;
}

export type ModuleConfig = {
  moduleName: string;
  root?: () => JSX.Element;
  routes?: () => (RouteObject[] | Promise<RouteObject[]>);
  extends?: string[];
  hooks?: Partial<Hooks>;
};