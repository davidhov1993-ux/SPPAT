import type { Page } from '../content/types'
import { CtaTypeA } from '../components/CtaSection'

export default function ProjectsPage({ page }: { page: Page }) {
  const hero = page.hero
  const cta = page.cta

  return (
    <>
      <section className="hero page-hero" aria-label="Projecten introductie">
        <div className="container">
          <div className="article-hero-content">
            <p className="eyebrow">
              <span aria-hidden="true">—</span>
              Portfolio & Vakmanschap
            </p>
            <h1>{hero.H1}</h1>
            {hero.Body && <p className="lead">{hero.Body}</p>}
          </div>
        </div>
      </section>

      <section className="content-section" aria-label="Gerealiseerd werk">
        <div className="container">
          
          {/* PRJ-01 */}
          <article className="project-series" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="section-num">PROJECT 01</span>
            <h2>Grootformaat Badkamer & Inloopdouche</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
              <div className="col-span-8">
                <picture>
                  <source srcSet="/production/SPPAT-PROJ-01-bath08-1-hero-desktop.webp" media="(min-width: 1024px)" />
                  <source srcSet="/production/SPPAT-PROJ-01-bath08-1-hero-tablet.webp" media="(min-width: 834px)" />
                  <img src="/production/SPPAT-PROJ-01-bath08-1-hero-mobile.webp" alt="Grootformaat badkamer overzicht" style={{ width: '100%', objectFit: 'cover' }} loading="lazy" />
                </picture>
              </div>
              <div className="col-start-9 col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <picture>
                  <source srcSet="/production/SPPAT-PROJ-01-bath08-2-detail-desktop.webp" media="(min-width: 1024px)" />
                  <img src="/production/SPPAT-PROJ-01-bath08-2-detail-tablet.webp" alt="Detail 1" style={{ width: '100%', objectFit: 'cover' }} loading="lazy" />
                </picture>
                <picture>
                  <source srcSet="/production/SPPAT-PROJ-01-bath08-3-detail-desktop.webp" media="(min-width: 1024px)" />
                  <img src="/production/SPPAT-PROJ-01-bath08-3-detail-tablet.webp" alt="Detail 2" style={{ width: '100%', objectFit: 'cover' }} loading="lazy" />
                </picture>
              </div>
            </div>
          </article>

          {/* PRJ-02 */}
          <article className="project-series" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="section-num">PROJECT 02</span>
            <h2>Woonkamervloer & Trapopgang</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
              <div className="col-span-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <picture>
                  <source srcSet="/production/SPPAT-PROJ-03-floor07-1-hero-desktop.webp" media="(min-width: 1024px)" />
                  <img src="/production/SPPAT-PROJ-03-floor07-1-hero-tablet.webp" alt="Detail tegelvloer" style={{ width: '100%', objectFit: 'cover' }} loading="lazy" />
                </picture>
              </div>
              <div className="col-start-7 col-span-6">
                <picture>
                  <source srcSet="/production/SPPAT-PROJ-03-floor07-9-hero-desktop.webp" media="(min-width: 1024px)" />
                  <source srcSet="/production/SPPAT-PROJ-03-floor07-9-hero-tablet.webp" media="(min-width: 834px)" />
                  <img src="/production/SPPAT-PROJ-03-floor07-9-hero-mobile.webp" alt="Overzicht tegelvloer" style={{ width: '100%', objectFit: 'cover' }} loading="lazy" />
                </picture>
              </div>
            </div>
          </article>

          {/* PRJ-03 */}
          <article className="project-series" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="section-num">PROJECT 03</span>
            <h2>Hal & Entree Vloer</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
              <div className="col-span-12">
                <picture>
                  <source srcSet="/production/SPPAT-PROJ-06-res04-4-hero-desktop.webp" media="(min-width: 1024px)" />
                  <source srcSet="/production/SPPAT-PROJ-06-res04-4-hero-tablet.webp" media="(min-width: 834px)" />
                  <img src="/production/SPPAT-PROJ-06-res04-4-hero-mobile.webp" alt="Hal tegelwerk" style={{ width: '100%', objectFit: 'cover' }} loading="lazy" />
                </picture>
              </div>
            </div>
          </article>

        </div>
      </section>

      {cta && (
        <CtaTypeA block={cta} />
      )}
    </>
  )
}
