import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js', 
        chunkFileNames: 'assets/[name].[hash].js',  
        assetFileNames: 'assets/[name].[hash].[ext]',  
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'no-store',  
    },
  },
});
