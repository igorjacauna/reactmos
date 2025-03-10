declare module '@reactmos/cli' {
  interface ModuleExtras {
    menuEntries: {
      label: string;
      to: string;
    }[]
  }
}

export {}