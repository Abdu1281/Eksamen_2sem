import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Ensures the site is built as a static site
  build: {
    format: 'directory', // Default setting for file output
  },
  integrations: [], // Add integrations here (e.g., Tailwind, MDX, etc.)
});

