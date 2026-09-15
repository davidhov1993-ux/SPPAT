import { forwardRef } from 'react'
import CtaArrow from './CtaArrow'
import MediaImage from './MediaImage'
import MediaCaption from './MediaCaption'
import { serviceMedia } from '../data/media'

interface HeroSplitProps {
  eyebrow?: string
  title?: string
  body?: string
  mediaId?: string
  imageSrc?: string
  imageAlt?: string
  imageClassName?: string
  ctaText?: string
  ctaUrl?: string
  currentPath?: string
  pageTitle?: string
}

const HeroSplit = forwardRef<HTMLElement, HeroSplitProps>(({
  eyebrow,
  title,
  body,
  mediaId,
  ctaText,
  ctaUrl,
  imageClassName = "almere-hero-img",
  currentPath
}, ref) => {
  const selectedMedia = mediaId || serviceMedia[currentPath || '']?.hero
  return (
    <section ref={ref} className="service-hero-section" aria-label="Introductie">
      <div className="container">
        <div className={`service-hero-grid ${selectedMedia ? "" : "text-only-hero"}`}>
          <div className="service-hero-text">
            {eyebrow && (
              <p className="eyebrow">
                <span aria-hidden="true">—</span>
                {eyebrow}
              </p>
            )}
            <h1>{title}</h1>
            {body && <p className="lead">{body}</p>}
            {ctaUrl && (
              <div className="service-hero-cta hero-cta-action">
                <a href={ctaUrl} className="btn btn-primary">
                  {ctaText || 'Project bespreken'}
                  <CtaArrow />
                </a>
              </div>
            )}
          </div>
          {selectedMedia && <figure className="service-hero-media almere-hero-media">
            <MediaImage mediaId={selectedMedia} role="hero" priority className={imageClassName} />
            <MediaCaption mediaId={selectedMedia} />
          </figure>}
        </div>
      </div>
    </section>
  )
})

HeroSplit.displayName = 'HeroSplit'

export default HeroSplit
