import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://builtontenth.com',

  output: 'hybrid',

  adapter: vercel(),

  integrations: [sitemap()],

  build: {
    format: 'directory'
  }
});