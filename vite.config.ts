import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: true,
    // Extract CSS to separate files for explicit loading
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: 'widget.js',
        assetFileNames: 'widget-[name]-[hash][extname]',
        format: 'iife',
      },
      // Make sure styles are included in the output
      preserveEntrySignatures: false,
    },
    // Отключаем генерацию HTML файла
    manifest: true,
    emptyOutDir: false,
    outDir: 'dist',
    assetsDir: './',
  },
  css: {
    // Process CSS properly
    devSourcemap: true,
  },
})
