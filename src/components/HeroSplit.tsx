import { forwardRef } from 'react'
import CtaArrow from './CtaArrow'

interface HeroSplitProps {
  eyebrow?: string
  title?: string
  body?: string
  imageSrc?: string
  imageAlt?: string
  ctaText?: string
  ctaUrl?: string
}

const HeroSplit = forwardRef<HTMLElement, HeroSplitProps>(({
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  ctaText,
  ctaUrl
}, ref) => {
  return (
    <section ref={ref} className="service-hero-section" aria-label="Introductie">
      <div className="container">
        <div className="service-hero-grid">
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
          <div className="service-hero-media almere-hero-media">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="almere-hero-img"
              />
            ) : (
              <div className="hero-image-placeholder" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
})

HeroSplit.displayName = 'HeroSplit'

export default HeroSplit
