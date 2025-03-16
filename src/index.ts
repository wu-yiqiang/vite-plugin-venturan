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
