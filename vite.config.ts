import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import imageOptimizer from './src/image-optimizer'
import buildCompress from './src/build-compress'

export default defineConfig({
  publicDir: "assets",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    // 引用imageOptimizer插件
    imageOptimizer(),
    buildCompress(),
  ],
  server: {
    host: "0.0.0.0",
    port: 7788,
    hmr: true
  }
})