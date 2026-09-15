import registry from '../content/media.json'

export function getMedia(id: string) {
  const media = registry.find(item => item.id === id)
  if (!media) throw new Error(`Unregistered media: ${id}`)
  return media
}

