import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Páginas utilitárias: ficam fora do sitemap e recebem noindex no Layout.
const FORA_DO_SITEMAP = ['/redirect', '/redefinir-senha', '/agendamentos'];

// https://astro.build/config
export default defineConfig({
  // Necessário para canonical, Open Graph e sitemap absolutos.
  site: 'https://www.predialnet.com.br',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !FORA_DO_SITEMAP.some((rota) => page.includes(rota)),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  output: 'static',
  security: {
    checkOrigin: true
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        }
      }
    }
  }
});
