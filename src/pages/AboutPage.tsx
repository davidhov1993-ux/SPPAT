import type { Page } from '../content/types'
import RichText from '../components/RichText'
import { CtaTypeB } from '../components/CtaSection'

export default function AboutPage({ page }: { page: Page }) {
  const hero = page.hero
  const section = page.sections[0]

  return (
    <>
      <section className="hero page-hero" aria-label="Over Sppat">
        <div className="container">
          <div className="article-hero-content">
            <p className="eyebrow">
              <span aria-hidden="true">—</span>
              Over Sppat
            </p>
            <h1>{hero.H1}</h1>
            {hero.Body && <p className="lead">{hero.Body}</p>}
          </div>
          
          {/* Workmanship visual 16:9 */}
          <div style={{ marginTop: 'var(--space-md)' }}>
             <img src="/media/sppat-real-process-tiling.jpg" alt="Vakmanschap in tegelwerk" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} loading="lazy" />
          </div>
        </div>
      </section>

      {section && (
        <section className="content-section" aria-label={section.H2} style={{ marginTop: 'var(--space-xl)' }}>
          <div className="container">
            <div className="section-grid-editorial grid-12">
              <div className="editorial-header-col col-span-4">
                <span className="section-num">01 / FILOSOFIE</span>
                <h2>{section.H2}</h2>
              </div>
              <div className="editorial-body-col col-start-5 col-span-6">
                {section.Body && (
                  <p>
                    <RichText text={section.Body} links={page.links} />
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {page.cta && (
         <div style={{ marginTop: 'var(--space-xl)' }}>
            <CtaTypeB block={page.cta} />
         </div>
      )}
    </>
  )
}
