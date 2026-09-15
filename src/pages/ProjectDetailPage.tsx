import type { ProjectCase } from '../content/types'
import CtaTypeB from '../components/CtaTypeB'
import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'
import RelatedLinks from '../components/RelatedLinks'

export default function ProjectDetailPage({ project }: { project: ProjectCase }) {
  const gallery = project.galleryMedia.filter(id => id !== project.heroMedia)
  return <div className="project-detail-page">
    <section className="project-hero" aria-label="Projectcase">
      <div className="container project-hero-grid">
        <div className="project-hero-text">
          <h1>{project.h1}</h1>
          {project.intro.split('\n\n').map(text => <p className="lead" key={text}>{text}</p>)}
        </div>
        <figure className="project-hero-media">
          <MediaImage mediaId={project.heroMedia} role="hero" priority />
          <MediaCaption mediaId={project.heroMedia} />
        </figure>
      </div>
    </section>
    <section className="project-body" aria-label="Technische uitwerking">
      <div className="container">
        {project.sections.map((section, index) => <div className="project-section" key={section.h2}>
          <div className="project-section-text"><h2>{section.h2}</h2>{section.body.split('\n\n').map(text => <p key={text}>{text}</p>)}</div>
          {gallery[index] && <figure className="project-section-media"><MediaImage mediaId={gallery[index]} /><MediaCaption mediaId={gallery[index]} /></figure>}
        </div>)}
        {gallery.slice(project.sections.length).map(id => <figure key={id} className="project-additional-media"><MediaImage mediaId={id} /><MediaCaption mediaId={id} /></figure>)}
        <ul className="technical-points">{project.technicalPoints.map(point => <li key={point}>{point}</li>)}</ul>
      </div>
    </section>
    {project.referenceMedia.map(id => <aside className="container explanatory-media" key={id} aria-label="Afzonderlijk referentiebeeld">
      <figure><MediaImage mediaId={id} role={id.startsWith('ai-') ? 'macro' : 'detail'} /><MediaCaption mediaId={id} /></figure>
    </aside>)}
    <RelatedLinks urls={project.relatedServiceUrls} />
    <CtaTypeB title={project.cta.label} ctaText={project.cta.label} ctaUrl={project.cta.url} />
  </div>
}
