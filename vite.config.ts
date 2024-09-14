import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['dayjs/locale/pt-br'], // Confirme que o alias é necessário
    },
  },
  resolve: {
    alias: {
      'dayjs/locale/pt-BR': 'dayjs/locale/pt-br',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
