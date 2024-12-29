import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  //for adding proxies
  server: {
    proxy: {
      '/jokes': 'https://fullstackfrontend01.onrender.com/'
    }
    
  },
  plugins: [react()],
})
