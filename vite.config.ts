import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
