import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false, // Disable minification for all builds
  },
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['**/*.{ico,png,jpg,gif,svg}'],
      // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'images/*.jpg', 'images/*.png', 'src/assets/*.png'],
      manifest: {
        name: 'Mark Pawlowski Events App',
        short_name: 'MarkPawl Events',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'pwa-64x64.png',
                sizes: '64x64',
                type: 'image/png'
            },
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: 'maskable-icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
      }, 
    })    
  ],
  server:{
    port:5173
  },
})
