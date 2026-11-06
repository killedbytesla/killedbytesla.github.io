import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://killedbytesla.com', output: 'static', devToolbar: { enabled: false }, integrations: [sitemap()] });
