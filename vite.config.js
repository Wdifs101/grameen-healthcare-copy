import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // This makes the server listen on all addresses, including the local network.
    port: 5373, // Optional: specify a different port if needed
  },
  plugins: [react()],
})
