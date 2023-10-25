import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import react from "@astrojs/react";

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  site: isProd? 'https://home-preferred-solution.vercel.app/':"http://localhost:3000",
  integrations: [react(),tailwind(), compress()]
});