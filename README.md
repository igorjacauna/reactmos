# Reactmos (REACT MOduleS)

Reactmos is a small project, primarily a conceptual approach, inspired by [Nuxt Layers](https://nuxt.com/docs/getting-started/layers) for React.

> [!NOTE]  
> This project is a Work In Progress and currently supports only Single Page Applications (SPA).

## CLI

We provide a CLI to help run the development server and build the final bundle.

## Reactmos

Reactmos serves as the core of the application and acts as the entry point for Vite.

### Modules

This is where you will develop your application and extend other modules.

To create a new module, simply run:

```sh
pnpm create reactmos <module-name>
```

#### Configuration

See more in `packages/cli/src/types.ts`

```ts
const moduleConfig: ModuleConfig = {
  moduleName: 'module-boilerplate',
  /**
   * Root component of the application.
   * If not provided, Reactmos will use the root component
   * from the first extended module that defines one.
   * If no extended module provides a root component,
   * the default from the entry point will be used.
   */
  root: App,
  routes: () => {
    return [
      {
        path: '/welcome',
        Component: Welcome,
      },
    ];
  },
  hooks: {
    'app:beforeRender': () => {
      console.log('Before render')
    }
  }
}
```

### Extending Modules

To extend another module, just add its package name to the `extends` field in `module.config.ts`:

```ts
export default {
  extends: ['module-to-extend']
}
```

You can also use relative path to other module directory

```ts
export default {
  extends: ['../module-to-extend']
}
```

### Lifecycle Hooks

Reactmos provides several lifecycle hooks:

1. **`app:afterBoot`** - Called after the CLI registers all module routes and hooks. Used by the entry point to mount the application.
2. **`app:init`** - Called before the entry point retrieves `App.tsx`, which serves as the root of the application.
3. **`app:beforeRender`** - Called after `App.tsx` is retrieved but before calling `render` from `createRoot`.
4. **`app:afterRender`** - Called after `createRoot` executes `render`.

You can use `app:afterBoot` to create new hooks within your application:

```ts
import { hooks } from 'reactmos';

// Register a new hook called 'hello'
hooks.hook('hello', () => {
  console.log('Hello, World!');
});

// Call the 'hello' hook
hooks.callHook('hello');
```

For more details, see [hookable](https://github.com/unjs/hookable).

### Components

Reactmos provides a `<Pages />` component that represents all registered routes. You can use it in your `App.tsx` root component.

### Utility Functions

Reactmos also provides the following functions:

1. **`getRoutes`** - Retrieves all registered routes.
2. **`getRoot`** - Returns the `App.tsx` root component.
3. **`getExtras(moduleName)`** - Returns extra configuration in module configs

## Roadmap

- [x] Support for extending routes/pages  
- [ ] Support for extending the `public` directory  
- [ ] Additional extension capabilities?  