import RelatedLinks from '../components/RelatedLinks'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import { CtaTypeB } from '../components/CtaSection'

export default function AboutPage({ page }: { page: Page }) {
  const hero = page.hero

  return (
    <>
      {/* 1. HERO */}
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
        </div>
      </section>

      {/* 2. SECTION 2 */}
      {page.sections.map((section, index) => (
        <section key={section.id || index} className="content-section" aria-label={section.H2}>
          <div className="container">
            <div className="section-grid-editorial">
              <div className="editorial-header-col">
                <h2>{section.H2}</h2>
              </div>
              <div className="editorial-body-col">
                {section.Body && (
                  <p>
                    <RichText text={section.Body} links={page.links} />
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. TYPE B CTA */}
      <RelatedLinks urls={page.relatedUrls} />
      {page.cta && <CtaTypeB block={page.cta} />}
    </>
  )
}
