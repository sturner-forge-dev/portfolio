// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	site: 'https://steventurner.dev',
	base: '/portfolio',
	outDir: './dist/portfolio',
	adapter: cloudflare(),
});

