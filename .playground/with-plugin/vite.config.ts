import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactModules from 'vite-plugin-react-modules';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactModules()],
})
