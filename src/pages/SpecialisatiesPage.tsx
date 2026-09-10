import type { Page } from '../content/types'
import RichText from '../components/RichText'
import Placeholder from '../components/Placeholder'
import { CtaTypeA, CtaTypeB } from '../components/CtaSection'

const specialisatiesImages: Record<string, { src: string; alt: string }> = {
  '/specialisaties/': {
    src: '/references/WhatsApp Image 2025-05-30 at 21.24.03 (2).jpeg',
    alt: 'Specialistisch tegelwerk met complexe formaten en detaillering'
  },
  '/specialisaties/grootformaat-tegels/': {
    src: '/special-references/WhatsApp Image 2025-05-30 at 21.24.06 (6).jpeg',
    alt: 'Verwerking van grootformaat tegels met minimale voeglijnen'
  },
  '/specialisaties/mozaiek-zetten/': {
    src: '/references/WhatsApp Image 2025-05-30 at 21.24.02 (1).jpeg',
    alt: 'Nauwkeurig geplaatst mozaïekwerk in badkamer nis'
  },
  '/specialisaties/natuursteen/': {
    src: '/references/WhatsApp Image 2025-05-30 at 21.24.07 (1).jpeg',
    alt: 'Natuursteen verwerkt met gekalibreerde voegdikte'
  },
  '/specialisaties/keramisch-parket/': {
    src: '/references/WhatsApp Image 2025-05-30 at 21.24.08 (1).jpeg',
    alt: 'Keramisch parket gelegd in strak wildverband'
  }
}

export default function SpecialisatiesPage({ page }: { page: Page }) {
  const isHub = page.url === '/specialisaties/'
  const hero = page.hero
  const media = specialisatiesImages[page.url]

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
        const hasBullets = Boolean(block.bullets && block.bullets.length > 0)
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

                  {/* Bullets Specification List */}
                  {hasBullets && (
                    <ul className="spec-list">
                      {block.bullets!.map(bullet => (
                        <li key={bullet} className="spec-item">
                          <RichText text={bullet} links={sectionLinks} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Hub / Sub-Cards */}
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

      {/* 4. FINAL CTA: Type A for Hub, Type B for Sub-Services */}
      {page.cta && (isHub ? <CtaTypeA block={page.cta} /> : <CtaTypeB block={page.cta} />)}
    </>
  )
}
