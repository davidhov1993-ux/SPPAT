import { readFile, mkdir } from 'node:fs/promises'
import sharp from 'sharp'

// Crop-only derivatives. Source masters are immutable, checksummed and outside public/.
const media = JSON.parse(await readFile('src/content/media.json', 'utf8'))
await mkdir('public/production', { recursive: true })
for (const asset of media) {
  const metadata = await sharp(asset.source).metadata()
  if (metadata.width !== asset.width || metadata.height !== asset.height) throw new Error(`Master changed: ${asset.source}`)
  for (const [role, crop] of Object.entries(asset.crops)) {
    for (const [breakpoint, maxWidth] of [['desktop', 1440], ['tablet', 960], ['mobile', 640]]) {
      const ratio = (breakpoint === 'mobile' ? crop.mobile : crop.desktop).split('/').map(Number)
      const targetRatio = ratio[0] / ratio[1]
      const width = Math.min(asset.width, Math.floor(asset.height * targetRatio))
      const height = Math.min(asset.height, Math.floor(width / targetRatio))
      const focus = asset.focus[breakpoint === 'mobile' ? 'mobile' : 'desktop'].split(' ').map(s => Number(s.replace('%', '')) / 100)
      const left = Math.round((asset.width - width) * focus[0])
      const top = Math.round((asset.height - height) * focus[1])
      await sharp(asset.source).extract({ left, top, width, height })
        .resize({ width: Math.min(width, maxWidth), withoutEnlargement: true }).webp({ quality: 88 })
        .toFile(`public/production/${asset.exportName}-${role}-${breakpoint}.webp`)
    }
  }
}
console.log(`Prepared crop-only responsive derivatives for ${media.length} registered sources.`)
