import type { Page } from '../content/types'
import RichText from '../components/RichText'
import Placeholder from '../components/Placeholder'
import KennisbankNav from '../components/KennisbankNav'
import { CtaTypeB, CtaTypeC } from '../components/CtaSection'
import CtaArrow from '../components/CtaArrow'

export default function KennisbankPage({ page }: { page: Page }) {
  const isHub = page.url === '/kennisbank/'
  const hero = page.hero

  if (isHub) {
    return (
      <>
        {/* Hub Hero */}
        <section className="hero page-hero" aria-label="Kennisbank introductie">
          <div className="container">
            <div className="article-hero-content">
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
            </div>
          </div>
        </section>

        {/* Hub Sections */}
        {page.sections.map((block, index) => {
          const sectionLinks = page.links.filter(link =>
            link.placement.toUpperCase().startsWith(block.id || 'NONE')
          )
          const hasCards = Boolean(block.cards && block.cards.length > 0)

          return (
            <section
              key={block.id || `section-${index}`}
              className="content-section"
              aria-label={block.H2}
            >
              <div className="container">
                <div className="section-grid-editorial">
                  <div className="editorial-header-col">
                    <span className="section-num" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')} /
                    </span>
                    {block.H2 && <h2>{block.H2}</h2>}
                  </div>

                  <div className="editorial-body-col">
                    {block.Body && (
                      <p>
                        <RichText text={block.Body} links={sectionLinks} />
                      </p>
                    )}

                    {/* 4 Knowledge Article Cards */}
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
                              {card.CTA || 'Lees artikel'}
                              <CtaArrow />
                            </a>
                          </article>
                        ))}
                      </div>
                    )}

                    {block['CTA URL'] && (
                      <div style={{ marginTop: '16px' }}>
                        <a href={block['CTA URL']} className="text-link">
                          {block.CTA}
                          <CtaArrow />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* Hub CTA: Type B */}
        {page.cta && <CtaTypeB block={page.cta} />}
      </>
    )
  }

  // Article Page: Editorial Reading System
  return (
    <>
      {/* Article Hero */}
      <section className="hero article-hero" aria-label="Artikel introductie">
        <div className="container">
          <div className="article-hero-content">
            <p className="eyebrow">
              <span aria-hidden="true">—</span>
              Kennisbank &amp; Techniek
            </p>
            <h1>{hero.H1}</h1>
            {hero.Body && <p className="lead">{hero.Body}</p>}
          </div>
        </div>
      </section>

      {/* Editorial Reading Layout */}
      <section className="kennisbank-reading-section" aria-label="Artikel inhoud">
        <div className="container">
          {/* Mobile / Tablet: Inline navigation BEFORE main article */}
          <div className="kennisbank-inline-nav">
            <KennisbankNav currentUrl={page.url} />
          </div>

          <div className="kennisbank-layout">
            {/* Main Reading Column */}
            <article className="kennisbank-reading-col">
              {page.sections.map((block, index) => {
                const sectionLinks = page.links.filter(link =>
                  link.placement.toUpperCase().startsWith(block.id || 'NONE')
                )
                const hasBullets = Boolean(block.bullets && block.bullets.length > 0)

                return (
                  <section
                    key={block.id || `article-section-${index}`}
                    className="kennisbank-article-block"
                  >
                    {block.H2 && <h2>{block.H2}</h2>}
                    {block.H3 && <h3>{block.H3}</h3>}

                    {block.Body && (
                      <p style={{ marginTop: '16px' }}>
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

                    {/* Bullet Points */}
                    {hasBullets && (
                      <ul className="spec-list" style={{ marginTop: '20px' }}>
                        {block.bullets!.map(bullet => (
                          <li key={bullet} className="spec-item">
                            <RichText text={bullet} links={sectionLinks} />
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Approved Diagram Slot (Placeholder) if specified */}
                    {block.Visual && (
                      <div style={{ marginTop: '24px' }}>
                        <Placeholder
                          aspectRatio="16 / 9"
                          alt={block.ALT || block.H2 || 'Technisch diagram'}
                        />
                      </div>
                    )}
                  </section>
                )
              })}
            </article>

            {/* Desktop Sidebar: Contextual Navigation & Micro CTA */}
            <aside className="kennisbank-sidebar-col" aria-label="Gerelateerde dossiers">
              <KennisbankNav currentUrl={page.url} />
              <CtaTypeC />
            </aside>
          </div>
        </div>
      </section>

      {/* Article Ending CTA: Type B Technical Asymmetric */}
      {page.cta && <CtaTypeB block={page.cta} />}
    </>
  )
}
