import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // or 'brotliCompress'
      ext: '.gz', // or '.br'
      // Other options
    }),
  ],
});
