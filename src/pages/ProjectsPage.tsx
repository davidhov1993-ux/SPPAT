import type { Page, ProjectCase } from '../content/types'
import { CtaTypeA } from '../components/CtaSection'
import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'

export default function ProjectsPage({ page, projectCases }: { page: Page; projectCases: ProjectCase[] }) {
  return <div className="portfolio-page">
    <section className="portfolio-intro-section" aria-label="Projecten introductie"><div className="container portfolio-intro-text">
      <h2 className="sr-only">Recent opgeleverd</h2><h1>{page.hero.H1}</h1>
      <p className="lead" style={{ whiteSpace: 'pre-wrap' }}>{page.hero.Body}</p>
      <p className="portfolio-disclosure">{page.disclosure}</p>
      <p className="portfolio-disclosure">{page.mediaDisclosure}</p>
      <a className="btn" href={page.hero['Primary CTA URL']}>{page.hero['Primary CTA']}</a>
    </div></section>
    <section className="portfolio-cases-section" aria-label="Representatieve projectcases"><div className="container portfolio-editorial-grid">
      {projectCases.map((project, index) => <article key={project.id} className={`portfolio-case-item case-position-${index + 1}`}>
        <a href={`/projecten/${project.slug}/`}>
          <figure className="portfolio-figure"><MediaImage mediaId={project.heroMedia} role="card" /><MediaCaption mediaId={project.heroMedia} /></figure>
          <h2 className="portfolio-case-title">{project.id === 'CASE-03' ? 'Grootformaat vloer in woonruimte' : project.title}</h2>
        </a>
      </article>)}
    </div></section>
    {page.cta && <CtaTypeA block={page.cta} />}
  </div>
}
