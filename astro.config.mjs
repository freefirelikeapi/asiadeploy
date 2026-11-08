import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pirlotv-hd.live',
  compressHTML: false,
  build: { format: 'preserve' },
});
