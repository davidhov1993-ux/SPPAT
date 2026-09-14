import type { Page } from '../content/types'
import Breadcrumbs from '../components/Breadcrumbs'
import { CtaTypeA } from '../components/CtaSection'

export default function ProjectsPage({ page, projectCases }: { page: Page, projectCases: { id: string, slug: string, title: string, heroImage: string }[] }) {
  const hero = page.hero
  const case01 = projectCases.find(p => p.id === 'CASE-01')
  const case02 = projectCases.find(p => p.id === 'CASE-02')
  const case03 = projectCases.find(p => p.id === 'CASE-03')
  const case04 = projectCases.find(p => p.id === 'CASE-04')
  const case05 = projectCases.find(p => p.id === 'CASE-05')
  const case06 = projectCases.find(p => p.id === 'CASE-06')

  return (
    <div className="portfolio-page">
      <section className="portfolio-intro-section" aria-label="Projecten introductie">
        <div className="container">
          <Breadcrumbs currentPath={page.url} title={page.title} />
          <div className="portfolio-intro-text">
            {hero.Eyebrow && (
              <p className="eyebrow">
                <span aria-hidden="true">—</span>
                {hero.Eyebrow}
              </p>
            )}
            <h1>{hero.H1}</h1>
            {hero.Body && <p className="lead">{hero.Body}</p>}
            <p className="portfolio-disclosure">
              Deze projectcases zijn representatieve voorbeelden uit onze praktijkervaring (40+ jaar / 1.000+ projecten).
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-cases-section" aria-label="Gerealiseerd werk">
        <h2 className="sr-only">Recent opgeleverd</h2>
        <div className="container">
          {/* Featured CASE-01 */}
          {case01 && (
            <div className="portfolio-featured">
              <article className="portfolio-case-item">
                <a href={`/projecten/${case01.slug}/`}>
                  <figure className="portfolio-figure portfolio-figure-featured">
                    <img src={case01.heroImage} alt={case01.title} loading="lazy" />
                  </figure>
                  <h2 className="portfolio-case-title">{case01.title}</h2>
                </a>
              </article>
            </div>
          )}

          {/* EDITORIAL GRID */}
          <div className="portfolio-editorial-grid">
            {case02 && (
              <article className="portfolio-case-item project-layout-portrait-left">
                <a href={`/projecten/${case02.slug}/`}>
                  <figure className="portfolio-figure portfolio-figure-portrait">
                    <img src={case02.heroImage} alt={case02.title} loading="lazy" />
                  </figure>
                  <h3 className="portfolio-case-title">{case02.title}</h3>
                </a>
              </article>
            )}
            
            {case03 && (
              <article className="portfolio-case-item project-layout-landscape-right">
                <a href={`/projecten/${case03.slug}/`}>
                  <figure className="portfolio-figure portfolio-figure-landscape">
                    <img src={case03.heroImage} alt={case03.title} loading="lazy" />
                  </figure>
                  <h3 className="portfolio-case-title">{case03.title}</h3>
                </a>
              </article>
            )}

            {case04 && (
              <article className="portfolio-case-item project-layout-landscape-left">
                <a href={`/projecten/${case04.slug}/`}>
                  <figure className="portfolio-figure portfolio-figure-landscape">
                    <img src={case04.heroImage} alt={case04.title} loading="lazy" />
                  </figure>
                  <h3 className="portfolio-case-title">{case04.title}</h3>
                </a>
              </article>
            )}

            {case05 && (
              <article className="portfolio-case-item project-layout-portrait-right">
                <a href={`/projecten/${case05.slug}/`}>
                  <figure className="portfolio-figure portfolio-figure-portrait">
                    <img src={case05.heroImage} alt={case05.title} loading="lazy" />
                  </figure>
                  <h3 className="portfolio-case-title">{case05.title}</h3>
                </a>
              </article>
            )}

            {case06 && (
              <article className="portfolio-case-item project-layout-final">
                <a href={`/projecten/${case06.slug}/`}>
                  <figure className="portfolio-figure portfolio-figure-landscape">
                    <img src={case06.heroImage} alt={case06.title} loading="lazy" />
                  </figure>
                  <h3 className="portfolio-case-title">{case06.title}</h3>
                </a>
              </article>
            )}
          </div>
        </div>
      </section>

      {page.cta && (
        <div className="portfolio-cta-section">
          <CtaTypeA block={page.cta} />
        </div>
      )}
    </div>
  )
}
