import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteCompression({
      algorithm: 'gzip', // or 'brotliCompress'
      ext: '.gz', // or '.br'
      // Other options
    }),
  ],
});
