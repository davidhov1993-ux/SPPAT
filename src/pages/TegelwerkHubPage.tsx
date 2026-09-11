import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import CtaArrow from '../components/CtaArrow'

export default function TegelwerkHubPage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const hero = page.hero
  const pricingSection = page.sections.find(
    s => s.H2 === 'Prijzen in de tegelbranche (Marktindicaties 2026)'
  ) || page.sections[1]
  const cta = page.cta

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setPastHero(rect.bottom <= 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="tegelwerk-hub-page">
      {/* SECTION 1: HERO (Precisie in elke ruimte) */}
      <section ref={heroRef} className="tegel-hub-hero-section" aria-label="Introductie">
        <div className="container">
          <div className="tegel-hub-hero-wrapper">
            <figure className="tegel-hub-hero-media">
              <img
                src="/media/Generated Image September 11, 2026 - 11_48AM.jpg"
                alt={hero.ALT || 'Getegelde vloer in moderne woonruimte'}
                fetchPriority="high"
                className="tegel-hub-hero-img"
              />
            </figure>

            <div className="tegel-hub-hero-content-block">
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
              {hero['Primary CTA URL'] && (
                <div className="hero-cta-action">
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

      {/* SECTION 2: THE ROUTING GRID (Waar kunnen wij u mee helpen?) */}
      <section className="tegel-routing-section" aria-label="Waar kunnen wij u mee helpen?">
        <div className="container">
          <div className="tegel-routing-header">
            <span className="section-num" aria-hidden="true">01 / OVERZICHT</span>
            <p className="eyebrow">
              <span aria-hidden="true">—</span>
              Waar kunnen wij u mee helpen?
            </p>
            <h2>Onze tegelwerk diensten</h2>
          </div>

          <div className="tegel-routing-grid">
            {/* ROW 1: Item 1 (Vloertegels leggen, cols 1-8, 16:9) */}
            <article className="tegel-grid-item tegel-grid-item-1">
              <a
                href="/tegelwerk/vloer-tegelen/"
                className="tegel-grid-media-link"
                aria-label="Vloertegels leggen"
              >
                <figure className="tegel-grid-figure">
                  <img
                    src="/media/Generated Image September 11, 2026 - 11_36AM.jpg"
                    alt="Vloertegels leggen"
                    loading="lazy"
                    className="tegel-grid-img tegel-img-16-9"
                  />
                </figure>
              </a>
              <div className="tegel-grid-content">
                <span className="tegel-item-num" aria-hidden="true">01 / VLOEREN</span>
                <h3 className="tegel-item-title">
                  <a href="/tegelwerk/vloer-tegelen/">Vloertegels leggen</a>
                </h3>
                <p className="tegel-item-body">
                  Vlakke, robuuste vloeren voor woonkamers en hallen. Inclusief voorbereiding en rekening houdend met vloerverwarming.
                </p>
                <a href="/tegelwerk/vloer-tegelen/" className="inline-link tegel-item-cta">
                  <span>Lees meer</span>
                  <CtaArrow />
                </a>
              </div>
            </article>

            {/* ROW 1: Item 2 (Wandtegels zetten, cols 9-12, 1:1) */}
            <article className="tegel-grid-item tegel-grid-item-2">
              <a
                href="/tegelwerk/wand-tegelen/"
                className="tegel-grid-media-link"
                aria-label="Wandtegels zetten"
              >
                <figure className="tegel-grid-figure">
                  <img
                    src="/media/README.jpg"
                    alt="Wandtegels zetten"
                    loading="lazy"
                    className="tegel-grid-img tegel-img-1-1"
                  />
                </figure>
              </a>
              <div className="tegel-grid-content">
                <span className="tegel-item-num" aria-hidden="true">02 / WANDEN</span>
                <h3 className="tegel-item-title">
                  <a href="/tegelwerk/wand-tegelen/">Wandtegels zetten</a>
                </h3>
                <p className="tegel-item-body">
                  Uitgelijnde wanden voor keukens, toiletten en badkamers. Aandacht voor een logisch en rustig voegenspel.
                </p>
                <a href="/tegelwerk/wand-tegelen/" className="inline-link tegel-item-cta">
                  <span>Lees meer</span>
                  <CtaArrow />
                </a>
              </div>
            </article>

            {/* ROW 2: Item 3 (Badkamer tegelen, cols 1-4, 1:1) */}
            <article className="tegel-grid-item tegel-grid-item-3">
              <a
                href="/tegelwerk/badkamer-tegelen/"
                className="tegel-grid-media-link"
                aria-label="Badkamer tegelen"
              >
                <figure className="tegel-grid-figure">
                  <img
                    src="/media/Generated Image September 11, 2026 - 11_16AM.jpg"
                    alt="Badkamer tegelen"
                    loading="lazy"
                    className="tegel-grid-img tegel-img-1-1"
                  />
                </figure>
              </a>
              <div className="tegel-grid-content">
                <span className="tegel-item-num" aria-hidden="true">03 / BADKAMERS</span>
                <h3 className="tegel-item-title">
                  <a href="/tegelwerk/badkamer-tegelen/">Badkamer tegelen</a>
                </h3>
                <p className="tegel-item-body">
                  Heeft u het loodgieterswerk al geregeld? Wij verzorgen het uitvlakken, de waterdichting en het tegelwerk.
                </p>
                <a href="/tegelwerk/badkamer-tegelen/" className="inline-link tegel-item-cta">
                  <span>Lees meer</span>
                  <CtaArrow />
                </a>
              </div>
            </article>

            {/* ROW 2: Item 4 (Keuken tegelen, cols 5-8, 1:1) */}
            <article className="tegel-grid-item tegel-grid-item-4">
              <a
                href="/tegelwerk/keuken-tegelen/"
                className="tegel-grid-media-link"
                aria-label="Keuken tegelen"
              >
                <figure className="tegel-grid-figure">
                  <img
                    src="/media/Generated Image September 11, 2026 - 11_18AM.jpg"
                    alt="Keuken tegelen"
                    loading="lazy"
                    className="tegel-grid-img tegel-img-1-1"
                  />
                </figure>
              </a>
              <div className="tegel-grid-content">
                <span className="tegel-item-num" aria-hidden="true">04 / KEUKENS</span>
                <h3 className="tegel-item-title">
                  <a href="/tegelwerk/keuken-tegelen/">Keuken tegelen</a>
                </h3>
                <p className="tegel-item-body">
                  Hitte- en vuilbestendige achterwanden en robuuste keukenvloeren, netjes afgewerkt rondom stopcontacten.
                </p>
                <a href="/tegelwerk/keuken-tegelen/" className="inline-link tegel-item-cta">
                  <span>Lees meer</span>
                  <CtaArrow />
                </a>
              </div>
            </article>

            {/* ROW 2: Item 5 (Balkon tegelen, cols 9-12, 1:1) */}
            <article className="tegel-grid-item tegel-grid-item-5">
              <a
                href="/tegelwerk/balkon-tegelen/"
                className="tegel-grid-media-link"
                aria-label="Balkon tegelen"
              >
                <figure className="tegel-grid-figure">
                  <img
                    src="/media/Generated Image September 11, 2026 - 11_38AM.jpg"
                    alt="Balkon tegelen"
                    loading="lazy"
                    className="tegel-grid-img tegel-img-1-1"
                  />
                </figure>
              </a>
              <div className="tegel-grid-content">
                <span className="tegel-item-num" aria-hidden="true">05 / BUITEN</span>
                <h3 className="tegel-item-title">
                  <a href="/tegelwerk/balkon-tegelen/">Balkon tegelen</a>
                </h3>
                <p className="tegel-item-body">
                  Buitentegelwerk dat rekening houdt met weersinvloeden, vorst, afschot en waterafvoer.
                </p>
                <a href="/tegelwerk/balkon-tegelen/" className="inline-link tegel-item-cta">
                  <span>Lees meer</span>
                  <CtaArrow />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRICING INTERLUDE (Prijzen in de tegelbranche) */}
      <section className="pricing-section tegel-pricing-section" aria-label="Marktindicaties tegelwerk prijzen">
        <div className="container">
          <div className="tegel-pricing-grid">
            <div className="tegel-pricing-container">
              <span className="section-num" aria-hidden="true">02 / TARIEVEN</span>
              <h2>{pricingSection?.H2 || 'Prijzen in de tegelbranche (Marktindicaties 2026)'}</h2>
              <p className="lead tegel-pricing-lead">
                {pricingSection?.Body || 'Tegelwerk wordt vaak berekend per vierkante meter of op regiebasis. Gemiddeld liggen de prijzen op de Nederlandse markt in 2026 als volgt:'}
              </p>
              <ul className="tegel-spec-list">
                <li className="tegel-spec-item">
                  <span className="tegel-spec-bullet" aria-hidden="true">—</span>
                  <p>
                    <strong>Enkel arbeid (exclusief tegels en lijm/voeg):</strong> Voor standaard formaten rekent een vakman vaak tussen de € 50 en € 85 per m².
                  </p>
                </li>
                <li className="tegel-spec-item">
                  <span className="tegel-spec-bullet" aria-hidden="true">—</span>
                  <p>
                    <strong>Leveren en plaatsen (inclusief standaard materialen):</strong> Vaak tussen de € 90 en € 180 per m².
                  </p>
                </li>
                <li className="tegel-spec-item">
                  <span className="tegel-spec-bullet" aria-hidden="true">—</span>
                  <p>
                    <strong>Specialistisch werk:</strong> Voor{' '}
                    <a href="/specialisaties/grootformaat-tegels/">grootformaat tegels</a>,{' '}
                    <a href="/specialisaties/natuursteen/">natuursteen</a> of{' '}
                    <a href="/specialisaties/mozaiek-zetten/">mozaïek</a> liggen de tarieven hoger (soms € 85 tot € 140+ per m² aan arbeid, of een uurtarief) vanwege de langere verwerkingstijd, dubbele verlijming en het benodigde gereedschap.
                  </p>
                </li>
                <li className="tegel-spec-item">
                  <span className="tegel-spec-bullet" aria-hidden="true">—</span>
                  <p>
                    <strong>Let op:</strong> Bovenstaande betreft algemene marktprijzen. De exacte prijs bij Sppat is afhankelijk van uw ondergrond, legverband en specifieke wensen.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONCLUSION & CTA (Uw tegelproject bespreken?) */}
      <section className="tegel-hub-cta-section" aria-label="Afsluiting & Contact">
        <div className="container">
          <div className="cta-type-b">
            <span className="section-num" aria-hidden="true">03 / CONTACT</span>
            <h2>{cta?.H2 || 'Uw tegelproject bespreken?'}</h2>
            <p className="lead cta-lead">
              {cta?.Body || 'Wij beoordelen de ondergrond en bespreken de mogelijkheden qua formaten en legverbanden.'}
            </p>
            <div className="cta-action">
              <a href={cta?.URL || '/contact/'} className="btn btn-primary">
                {cta?.Button || 'Project bespreken'}
                <CtaArrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA BAR */}
      <div
        className={`sticky-mobile-cta ${pastHero ? 'is-visible' : ''}`}
        aria-hidden={!pastHero}
      >
        <div className="sticky-mobile-cta-inner container">
          <span className="sticky-mobile-cta-label">Tegelwerk &amp; Installatie</span>
          <a href="/contact/" className="sticky-mobile-cta-btn">
            Project bespreken
            <CtaArrow />
          </a>
        </div>
      </div>
    </div>
  )
}
