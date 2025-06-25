import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@quizstream/assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      {
        find: '@quizstream/components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@quizstream/contexts',
        replacement: resolve(__dirname, './src/contexts'),
      },
      {
        find: '@quizstream/i18n',
        replacement: resolve(__dirname, './src/i18n'),
      },
      {
        find: '@quizstream/pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@quizstream/routes',
        replacement: resolve(__dirname, './src/routes'),
      },
      {
        find: '@quizstream/themes',
        replacement: resolve(__dirname, './src/themes'),
      },
      {
        find: '@quizstream/types',
        replacement: resolve(__dirname, './src/types'),
      },
      {
        find: '@quizstream/utils',
        replacement: resolve(__dirname, './src/utils'),
      },
    ],
  },
});
