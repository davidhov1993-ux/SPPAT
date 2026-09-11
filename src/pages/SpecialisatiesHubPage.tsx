import type { Page } from '../content/types'
import CtaArrow from '../components/CtaArrow'
import CtaTypeB from '../components/CtaTypeB'

const HUB_IMAGES = [
  '/media/Generated Image September 11, 2026 - 2_02PM.jpg',
  '/media/Generated Image September 11, 2026 - 2_04PM.jpg',
  '/media/Generated Image September 11, 2026 - 2_05PM.jpg',
  '/media/Generated Image September 11, 2026 - 2_07PM.jpg'
]

export default function SpecialisatiesHubPage({ page }: { page: Page }) {
  const hero = page.hero
  const cards = page.sections[0]?.cards || []
  const cta = page.cta

  return (
    <div className="spec-hub-page">
      {/* SECTION 1: HERO */}
      <section className="spec-hub-hero-section" aria-label="Introductie">
        <div className="container">
          <div className="spec-hub-hero-container">
            <figure className="spec-hub-hero-media">
              <img 
                src="/media/Generated Image September 11, 2026 - 2_00PM.jpg" 
                alt={hero.ALT || hero.H1}
                fetchPriority="high"
                className="spec-hub-hero-img"
              />
            </figure>
            <div className="spec-hub-hero-text">
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
              {hero['Primary CTA URL'] && (
                <div style={{ marginTop: '16px' }}>
                  <a href={hero['Primary CTA URL']} className="btn btn-primary">
                    {hero['Primary CTA'] || 'Project bespreken'}
                    <CtaArrow />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPERTISE GEBIEDEN (Alternating Split Cards) */}
      <section className="spec-hub-expertise-section" aria-label="Expertise gebieden">
        <div className="container">
          <div className="spec-hub-expertise-grid">
            {cards.map((card, index) => (
              <article key={card.Title} className="spec-row">
                <figure className="spec-row-media-wrapper">
                  <a href={card['CTA URL']} aria-label={card.Title}>
                    <img 
                      src={HUB_IMAGES[index] || HUB_IMAGES[0]}
                      alt={card.Title}
                      loading="lazy"
                      className="spec-row-img"
                    />
                  </a>
                </figure>
                <div className="spec-row-text">
                  <span className="section-num" aria-hidden="true">
                    0{index + 1} / {card.Title.toUpperCase().split(' ')[0]}
                  </span>
                  <h2>
                    <a href={card['CTA URL']}>{card.Title}</a>
                  </h2>
                  <p className="lead">
                    {card.Body}
                  </p>
                  <a href={card['CTA URL']} className="inline-link">
                    <span>{card.CTA || 'Lees meer'}</span>
                    <CtaArrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FINAL CTA */}
      {cta && (
        <CtaTypeB 
          sectionNum="03 / CONTACT"
          title={cta.H2 || 'Klaar voor de volgende stap?'}
          body={cta.Body}
          ctaUrl={cta.URL}
          ctaText={cta.Button}
        />
      )}
    </div>
  )
}
