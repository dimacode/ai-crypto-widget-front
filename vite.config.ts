import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'widget.js',
        format: 'iife',
        // Не используем витинлайн файлы
      },
    },
    // Отключаем генерацию HTML файла
    manifest: true,
    emptyOutDir: false,
    outDir: 'dist',
    assetsDir: './',
  },
})
