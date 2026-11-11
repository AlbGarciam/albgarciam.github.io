import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the root of https://albgarciam.github.io. Every asset (fonts
// included) is bundled into dist/, so nothing is loaded from a third party.
export default defineConfig({
  base: '/',
  publicDir: false,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { main: 'index.html', terms: 'terms/index.html' },
    },
  },
});
