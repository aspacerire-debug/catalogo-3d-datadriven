// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  // 👇 Le decimos a Vite que la app vive en /origen
  root: 'origen',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'origen'),
    },
  },
  build: {
    // Salida fuera de /origen para que vercel la encuentre bien
    outDir: '../dist',
    emptyOutDir: true,
  },
})

