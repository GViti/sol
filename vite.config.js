import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Aggiungi il percorso di base per gestire le risorse relative
  plugins: [react()],
  build: {
    outDir: 'dist',  // Specifica la directory di output della build
  },
})
