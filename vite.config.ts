import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Served from the repo's committed dist/ as https://qla.dev/helem-nejse (same server as qla.dev/hideya).
export default defineConfig({
  base: '/helem-nejse/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'helem-deploy-htaccess',
      closeBundle() {
        copyFileSync(resolve('deploy.htaccess'), resolve('dist/.htaccess'));
      },
    },
  ],
  server: { port: 5177, strictPort: true },
});
