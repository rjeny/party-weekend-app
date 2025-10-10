// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [db(), react(), svelte(), vue()]
});