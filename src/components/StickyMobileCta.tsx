import CtaArrow from './CtaArrow'

interface StickyMobileCtaProps {
  isVisible: boolean
  label?: string
  ctaUrl?: string
  ctaText?: string
}

export default function StickyMobileCta({ isVisible, label, ctaUrl = '/contact/', ctaText = 'Project bespreken' }: StickyMobileCtaProps) {
  return (
    <div
      className={`sticky-mobile-cta ${isVisible ? 'is-visible' : ''}`}
      aria-hidden={!isVisible}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="sticky-mobile-cta-inner container">
        <span className="sticky-mobile-cta-label">{label}</span>
        <a href={ctaUrl} className="sticky-mobile-cta-btn">
          {ctaText}
          <CtaArrow />
        </a>
      </div>
    </div>
  )
}
