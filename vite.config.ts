import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: false,
    emptyOutDir: true,
    minify: 'esbuild',
    cssCodeSplit: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 10240,
    target: "modules",
    rollupOptions: {
      treeshake: true,
      cache: true,
      output: {
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
        assetFileNames: '[ext]/[name].[ext]',
      }
    }, 
  }
})