import CtaArrow from './CtaArrow'

interface CtaTypeBProps {
  
  title?: string
  body?: string
  ctaUrl?: string
  ctaText?: string
}

export default function CtaTypeB({
  title,
  body,
  ctaUrl = '/contact/',
  ctaText = 'Project bespreken'
}: CtaTypeBProps) {
  return (
    <section className="service-cta-section" aria-label="Afsluiting & Contact">
      <div className="container">
        <div className="cta-type-b">
          <h2>{title}</h2>
          {body && <p className="lead cta-lead">{body}</p>}
          <div className="cta-action">
            <a href={ctaUrl} className="btn btn-primary">
              {ctaText}
              <CtaArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
