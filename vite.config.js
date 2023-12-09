import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // configure test environment for vite application
  test: {
    globals: true,
    environment: 'happy-dom' // A "browser-like" environment for testing
  }
})