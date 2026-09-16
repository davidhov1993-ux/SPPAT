import type { Page } from '../content/types'
import { CtaTypeA } from '../components/CtaSection'
import RichText from '../components/RichText'

export default function BadkamerRenovatiePage({ page }: { page: Page }) {
  const hero = page.hero
  const processBlock = page.sections[0]
  const techBlock = page.sections[1]
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
                  src="/media/Generated Image September 10, 2026 - 7_57PM(1).jpg"
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

      {/* 2. INTRO / PROCESS (Typography led) */}
      <section className="badkamer-process-section" style={{ marginTop: 'var(--space-xl)' }} aria-label="Proces">
        <div className="container">
          <div className="grid-12">
            <div style={{ gridColumn: 'span 8' }}>
              <span className="section-num">01 / PROCES</span>
              <h2>{processBlock.H2}</h2>
              <p className="lead">{processBlock.Body}</p>
              
              <ol className="process-list" style={{ marginTop: 'var(--space-md)', paddingLeft: '0', listStyle: 'none' }}>
                {processBlock.bullets?.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: 'var(--space-sm)', paddingBottom: 'var(--space-sm)', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                      {String(idx + 1).padStart(2, '0')}. {bullet.split(':')[0]}
                    </span>
                    <p style={{ margin: 0 }}>{bullet.split(':').slice(1).join(':')}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL CONSTRUCTION */}
      <section className="badkamer-technical-section" style={{ marginTop: 'var(--space-xl)' }} aria-label="Technische Constructie">
        <div className="container">
          <div className="grid-12">
            <div className="col-span-6">
              <img 
                src="/media/Generated Image September 10, 2026 - 8_27PM(1).jpg" 
                alt="Waterdichtingssysteem en uitvlakken van natte cel"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
            <div className="col-start-7 col-span-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-num">02 / TECHNIEK</span>
              <h2>{techBlock.H2}</h2>
              <p className="lead">
                <RichText text={techBlock.Body || ''} links={page.links} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILS & FINISHING + TOILET */}
      <section className="badkamer-details-section" style={{ marginTop: 'var(--space-xl)' }} aria-label="Details en Afwerking">
        <div className="container">
          <div className="grid-12">
            <div className="col-span-6 order-md-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-num">03 / AFWERKING & TOILET</span>
              <h2>Oog voor Detail</h2>
              <p>Voor de afwerking kunnen uiteenlopende materialen worden verwerkt, variërend van strakke grootformaat tegels tot organisch natuursteen of accenten met mozaïek.</p>
              
              <h3 style={{ marginTop: 'var(--space-md)' }}>Complete Toilet Renovatie</h3>
              <p>Een toiletruimte is vaak de kleinste kamer in huis, maar vereist technische precisie. Bij het installeren van inbouwsystemen is de beschikbare ruimte beperkt en leidingen moeten zorgvuldig worden weggewerkt. Wij renoveren uw toilet compleet: van het demonteren van de oude situatie tot de afmontage van een wandcloset en de afwerking met stuc- of tegelwerk.</p>
            </div>
            <div className="col-start-7 col-span-6">
              <img 
                src="/media/Generated Image September 10, 2026 - 8_38PM(1).jpg" 
                alt="Architectonisch tegeldetail met ingebouwde nis en strakke verstekken"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. DECISION SUPPORT / FAQ */}
      {page.faq && page.faq.length > 0 && (
        <section className="faq-section" style={{ marginTop: 'var(--space-xl)' }} aria-label="Veelgestelde vragen">
          <div className="container faq-container">
            <h2 className="faq-header">Veelgestelde vragen</h2>
            <div className="faq-list">
              {page.faq.map(({ question, answer }) => (
                <details key={question} className="faq-item">
                  <summary className="faq-summary">
                    <span>{question}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq-body">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. CTA A */}
      {cta && (
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <CtaTypeA block={{ H2: cta.H2 || 'Start uw renovatie', Body: cta.Body || 'Neem contact op voor een technische opname.', URL: cta.URL || '/contact/', Button: cta.Button || 'Project bespreken' }} />
        </div>
      )}
    </>
  )
}
