import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue';
import imageOptimizer from './src/image-optimizer';
// import buildCompress from './src/build-compress';
// import autoImports from './src/auto-imports';
// import autoUpload from './src/auto-upload';
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
    // buildCompress(),
    // autoUpload({ host: '185.198.166.245', port: 3333, username: 'root', password: "gUbP29RyGunM", localPath: './dist', remotePath: '/usr/share/nginx/html/'}),
  ],
  server: {
    host: "0.0.0.0",
    port: 7788,
    hmr: true
  },
  build: {
    sourcemap: false,
    emptyOutDir: true,
    minify: 'esbuild',
    cssCodeSplit: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 10240,
    rollupOptions: {
      treeshake: true,
      cache: true,
    }, 
  }
})