
import type { ProjectCase } from '../content/types'
import CtaTypeB from '../components/CtaTypeB'
import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'
import RelatedLinks from '../components/RelatedLinks'

export default function ProjectDetailPage({ project }: { project: ProjectCase }) {
  const isTierA = project.tier === 'A'
  const isTierB = project.tier === 'B'
  
  // Exclude ai-macro from rendering since it's illustrative-ai and blocked from project cases
  const validReference = project.referenceMedia.filter(id => !id.startsWith('ai-'))

  return (
    <div className="project-detail-page">
      <div className="container" style={{ padding: '24px 16px 0' }}>
        <p className="breadcrumb" style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>
          <a href="/projecten/" style={{ color: 'inherit', textDecoration: 'none' }}>Projecten</a> 
          <span aria-hidden="true" style={{ margin: '0 8px' }}>/</span> 
          <span>{project.title}</span>
        </p>
      </div>

      {isTierA && (
        <>
          <section className="project-tier-a-hero" aria-label="Project Scope" style={{ padding: '40px 0 0' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h1>{project.h1}</h1>
              {project.intro.split('\n\n').map((text, i) => <p className="lead" key={i}>{text}</p>)}
            </div>
            <div className="container" style={{ marginTop: '40px' }}>
              <figure style={{ margin: 0 }}>
                <MediaImage mediaId={project.heroMedia} role="hero" className="tier-a-hero-img" />
                <MediaCaption mediaId={project.heroMedia} />
              </figure>
            </div>
          </section>

          <section className="project-tier-a-body" aria-label="Technische uitwerking" style={{ padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {project.sections.map((section, index) => (
                <div key={index} style={{ marginBottom: '40px' }}>
                  <h2>{section.h2}</h2>
                  {section.body.split('\n\n').map((text, i) => <p key={i}>{text}</p>)}
                </div>
              ))}
              
              {project.technicalPoints?.length > 0 && (
                <div style={{ marginTop: '40px' }}>
                  <h3>Uitgevoerde technieken</h3>
                  <ul className="tegel-spec-list">
                    {project.technicalPoints.map(point => (
                      <li key={point} className="tegel-spec-item">
                        <span className="tegel-spec-bullet" aria-hidden="true">—</span>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {project.galleryMedia.length > 0 && (
            <section className="project-tier-a-gallery" aria-label="Project details" style={{ paddingBottom: '80px' }}>
              <div className="container">
                <figure style={{ margin: '0 0 40px 0' }}>
                  <MediaImage mediaId={project.galleryMedia[0]} role="card" className="tier-a-support-img" />
                  <MediaCaption mediaId={project.galleryMedia[0]} />
                </figure>

                {project.galleryMedia.length >= 3 && (
                  <div className="tier-a-detail-pair">
                    <figure style={{ margin: 0 }}>
                      <MediaImage mediaId={project.galleryMedia[1]} role="macro" className="tier-a-detail-img" />
                      <MediaCaption mediaId={project.galleryMedia[1]} />
                    </figure>
                    <figure style={{ margin: 0 }}>
                      <MediaImage mediaId={project.galleryMedia[2]} role="macro" className="tier-a-detail-img" />
                      <MediaCaption mediaId={project.galleryMedia[2]} />
                    </figure>
                  </div>
                )}
              </div>
            </section>
          )}
        </>
      )}

      {isTierB && (
        <>
          <section className="project-tier-b-hero" aria-label="Project Scope" style={{ padding: '40px 0' }}>
            <div className="container service-content-layout">
              <div className="service-content-block">
                <h1>{project.h1}</h1>
                {project.intro.split('\n\n').map((text, i) => <p className="lead" key={i}>{text}</p>)}
              </div>
              <figure className="service-detail-media" style={{ margin: 0 }}>
                <MediaImage mediaId={project.heroMedia} role="hero" className="tier-b-hero-img" />
                <MediaCaption mediaId={project.heroMedia} />
              </figure>
            </div>
          </section>

          <section className="project-tier-b-body" aria-label="Technische uitwerking" style={{ padding: '40px 0' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {project.sections.map((section, index) => (
                <div key={index} style={{ marginBottom: '40px' }}>
                  <h2>{section.h2}</h2>
                  {section.body.split('\n\n').map((text, i) => <p key={i}>{text}</p>)}
                </div>
              ))}

              {project.technicalPoints?.length > 0 && (
                <div style={{ marginTop: '40px' }}>
                  <h3>Uitgevoerde technieken</h3>
                  <ul className="tegel-spec-list">
                    {project.technicalPoints.map(point => (
                      <li key={point} className="tegel-spec-item">
                        <span className="tegel-spec-bullet" aria-hidden="true">—</span>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
          
          <section className="project-tier-b-detail" aria-label="Detailopname" style={{ paddingBottom: '80px' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
              {validReference.length > 0 ? (
                <figure style={{ margin: 0, maxWidth: '600px', width: '100%' }}>
                  <MediaImage mediaId={validReference[0]} role="macro" className="tier-b-detail-img" />
                  <MediaCaption mediaId={validReference[0]} />
                </figure>
              ) : (
                <div style={{ padding: '40px', background: '#f5f5f5', color: '#666', border: '1px dashed #ccc', width: '100%', maxWidth: '600px', textAlign: 'center' }}>
                  [BLOCKED — MISSING MEDIA] Detail image required for Tier B case.
                </div>
              )}
            </div>
          </section>
        </>
      )}

      <RelatedLinks urls={project.relatedServiceUrls} />
      <CtaTypeB title={project.cta.label} body="" ctaText={project.cta.label} ctaUrl={project.cta.url} />
    </div>
  )
}
