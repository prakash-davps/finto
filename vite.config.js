import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/finto/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
})
