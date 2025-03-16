import sharp from 'sharp'
const imageOptimizer = () => {
  return {
    name: 'vite-plugin-image-optimizer',
    async transform(code: string, id: string, options: object) {
      if (/\.(png|jpe?g|webp)$/.test(id)) {
        const path = '/Users/atlas/vite-plugin-venturan/assets/images/1.jpeg'
        console.log('sssssssadasda', options)
        const buffer = await sharp(path).webp({ quality: 60 }).toBuffer()
        return `export default ${JSON.stringify('data:image/jpeg;base64,' + buffer.toString('base64'))}`
      }
    }
  }
}


export default imageOptimizer;