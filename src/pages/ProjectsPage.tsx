import { useState } from 'react'
import type { Page, Project } from '../content/types'
import business from '../content/business-input.json'
import { CtaTypeA } from '../components/CtaSection'
import CtaArrow from '../components/CtaArrow'

export default function ProjectsPage({ page }: { page: Page }) {
  const [filter, setFilter] = useState('Alle')
  const hero = page.hero
  const gridSection = page.sections[0]
  const projects: Project[] = business.projects || []
  const hasProjects = projects.length > 0

  const visibleProjects = projects.filter(
    project => filter === 'Alle' || project.category === filter
  )

  const filterOptions = gridSection.Filters ? gridSection.Filters.split(' | ') : []

  return (
    <>
      {/* 1. HERO */}
      <section className="hero page-hero" aria-label="Projecten introductie">
        <div className="container">
          <div className="article-hero-content">
            <p className="eyebrow">
              <span aria-hidden="true">—</span>
              Portfolio &amp; Vakmanschap
            </p>
            <h1>{hero.H1}</h1>
            {hero.Body && <p className="lead">{hero.Body}</p>}
            {hero['Primary CTA URL'] && (
              <div style={{ marginTop: '16px' }}>
                <a href={hero['Primary CTA URL']} className="btn">
                  {hero['Primary CTA']}
                  <CtaArrow />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC GRID / PORTFOLIO */}
      <section className="content-section" aria-label="Gerealiseerd werk">
        <div className="container">
          <span className="section-num">01 / PORTFOLIO</span>
          <h2>{gridSection.H2}</h2>

          {/* If projects exist and categories are available, render sharp architectural tabs */}
          {hasProjects && filterOptions.length > 0 && (
            <div className="project-filters" role="group" aria-label="Filter projecten op discipline">
              {filterOptions.map(option => (
                <button
                  key={option}
                  type="button"
                  className={`filter-tab ${filter === option ? 'is-active' : ''}`}
                  aria-pressed={filter === option}
                  onClick={() => setFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Project Grid */}
          {hasProjects ? (
            <div className="projects-portfolio-grid" aria-live="polite">
              {visibleProjects.map(project => (
                <article key={project.title} className="project-item">
                  <figure>
                    <img src={project.image} alt={project.alt || project.title} loading="lazy" />
                    <figcaption>
                      <h3 className="project-title">{project.title}</h3>
                      {project.location && <p className="project-meta">{project.location}</p>}
                      {project.services && project.services.length > 0 && (
                        <p className="project-meta">{project.services.join(' · ')}</p>
                      )}
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          ) : (
            <div className="project-empty-state" style={{ marginTop: '32px' }}>
              <h3>Projectdocumentatie in voorbereiding</h3>
              <p>
                Wij fotograferen en documenteren momenteel onze recent opgeleverde badkamers, toiletruimtes
                en specialistische tegelprojecten. Nieuwe opleveringen worden binnenkort aan dit overzicht toegevoegd.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. TYPE A FINAL CTA */}
      {page.cta && <CtaTypeA block={page.cta} />}
    </>
  )
}
