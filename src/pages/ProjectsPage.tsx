
import type { Page, ProjectCase } from '../content/types'
import CtaTypeB from '../components/CtaTypeB'
import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'

export default function ProjectsPage({ page, projectCases }: { page: Page; projectCases: ProjectCase[] }) {
  const featured = projectCases[0]
  const remaining = projectCases.slice(1)

  return (
    <div className="portfolio-page">
      <section className="portfolio-intro-section" aria-label="Projecten introductie" style={{ padding: '80px 0 40px' }}>
        <div className="container portfolio-intro-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="sr-only">Recent opgeleverd</h2>
          <h1>{page.hero.H1}</h1>
          <p className="lead" style={{ whiteSpace: 'pre-wrap' }}>{page.hero.Body}</p>
          <p className="portfolio-disclosure" style={{ marginTop: '24px', fontStyle: 'italic', color: 'var(--color-text-light)' }}>
            {page.disclosure}
          </p>
        </div>
      </section>

      {featured && (
        <section className="portfolio-featured-section" aria-label="Uitgelicht project">
          <div className="container">
            <a href={`/projecten/${featured.slug}/`} style={{ display: 'block', textDecoration: 'none' }}>
              <figure className="portfolio-figure" style={{ margin: 0 }}>
                <MediaImage mediaId={featured.heroMedia} role="hero" className="featured-project-img" />
                <MediaCaption mediaId={featured.heroMedia} />
              </figure>
              <h2 className="portfolio-case-title" style={{ textAlign: 'center', marginTop: '24px', fontSize: 'clamp(24px, 3vw, 36px)' }}>
                {featured.title}
              </h2>
            </a>
          </div>
        </section>
      )}

      <section className="portfolio-cases-section" aria-label="Overige projectcases" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="portfolio-editorial-grid">
            {remaining.map((project, index) => (
              <article key={project.id} className={`portfolio-case-item case-position-${index + 2}`}>
                <a href={`/projecten/${project.slug}/`}>
                  <figure className="portfolio-figure">
                    <MediaImage mediaId={project.heroMedia} role="card" />
                    <MediaCaption mediaId={project.heroMedia} />
                  </figure>
                  <h3 className="portfolio-case-title" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>
                    {project.title}
                  </h3>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.cta && (
        <CtaTypeB 
          title={page.cta.H2 || 'Project bespreken?'} 
          body={page.cta.Body} 
          ctaUrl={page.cta.URL || '/contact/'} 
          ctaText={page.cta.Button || 'Contact'} 
        />
      )}
    </div>
  )
}
