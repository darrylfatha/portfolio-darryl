import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' supaya bisa di-hosting di mana saja (GitHub Pages, Netlify, Vercel)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
