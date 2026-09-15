import CtaArrow from './CtaArrow'
import MediaImage from './MediaImage'
import MediaCaption from './MediaCaption'

interface CtaTypeAProps {
  
  title?: string
  subtitle?: string
  lead?: string
  body?: string
  ctaUrl?: string
  ctaText?: string
  mediaId?: string
  imageSrc?: string
  imageAlt?: string
}

export default function CtaTypeA({
  sectionNum = '04 / CONTACT',
  title,
  subtitle,
  lead,
  body,
  ctaUrl = '/contact/',
  ctaText = 'Project bespreken',
  mediaId
}: CtaTypeAProps) {
  return (
    <section className="cta-type-a-section cta-type-a" aria-label={title}>
      <div className="container">
        <div className={`cta-type-a-grid almere-cta-grid ${mediaId ? "" : "text-only-cta"}`}>
          <div className="cta-type-a-text almere-cta-text">
            <h2>{title}</h2>
            {subtitle && <h3 className="cta-subheading">{subtitle}</h3>}
            {lead && <p className="lead cta-lead">{lead}</p>}
            {body && <p className="cta-sublead">{body}</p>}
            <div className="cta-action">
              <a href={ctaUrl} className="btn">
                {ctaText}
                <CtaArrow />
              </a>
            </div>
          </div>
          {mediaId && <figure className="cta-type-a-media almere-cta-media">
            <MediaImage mediaId={mediaId} role="detail" />
            <MediaCaption mediaId={mediaId} />
          </figure>}
        </div>
      </div>
    </section>
  )
}
