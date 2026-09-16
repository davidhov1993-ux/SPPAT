import type { Page } from '../content/types'
import { CtaTypeB } from '../components/CtaSection'

export default function TegelwerkPage({ page }: { page: Page }) {
  const hero = page.hero
  const apps = page.sections[0].cards
  const cta = page.cta

  return (
    <>
      {/* 1. HERO */}
      <section className="hero split-hero" aria-label="Introductie">
        <div className="container">
          <div className="hero-split-grid grid-12">
            <div className="hero-split-text" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
            </div>
            <div className="hero-split-media" style={{ gridColumn: '7 / span 6' }}>
              <figure className="hero-split-figure" style={{ aspectRatio: '4/5' }}>
                <img
                  src="/media/Generated Image September 11, 2026 - 11_48AM.jpg"
                  alt={hero.ALT || hero.H1}
                  fetchPriority="high"
                  className="hero-split-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO / PREPARATION & APPLICATIONS (Typography led) */}
      <section className="tegelwerk-applications-section" style={{ marginTop: 'var(--space-xl)' }} aria-label="Toepassingen">
        <div className="container">
          <div className="grid-12">
            <div className="col-span-10">
              <span className="section-num">01 / TOEPASSINGEN</span>
              <h2>Vloeren, Wanden & Buiten</h2>
              
              <div className="apps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                {apps?.filter(a => a.Title !== 'Badkamer tegelen').map(app => (
                  <div key={app.Title} className="app-item" style={{ borderBottom: '1px solid var(--border)', paddingBottom: 'var(--space-sm)' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{app.Title}</h3>
                    <p style={{ margin: 0 }}>{app.Body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM / SPECIALIST */}
      <section className="tegelwerk-premium-section" style={{ marginTop: 'var(--space-xl)' }} aria-label="Specialisaties">
        <div className="container">
          
          {/* Premium A: XXL / Grootformaat + Natural Stone */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
            <div className="col-span-6">
              <img 
                src="/production/SPPAT-PROJ-01-bath08-1-hero-desktop.webp" 
                alt="Grootformaat tegels en natuursteen verwerking"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
            <div className="col-start-7 col-span-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-num">02 / SPECIALISATIE</span>
              <h2>Grootformaat & Natuursteen</h2>
              <p>De verwerking van XXL-platen en natuursteen vereist specifieke kennis. Grootformaat tegels bieden een naadloze esthetiek in badkamers en woonruimtes. Natuursteen vraagt om een zorgvuldige voorbehandeling en toepassing van de juiste materialen voor een duurzaam resultaat.</p>
            </div>
          </div>

          {/* Premium B: Mosaic + Wood-look */}
          <div className="grid-12">
            <div className="col-span-6 order-md-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-num">03 / SPECIALISATIE</span>
              <h2>Mozaïek & Keramisch Parket</h2>
              <p>Fijne detaillering zoals mozaïek voegt diepte en karakter toe aan inloopdouches en wanden, en vraagt om exacte uitlijning. Keramisch parket (wood-look) biedt de warme uitstraling van hout met het onderhoudsgemak van tegels, ideaal voor toepassingen met vloerverwarming.</p>
            </div>
            <div className="col-start-7 col-span-6">
              <img 
                src="/media/Generated Image September 11, 2026 - 11_36AM.jpg" 
                alt="Precisie in mozaïek en keramisch parket"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA B (No Image) */}
      {cta && (
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <CtaTypeB block={cta} />
        </div>
      )}
    </>
  )
}
