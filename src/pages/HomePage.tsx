
import type { Page } from '../content/types'
import CtaArrow from '../components/CtaArrow'
import { CtaTypeA } from '../components/CtaSection'

export default function HomePage({ page }: { page: Page }) {
  const hero = page.hero
  const cta = page.cta

  return (
    <>
      {/* 1. HERO (Space: Architectural Scale) */}
      <section className="hero home-hero" aria-label="Introductie">
        <div className="container">
          <div className="home-hero-grid">
            <div className="home-hero-text">
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
              {hero['Primary CTA URL'] && (
                <div>
                  <a href={hero['Primary CTA URL']} className="btn">
                    {hero['Primary CTA']}
                    <CtaArrow />
                  </a>
                </div>
              )}
            </div>

            <div className="home-hero-media">
              <figure className="home-hero-figure">
                <img
                  src="/media/SPPAT-VIS-001.jpg"
                  alt={hero.ALT || "Strak afgewerkte badkamer"}
                  fetchPriority="high"
                  className="home-hero-img"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (2-column layout) */}
      <section id="werkzaamheden" className="home-services-section" aria-label="Diensten">
        <div className="container">
          <div className="home-services-header">
            <span className="section-num">01 / OVERZICHT</span>
            <h2>Waarvoor schakelt u ons in?</h2>
          </div>

          <div className="core-capabilities-grid grid-12">
            <article className="capability-item col-span-6">
              <div style={{ aspectRatio: '4/5', marginBottom: 'var(--space-sm)' }}>
                <img
                  src="/media/SPPAT-VIS-002.jpg"
                  alt="Complete Badkamer Renovatie"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 className="card-title">Complete Badkamer Renovatie</h3>
              <p className="card-body">Turnkey uitvoering van uw project. Wij coördineren en realiseren het sloopwerk, de installatietechniek, waterdichting, het tegelwerk en de afmontage van uw sanitair.</p>
              <a href="/complete-badkamer-renovatie/" className="text-link">
                Ontdek de mogelijkheden <CtaArrow />
              </a>
            </article>

            <article className="capability-item col-span-6">
              <div style={{ aspectRatio: '4/5', marginBottom: 'var(--space-sm)' }}>
                <img
                  src="/media/SPPAT-VIS-003.jpg"
                  alt="Professioneel Tegelwerk"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 className="card-title">Professioneel Tegelwerk</h3>
              <p className="card-body">Vloeren, wanden en keukens. Voor een strakke, duurzame afwerking is nauwkeurigheid in de voorbereiding en uitvoering essentieel.</p>
              <a href="/tegelwerk/" className="text-link">
                Bekijk onze expertise <CtaArrow />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL PROOF */}
      <section className="technical-proof-section" aria-label="Technische Kwaliteit" style={{ marginTop: 'var(--space-xl)' }}>
        <div className="container">
          <div className="technical-proof-intro col-span-8">
            <span className="section-num">02 / TECHNIEK</span>
            <h2>Kwaliteit begint onder de tegels</h2>
            <p>Een tegelwand of inloopdouche ziet er na oplevering vaak mooi uit, maar de levensduur wordt bepaald door onzichtbare techniek. Een professionele uitvoering vereist maximale aandacht voor de voorbereiding. Dit omvat het loodrecht uitvlakken van wanden, het correct frezen van installaties, het berekenen van het juiste afschot naar de douchegoot en het toepassen van robuuste waterdichtingssystemen in natte zones.</p>
          </div>
          
          <div className="technical-proof-media col-start-2 col-span-10" style={{ marginTop: 'var(--space-md)' }}>
            <figure className="proof-figure" style={{ aspectRatio: '16/9' }}>
              <img
                src="/media/SPPAT-VIS-006.jpg"
                alt="Detail van strak tegelwerk rondom een inbouwkraan"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 4. SELECTED PROJECTS */}
      <section className="selected-projects-section" aria-label="Geselecteerde Projecten" style={{ marginTop: 'var(--space-xl)' }}>
        <div className="container">
          <div className="home-services-header">
            <span className="section-num">03 / PROJECTEN</span>
            <h2>Recent Werk</h2>
          </div>
          
          
          <div className="projects-grid">
            {/* PRJ-01 */}
            <article className="project-preview grid-12" style={{ marginBottom: 'var(--space-xl)', alignItems: 'center' }}>
              <div className="col-span-7">
                <a href="/projecten/#project-01">
                  <picture>
                    <source srcSet="/production/SPPAT-PROJ-01-bath08-1-hero-desktop.webp" media="(min-width: 1024px)" />
                    <source srcSet="/production/SPPAT-PROJ-01-bath08-1-hero-tablet.webp" media="(min-width: 834px)" />
                    <img src="/production/SPPAT-PROJ-01-bath08-1-hero-mobile.webp" alt="Grootformaat badkamer project" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} loading="lazy" />
                  </picture>
                </a>
              </div>
              <div className="col-start-9 col-span-4">
                <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Project 01 — Complete Badkamer</h3>
                <p className="card-body">Grootformaat tegelwerk & inloopdouche.</p>
                <a href="/projecten/#project-01" className="text-link" style={{ marginTop: '1rem' }}>
                  Bekijk project <CtaArrow />
                </a>
              </div>
            </article>

            {/* PRJ-02 */}
            <article className="project-preview grid-12" style={{ marginBottom: 'var(--space-xl)', alignItems: 'center' }}>
              <div className="col-span-4 order-md-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Project 02 — Vloer & Woonruimte</h3>
                <p className="card-body">Grote tegelvloer en afwerking van de trapopgang.</p>
                <a href="/projecten/#project-02" className="text-link" style={{ marginTop: '1rem' }}>
                  Bekijk project <CtaArrow />
                </a>
              </div>
              <div className="col-start-6 col-span-7">
                <a href="/projecten/#project-02">
                  <picture>
                    <source srcSet="/production/SPPAT-PROJ-03-floor07-9-hero-desktop.webp" media="(min-width: 1024px)" />
                    <source srcSet="/production/SPPAT-PROJ-03-floor07-9-hero-tablet.webp" media="(min-width: 834px)" />
                    <img src="/production/SPPAT-PROJ-03-floor07-9-hero-mobile.webp" alt="Tegelvloer project" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} loading="lazy" />
                  </picture>
                </a>
              </div>
            </article>
          </div>

          <div style={{ marginTop: 'var(--space-md)' }}>
             <a href="/projecten/" className="text-link">Bekijk alle projecten <CtaArrow /></a>
          </div>
        </div>
      </section>

      {/* 5. TYPE A FINAL CTA */}
      {cta && <CtaTypeA block={{...cta, Visual: '/media/SPPAT-VIS-002.jpg'}} />}
    </>
  )
}
