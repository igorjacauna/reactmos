# Reactmos (REACT MOduleS)

This is a small project more as a concept inspired in [Nuxt Layers](https://nuxt.com/docs/getting-started/layers) for React

> [!NOTE]
> This is a Work In Progress and works only for SPA

## CLI

We have a CLI that helps to run dev server and build the final bundle

## Reactmos

It is the core of application, the entrypoint for Vite

### Modules

This is what you will work and write your application and extends others modules

Just run

```
pnpm create reactmos <module-name>
```

### Extends

To extends other modules, just add the package name in `extends` in `module.config.ts`

```ts
export default {
  extends: ['module-to-extends']
}
```

### Hooks

We have some life cycle hooks

1. `app:afterBoot` - Called after the CLI registered all modules routes and hooks. This is used by the entrypoint to mount the application
2. `app:init` - Called before the entrypoint get the `App.tsx` used as root in application
3. `app:beforeRender` - Called after get the `App.tsx` and before call `render` from `createRoot`
4. `app:afterRender` - Called after the `render` from `createRoot`

You can use `app:afterBoot` to create a new hook to be used in your application:

```ts
import { hooks } from 'reactmos';

// Hook on 'hello'
hooks.hook('hello', () => { console.log('Hello World' )})

// Call 'hello' hook
hooks.callHook('hello')
```

See [hookable](https://github.com/unjs/hookable)

### Components

`reactmos` provides a `<Pages />` component that represents all registered routes. It can be used in `App.tsx` root component

### Functions

`reactmos` also provides:

1. `getRoutes` - Get all routes registered
2. `getRoot` - Get the `App.tsx` root component

## Roadmap

- [x] Extends routes/pages
- [ ] Extends public dir
- [ ] Any thing else to extends??