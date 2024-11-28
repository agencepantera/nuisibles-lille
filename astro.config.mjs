import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nuisibles-lille.fr',
  base: '/',
  build: {
    assets: 'assets' // assurez-vous que cette ligne est présente
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
  compressHTML: true,
  sitemap: true
});