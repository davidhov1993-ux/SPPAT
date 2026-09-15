import RelatedLinks from '../components/RelatedLinks'
import type { Page } from '../content/types'
import HeroSplit from '../components/HeroSplit'
import CtaTypeB from '../components/CtaTypeB'
import RichText from '../components/RichText'

const NESTED_IMAGES: Record<string, string | undefined> = {
  '/specialisaties/grootformaat-tegels/': undefined,
  '/specialisaties/mozaiek-zetten/': 'ai-niche',
  '/specialisaties/natuursteen/': 'ai-stone',
  '/specialisaties/keramisch-parket/': 'ai-woodlook'
}

export default function SpecialisatiesNestedPage({ page }: { page: Page }) {
  const hero = page.hero
  const imageSrc = NESTED_IMAGES[page.url] || undefined
  const cta = page.cta

  return (
    <div className="spec-nested-page">
      <HeroSplit currentPath={page.url} mediaId={imageSrc} title={hero.H1} eyebrow={hero.Eyebrow} body={hero.Body} ctaUrl={hero['Primary CTA URL']} ctaText={hero['Primary CTA']} />

      {/* SECTION 2 & 3: CONTENT */}
      {page.sections.map((section, index) => (
        <section key={index} className="spec-nested-content-section" aria-label={section.H2 || 'Details'}>
          <div className="container">
            <div className="spec-nested-content-grid">
              <div className="spec-nested-content-block">
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
                
                {page.links && page.links.filter(l => (l.placement === section.id || (index === page.sections.length - 1 && !page.sections.find(s => s.id === l.placement))) && !section.Body?.includes(l.anchor)).map((link, idx) => (
                  <div key={idx} style={{ marginTop: '16px' }}>
                    <a className="inline-link" href={link.url}>{link.anchor}</a>
                  </div>
                ))}

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
      <RelatedLinks urls={page.relatedUrls} />
      {cta && (
        <CtaTypeB 
          
          title={cta.H2 || 'Klaar voor de volgende stap?'}
          body={cta.Body}
          ctaUrl={cta.URL}
          ctaText={cta.Button}
        />
      )}
    </div>
  )
}
