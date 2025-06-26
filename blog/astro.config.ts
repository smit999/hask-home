import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Replace with your actual domain
  base: '/blog',
  outDir: '../build/blog',
  integrations: [tailwind()]
});
