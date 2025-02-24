import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA({
    manifest: {
      name: 'JSON Formatter',
      short_name: 'JSON fmt',
      description: 'JSON Formatter',
      start_url: '.',
      display: 'standalone',
      orientation: 'any',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icon-512x512-mask.png',
          sizes: '512x512',
          type: 'image/png',
          // 用途をマスカブルアイコンとする
          purpose: 'maskable',
        },
      ],
      id: "https://github.com/tsunekazuomija/json-formatter",
    }
  })],
})
