import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import meta_tags from './src/config/meta_tags';

export default defineConfig({
	site: meta_tags.app_url,
	integrations: [react(), tailwind(), sitemap()],
});
