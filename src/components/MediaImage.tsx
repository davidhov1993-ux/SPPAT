import type { CSSProperties } from 'react'
import { getMedia } from '../data/mediaRegistry'

export type MediaRole = 'hero' | 'card' | 'detail' | 'macro'

export default function MediaImage({ mediaId, role = 'detail', className = '', priority = false }: {
  mediaId?: string; role?: MediaRole; className?: string; priority?: boolean
}) {
  if (!mediaId) return null;
/*
  */
  const media = getMedia(mediaId)
  const crop = media.crops[role as keyof typeof media.crops]!
  const base = `/production/${media.exportName}-${role}`
  const style = {
    '--media-ratio': crop.desktop,
    '--media-mobile-ratio': crop.mobile,
    '--media-focus': media.focus.desktop,
    '--media-mobile-focus': media.focus.mobile
  } as CSSProperties
  return (
    <picture className={`registered-media ${className}`} style={style} data-media-id={mediaId} data-provenance={media.provenance} data-role={role}>
      <source media="(max-width: 600px)" srcSet={`${base}-mobile.webp`} />
      <source media="(max-width: 1023px)" srcSet={`${base}-tablet.webp`} />
      <img src={`${base}-desktop.webp`} alt={media.alt} width={media.width} height={media.height}
        loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} />
    </picture>
  )
}
