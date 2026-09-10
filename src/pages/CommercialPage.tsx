import type { Page } from '../content/types'
import RichText from '../components/RichText'
import Placeholder from '../components/Placeholder'
import { CtaTypeA } from '../components/CtaSection'

const serviceImages: Record<string, { src: string; alt: string }> = {
  '/complete-badkamer-renovatie/': {
    src: '/references/WhatsApp Image 2025-05-30 at 21.24.08.jpeg',
    alt: 'Compleet gerenoveerde badkamer met inloopdouche en modern tegelwerk'
  },
  '/complete-badkamer-renovatie/almere/': {
    src: '/references/ref_1.jpeg',
    alt: 'Badkamer renovatie in Almere met grootformaat tegels en strakke detaillering'
  },
  '/complete-toilet-renovatie/': {
    src: '/references/WhatsApp Image 2025-05-30 at 21.24.01 (5).jpeg',
    alt: 'Strak gerenoveerd toilet met inbouwreservoir en wandtegels'
  }
}

export default function CommercialPage({ page }: { page: Page }) {
  const hero = page.hero
  const media = serviceImages[page.url]

  return (
    <>
      {/* 1. HERO */}
      <section className="hero page-hero" aria-label="Introductie">
        <div className="container">
          <div className="hero-split-grid">
            <div className="page-hero-text">
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
              {hero['Primary CTA URL'] && (
                <div>
                  <a href={hero['Primary CTA URL']} className="btn">
                    {hero['Primary CTA']}
                    <span className="btn-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </div>

            <div className="page-hero-media">
              {media ? (
                <figure>
                  <img
                    src={media.src}
                    alt={hero.ALT || media.alt}
                    fetchPriority="high"
                  />
                  <figcaption className="reference-caption">referentiebeelden</figcaption>
                </figure>
              ) : (
                <Placeholder aspectRatio="4 / 3" alt={hero.ALT || hero.H1} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTIONS */}
      {page.sections.map((block, index) => {
        const sectionLinks = page.links.filter(link =>
          link.placement.toUpperCase().startsWith(block.id || 'NONE')
        )
        const isTimeline = Boolean(block.bullets && block.bullets.length > 0)
        const hasCards = Boolean(block.cards && block.cards.length > 0)

        return (
          <section
            key={block.id || `section-${index}`}
            className="content-section"
            aria-label={block.H2 || block.H3}
          >
            <div className="container">
              <div className="section-grid-editorial">
                <div className="editorial-header-col">
                  <span className="section-num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')} /
                  </span>
                  {block.H2 && <h2>{block.H2}</h2>}
                  {block.H3 && <h3>{block.H3}</h3>}
                </div>

                <div className="editorial-body-col">
                  {block.Body && (
                    <p>
                      <RichText text={block.Body} links={sectionLinks} />
                    </p>
                  )}

                  {/* Fallback for unplaced approved internal anchors */}
                  {sectionLinks
                    .filter(
                      link =>
                        ![block.Body || '', ...(block.bullets || [])]
                          .join(' ')
                          .includes(link.anchor)
                    )
                    .map(link => (
                      <p key={link.url}>
                        <a href={link.url}>{link.anchor}</a>
                      </p>
                    ))}

                  {/* Numbered Sequence / Process Timeline */}
                  {isTimeline && (
                    <ol className="timeline-list">
                      {block.bullets!.map((bullet, bIdx) => (
                        <li key={bullet} className="timeline-item">
                          <span className="timeline-index" aria-hidden="true">
                            {String(bIdx + 1).padStart(2, '0')}
                          </span>
                          <div className="timeline-content">
                            <RichText text={bullet} links={sectionLinks} />
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* Secondary Cards */}
                  {hasCards && (
                    <div className="sub-cards-grid">
                      {block.cards!.map((card, cIdx) => (
                        <article key={card.Title} className="sub-card">
                          <div>
                            <span className="card-order-num" aria-hidden="true">
                              {String(cIdx + 1).padStart(2, '0')}
                            </span>
                            <h3>
                              <a href={card['CTA URL']}>{card.Title}</a>
                            </h3>
                            {card.Body && <p>{card.Body}</p>}
                          </div>
                          <a href={card['CTA URL']} className="text-link">
                            {card.CTA || 'Lees meer'}
                            <span className="btn-arrow" aria-hidden="true">↗</span>
                          </a>
                        </article>
                      ))}
                    </div>
                  )}

                  {block['CTA URL'] && (
                    <div style={{ marginTop: '16px' }}>
                      <a href={block['CTA URL']} className="text-link">
                        {block.CTA}
                        <span className="btn-arrow" aria-hidden="true">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* 3. FAQ ACCORDIONS */}
      {page.faq && page.faq.length > 0 && (
        <section className="faq-section" aria-label="Veelgestelde vragen">
          <div className="container faq-container">
            <h2 className="faq-header">Veelgestelde vragen</h2>
            <div className="faq-list">
              {page.faq.map(({ question, answer }) => (
                <details key={question} className="faq-item">
                  <summary className="faq-summary">
                    <span>{question}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq-body">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. TYPE A FINAL CTA */}
      {page.cta && <CtaTypeA block={page.cta} />}
    </>
  )
}
