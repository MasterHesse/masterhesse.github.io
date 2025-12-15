import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/masterhesse.github.io/',
  plugins: [vue({include: [/\.vue$/]})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
