declare module 'virtual:modules' {
  export interface Hooks {
    'after:boot': () => void;
  };
}

export {}