import Breadcrumbs from '../components/Breadcrumbs'
import CtaTypeB from '../components/CtaTypeB'
import CtaArrow from '../components/CtaArrow'

export default function ProjectDetailPage({ project }: { project: { slug: string, h1: string, title: string, intro: string, tier: string, heroImage: string, sections: {h2: string, body: string, image?: string}[], relatedServices?: {url: string, title: string}[] } }) {
  return (
    <div className="project-detail-page">
      <div className="container">
        <Breadcrumbs currentPath={`/projecten/${project.slug}/`} title={project.h1} />
      </div>

      <section className="project-hero" aria-label="Project Introductie">
        <div className="container">
          <div className="project-hero-grid">
            <div className="project-hero-text">
              <span className="eyebrow">— {project.title}</span>
              <h1>{project.h1}</h1>
              <p className="lead">{project.intro}</p>
            </div>
            
            <div className={`project-hero-media project-tier-${project.tier.toLowerCase()}`}>
              <img src={project.heroImage} alt={project.h1} />
            </div>
          </div>
        </div>
      </section>

      <section className="project-body" aria-label="Project Details">
        <div className="container">
          {project.sections.map((section, idx: number) => (
            <div key={idx} className="project-section">
              <div className="project-section-text">
                <h2>{section.h2}</h2>
                <p>{section.body}</p>
              </div>
              {section.image && (
                <div className="project-section-media">
                  <img src={section.image} alt={section.h2} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {project.relatedServices && project.relatedServices.length > 0 && (
        <section className="project-related-services">
          <div className="container">
            <div className="related-services-grid">
              <h2>Gerelateerde Diensten</h2>
              <ul className="related-links">
                {project.relatedServices.map((service) => (
                  <li key={service.url}>
                    <a href={service.url} className="inline-link">
                      <span>{service.title}</span>
                      <CtaArrow />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <CtaTypeB 
        title="Bespreek uw project"
        body="Neem contact op voor een technische opname en bespreek de mogelijkheden voor uw situatie."
        ctaUrl="/contact/"
        ctaText="Project bespreken"
      />
    </div>
  )
}
