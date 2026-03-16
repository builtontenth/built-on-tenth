import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://builtontenth.com',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
  build: { format: 'directory' }
});
