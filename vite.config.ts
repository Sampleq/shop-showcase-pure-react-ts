import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: 'https://sampleq.github.io/shop-showcase-pure-react-ts/', // адрес на который будет заливаться готовый билд (по которому будет доступен сайт)

  resolve: {
    /* for @ path aliases */
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
