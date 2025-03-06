import { createServer } from 'vite';

import { createViteConfig } from './viteConfig';

export async function startDevServer() {
  const viteConfig = await createViteConfig();
  const server = await createServer(viteConfig);
  await server.listen();
  server.printUrls();
}

