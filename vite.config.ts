import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [react(), 
    tsconfigPaths(), 
    visualizer({ 
      open: true, 
      filename: 'bundle-stats.html', // output file
      gzipSize: true,
      brotliSize: true })],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.rawg.io/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build:{
   chunkSizeWarningLimit: 1600, // Increase the chunk size warning limit to 1600 KB 
  }
})



 
// export default defineConfig({
//   plugins: [
//     react(),
//     visualizer({ open: true })
//   ],
// })