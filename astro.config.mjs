// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  server: { port: 4318 },
  vite: {
    plugins: [tailwindcss()],
    css: {
      postcss: {
        plugins: [autoprefixer()]
      }
    }
  },
});