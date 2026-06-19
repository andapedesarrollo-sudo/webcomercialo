// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: { port: 4318 },
  vite: {
    plugins: [tailwindcss()],
  },
});