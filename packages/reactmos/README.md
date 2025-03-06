# Reactmos

Create extendable React SPA projects!

## Usage

1. Create a project like:

```
| package.json
| src/
|--- App.tsx
|--- module.config.tsx
```

2. Install `reactmos`

```
pnpm add reactmos
```

3. Create a script in `package.json`

```
{
  ...,
  "scripts": {
    "dev": "reactmox dev",
    "build": "reactmox build" 
  }
}
```

4. Now run

```
pnpm dev
```

## Module Configuration

In Module Configuration you define the routes, add hooks to life cycle and extends other modules.

You can see the `module-boilerplate` or `module-example` in packages in repository root
