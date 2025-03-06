import { build as buildVite } from 'vite';

import { createViteConfig } from './viteConfig';

export async function startBuild() {
  const viteConfig = await createViteConfig();
  const output = await buildVite(viteConfig);
  console.log(output);
}

