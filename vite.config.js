import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 3000,        // Ensure it's on the desired port (default 3000)
  },
  base: '/ieltsquestionasker/',
})
