// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  server: { port: 4318 },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()]
      }
    }
  },
});