import type { Page } from '../content/types'
import CtaArrow from '../components/CtaArrow'
import CtaTypeB from '../components/CtaTypeB'
import RichText from '../components/RichText'

const NESTED_IMAGES: Record<string, string> = {
  '/specialisaties/grootformaat-tegels/': '/media/Generated Image September 11, 2026 - 2_02PM.jpg',
  '/specialisaties/mozaiek-zetten/': '/media/Generated Image September 11, 2026 - 2_04PM.jpg',
  '/specialisaties/natuursteen/': '/media/Generated Image September 11, 2026 - 2_05PM.jpg',
  '/specialisaties/keramisch-parket/': '/media/Generated Image September 11, 2026 - 2_07PM.jpg'
}

export default function SpecialisatiesNestedPage({ page }: { page: Page }) {
  const hero = page.hero
  const imageSrc = NESTED_IMAGES[page.url] || '/media/Generated Image September 11, 2026 - 2_02PM.jpg'
  const cta = page.cta

  return (
    <div className="spec-nested-page">
      {/* SECTION 1: HERO */}
      <section className="spec-nested-hero-section" aria-label="Introductie">
        <div className="container-fluid" style={{ padding: 0 }}>
          <figure className="spec-nested-hero-img-wrapper">
            <img 
              src={imageSrc}
              alt={hero.ALT || hero.H1}
              fetchPriority="high"
              className="spec-nested-hero-img"
            />
          </figure>
        </div>
        <div className="container">
          <div className="spec-nested-hero-text-grid">
            <div className="spec-nested-hero-text">
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
              {hero['Primary CTA URL'] && (
                <div style={{ marginTop: '16px' }}>
                  <a href={hero['Primary CTA URL']} className="btn btn-primary">
                    {hero['Primary CTA'] || 'Project bespreken'}
                    <CtaArrow />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: CONTENT */}
      {page.sections.map((section, index) => (
        <section key={index} className="spec-nested-content-section" aria-label={section.H2 || 'Details'}>
          <div className="container">
            <div className="spec-nested-content-grid">
              <div className="spec-nested-content-block">
                <span className="section-num" aria-hidden="true">0{index + 1} / OVERZICHT</span>
                {section.H2 && <h2>{section.H2}</h2>}
                {section.Body && (
                  <p className="lead">
                    <RichText text={section.Body} links={page.links} />
                  </p>
                )}
                
                {section.bullets && section.bullets.length > 0 && (
                  <ul>
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <RichText text={bullet} links={page.links} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ IF EXISTS */}
      {page.faq && page.faq.length > 0 && (
        <section className="spec-nested-content-section" aria-label="FAQ">
          <div className="container">
            <div className="spec-nested-content-grid">
              <div className="spec-nested-content-block">
                <span className="section-num" aria-hidden="true">FAQ</span>
                <h2>Veelgestelde vragen</h2>
                <div className="almere-faq-list" style={{ textAlign: 'left', marginTop: '32px' }}>
                  {page.faq.map((item, index) => (
                    <div className="almere-faq-item" key={index}>
                      <h3 className="almere-faq-question">{item.question}</h3>
                      <p className="almere-faq-answer">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: FINAL CTA */}
      {cta && (
        <CtaTypeB 
          sectionNum="03 / CONTACT"
          title={cta.H2 || 'Klaar voor de volgende stap?'}
          body={cta.Body}
          ctaUrl={cta.URL}
          ctaText={cta.Button}
        />
      )}
    </div>
  )
}
