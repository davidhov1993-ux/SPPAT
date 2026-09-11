import CtaArrow from './CtaArrow'

interface CtaTypeAProps {
  sectionNum?: string
  title?: string
  subtitle?: string
  lead?: string
  body?: string
  ctaUrl?: string
  ctaText?: string
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
  imageSrc,
  imageAlt
}: CtaTypeAProps) {
  return (
    <section className="cta-type-a-section cta-type-a" aria-label={title}>
      <div className="container">
        <div className="cta-type-a-grid almere-cta-grid">
          <div className="cta-type-a-text almere-cta-text">
            {sectionNum && <span className="section-num" aria-hidden="true">{sectionNum}</span>}
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
          <figure className="cta-type-a-media almere-cta-media">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              loading="lazy"
              className="cta-type-a-img almere-cta-img"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
