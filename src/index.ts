// import type { Plugin } from 'vite'
// import { generateRoutes } from './utils'
// interface Options {
//   pagesDir?: string
//   outputFile?: string
// }

// export default (options: Options = {}): Plugin => {
//   const config = {
//     pageDir: options.pagesDir || 'src/pages',
//     outputFile: options.outputFile || 'src/router/index.ts',
//   }
//   return {
//     name: 'vite-plugin-auto-router',
//     buildStart() {
//       generateRoutes(config)
//     },
//     configureServer(server) {
//       server.watcher.on('add', (path) => {
//         if (path.includes(config.pageDir)) {
//           generateRoutes(config)
//         }
//       })
//     }
//   }
// }

import sharp from 'sharp'
export const imageOptimizer = () => ({
  name: 'vite-plugin-image-optimizer',
  async transform(code: string, id: string) {
    if (/\.(.png|jpe?g|webp)$/.test(id)) {
      console.log("ssssssssss", code, id);
      const buffer = await sharp(code).webp({ quality: 80 }).toBuffer()
      return `export default ${JSON.stringify(buffer.toString('base64'))}`
    }
  }
})