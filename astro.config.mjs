import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  site: "http://localhost:3000",
  integrations: [react(),tailwind(), compress()]
});