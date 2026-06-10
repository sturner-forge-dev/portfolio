// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://sturner-forge-dev.github.io',
  base: '/portfolio',
  adapter: cloudflare(),
});