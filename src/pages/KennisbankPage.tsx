import type { Page } from '../content/types'
import RichText from '../components/RichText'
import CtaTypeB from '../components/CtaTypeB'
import BreadcrumbsKennisbank from '../components/BreadcrumbsKennisbank'
import CtaArrow from '../components/CtaArrow'

const hasBusinessInput = (text?: string) => text && text.includes('[BUSINESS INPUT REQUIRED]')

export default function KennisbankPage({ page }: { page: Page }) {
  const isHub = page.url === '/kennisbank/'
  const hero = page.hero

  if (isHub) {
    return (
      <div className="kb-hub-page">
        {/* Hub Hero */}
        <section className="kb-hub-hero" aria-label="Kennisbank introductie">
          <div className="container">
            <div className="kb-hub-hero-grid">
              <div className="kb-hub-hero-text">
                <h1>{hero.H1}</h1>
                {!hasBusinessInput(hero.Body) && hero.Body && <p className="lead">{hero.Body}</p>}
              </div>
              <figure className="kb-hub-hero-img-wrapper">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/production/SPPAT-KB-LASER-hero-mobile.webp" />
                  <source media="(max-width: 960px)" srcSet="/production/SPPAT-KB-LASER-hero-tablet.webp" />
                  <img 
                    src="/production/SPPAT-KB-LASER-hero-desktop.webp" 
                    alt="Sppat Kennisbank Laser" 
                    className="kb-hub-hero-img"
                    fetchPriority="high"
                    width={1440}
                    height={1800}
                  />
                </picture>
              </figure>
            </div>
          </div>
        </section>

        {/* Hub Article Index */}
        {page.sections.map((block, index) => {
          if (!block.cards || block.cards.length === 0) return null
          return (
            <section
              key={block.id || `section-${index}`}
              className="kb-hub-index"
              aria-label={block.H2 || 'Artikelen'}
            >
              <div className="container">
                <div className="kb-hub-index-grid">
                  {block.cards.map((card) => {
                    if (hasBusinessInput(card.Title) || hasBusinessInput(card.Body)) return null
                    return (
                      <article key={card.Title} className="kb-hub-article-item">
                        <h3>{card.Title}</h3>
                        <a href={card['CTA URL']} className="inline-link kb-inline-link">
                          <span>{card.CTA || 'Lees artikel'}</span>
                          <CtaArrow />
                        </a>
                      </article>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        })}
      </div>
    )
  }

  // Article Page System
  return (
    <div className="kb-article-page">
      <div className="container">
        <BreadcrumbsKennisbank title={page.title} />
      </div>

      <article className="kb-article-content">
        <div className="container">
          <header className="kb-article-hero">
            <div className="kb-article-hero-grid">
              <h1>{hero.H1}</h1>
              {!hasBusinessInput(hero.Body) && hero.Body && <p className="lead">{hero.Body}</p>}
            </div>
          </header>

          <div className="kb-article-body">
            {page.sections.map((block, index) => {
              const sectionLinks = page.links?.filter(link =>
                link.placement.toUpperCase().startsWith(block.id || 'NONE')
              ) || []
              
              const showBody = !hasBusinessInput(block.Body) && block.Body;
              const bullets = block.bullets?.filter(b => !hasBusinessInput(b)) || [];

              if (!showBody && bullets.length === 0 && !block.H2 && !block.H3) return null;

              return (
                <section
                  key={block.id || `article-section-${index}`}
                  className="kb-article-section"
                >
                  {block.H2 && <h2>{block.H2}</h2>}
                  {block.H3 && <h3>{block.H3}</h3>}

                  {showBody && (
                    <p>
                      <RichText text={block.Body!} links={sectionLinks} />
                    </p>
                  )}

                  {bullets.length > 0 && (
                    <ul>
                      {bullets.map((bullet, idx) => (
                        <li key={idx}>
                          <RichText text={bullet} links={sectionLinks} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Render unplaced inline links at bottom of section if needed */}
                  {sectionLinks
                      .filter(
                        link =>
                          ![block.Body || '', ...(block.bullets || [])]
                            .join(' ')
                            .includes(link.anchor)
                      )
                      .map((link, idx) => (
                        <div key={idx} style={{ marginTop: '16px' }}>
                          <a href={link.url} className="inline-link kb-inline-link">
                            <span>{link.anchor}</span>
                            <CtaArrow />
                          </a>
                        </div>
                      ))}
                </section>
              )
            })}
          </div>
        </div>
      </article>

      {/* Article Ending CTA */}
      {page.cta && !hasBusinessInput(page.cta.Body) && !hasBusinessInput(page.cta.H2) && (
        <section className="kb-article-cta-wrapper">
          <div className="container">
            <div className="kb-article-cta-grid">
              <div className="kb-article-cta-container">
                <CtaTypeB 
                  sectionNum=""
                  title={page.cta.H2 || ''}
                  body={page.cta.Body}
                  ctaUrl={page.cta.URL}
                  ctaText={page.cta.Button}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
