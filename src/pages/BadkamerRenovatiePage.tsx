import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'

export default function BadkamerRenovatiePage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const hero = page.hero
  const sections = page.sections
  const cta = page.cta
  const links = page.links

  const section1Bullets = sections[0]?.bullets || []
  const section3Links = links.filter(l =>
    l.placement.toUpperCase().startsWith(sections[1]?.id || 'NONE')
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      // Active once hero bottom scrolls past top of viewport
      setPastHero(rect.bottom <= 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="badkamer-page">
      {/* SECTION 1: HERO (The Architectural Ambition) */}
      <section ref={heroRef} className="badkamer-hero-section" aria-label="Introductie">
        <div className="container">
          <div className="badkamer-hero-wrapper">
            <figure className="badkamer-hero-media">
              <img
                src="/media/Generated Image September 10, 2026 - 7_57PM(1).jpg"
                alt={hero.ALT || 'Overzichtsfoto van een compleet gerenoveerde badkamer met inloopdouche'}
                fetchPriority="high"
                className="badkamer-hero-img"
              />
            </figure>

            <div className="badkamer-hero-content-block">
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
                  <a href={hero['Primary CTA URL']} className="btn">
                    {hero['Primary CTA']}
                    <span className="btn-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION (Typography-led Manifesto) */}
      {sections[0] && (
        <section className="badkamer-intro-section" aria-label="Het renovatieproces">
          <div className="container">
            <div className="badkamer-intro-grid">
              <div className="badkamer-intro-container">
                <span className="section-num">01 / PROCES</span>
                <h2>{sections[0].H2}</h2>
                <p className="lead manifesto-lead">{sections[0].Body}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: PHASE 1 (Deconstruction & Foundation) */}
      {section1Bullets.length >= 3 && (
        <section className="badkamer-phase-section phase-1-section" aria-label="Fase 1: Demontage & Ruwbouw">
          <div className="container">
            <div className="phase-1-grid">
              <div className="phase-1-media">
                <figure className="phase-media-figure">
                  <img
                    src="/media/Generated Image September 10, 2026 - 9_17PM.jpg"
                    alt="Demontage en leidingwerk in casco badkamer"
                    loading="lazy"
                    className="phase-1-img"
                  />
                </figure>
              </div>

              <div className="phase-1-text">
                <span className="phase-badge">Fase 01 / Demontage &amp; Ruwbouw</span>
                <div className="phase-timeline">
                  <div className="phase-item">
                    <span className="phase-item-num" aria-hidden="true">01</span>
                    <div className="phase-item-content">
                      <p>{section1Bullets[0]}</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <span className="phase-item-num" aria-hidden="true">02</span>
                    <div className="phase-item-content">
                      <p>{section1Bullets[1]}</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <span className="phase-item-num" aria-hidden="true">03</span>
                    <div className="phase-item-content">
                      <p>{section1Bullets[2]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: PHASE 2 (Waterproofing & Preparation) */}
      {section1Bullets.length >= 5 && (
        <section className="badkamer-phase-section phase-2-section" aria-label="Fase 2: Voorbereiding & Waterdichting">
          <div className="container">
            <div className="phase-2-grid">
              <div className="phase-2-text">
                <span className="phase-badge">Fase 02 / Voorbereiding &amp; Afdichting</span>
                <div className="phase-timeline">
                  <div className="phase-item">
                    <span className="phase-item-num" aria-hidden="true">04</span>
                    <div className="phase-item-content">
                      <p>{section1Bullets[3]}</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <span className="phase-item-num" aria-hidden="true">05</span>
                    <div className="phase-item-content">
                      <p>{section1Bullets[4]}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="phase-2-media">
                <figure className="phase-media-figure">
                  <img
                    src="/media/Generated Image September 10, 2026 - 8_27PM(1).jpg"
                    alt="Waterdichtingssysteem en uitvlakken van natte cel"
                    loading="lazy"
                    className="phase-2-img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: PHASE 3 (Tile Execution) */}
      {section1Bullets.length >= 7 && (
        <section className="badkamer-phase-section phase-3-section" aria-label="Fase 3: Tegelwerk & Afmontage">
          <div className="container">
            <div className="phase-3-grid">
              <div className="phase-3-text">
                <span className="phase-badge">Fase 03 / Afwerking &amp; Oplevering</span>
                <div className="phase-timeline">
                  <div className="phase-item">
                    <span className="phase-item-num" aria-hidden="true">06</span>
                    <div className="phase-item-content">
                      <p>{section1Bullets[5]}</p>
                    </div>
                  </div>
                  <div className="phase-item">
                    <span className="phase-item-num" aria-hidden="true">07</span>
                    <div className="phase-item-content">
                      <p>{section1Bullets[6]}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="phase-3-media">
                <figure className="phase-media-figure">
                  <img
                    src="/media/Generated Image September 10, 2026 - 8_27PM (1)(1).jpg"
                    alt="Hoogwaardig tegelwerk en nauwkeurige sanitaire afmontage"
                    loading="lazy"
                    className="phase-3-img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: THE SPPAT STANDARD (Details) */}
      {sections[1] && (
        <section className="badkamer-standard-section" aria-label="De Sppat Standaard">
          <div className="container">
            <div className="standard-grid">
              <div className="standard-media">
                <figure className="standard-media-figure">
                  <img
                    src="/media/Generated Image September 10, 2026 - 8_38PM(1).jpg"
                    alt="Architectonisch tegeldetail met ingebouwde nis en strakke verstekken"
                    loading="lazy"
                    className="standard-img"
                  />
                </figure>
              </div>

              <div className="standard-text">
                <span className="section-num">02 / TECHNIEK</span>
                <h2>{sections[1].H2}</h2>
                <p className="lead">
                  <RichText text={sections[1].Body!} links={section3Links} />
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* INTERLUDE: MARKET INDICATIONS & PRICING */}
      {sections[2] && (
        <section className="badkamer-pricing-section" aria-label="Kosten & Investering">
          <div className="container">
            <div className="pricing-header">
              <span className="section-num">03 / INVESTERING</span>
              <h2>{sections[2].H2}</h2>
              <p className="lead">{sections[2].Body}</p>
            </div>

            <div className="pricing-cards-grid">
              {sections[2].bullets?.map((bullet, idx) => (
                <div key={idx} className="pricing-card">
                  <span className="pricing-card-num" aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="pricing-card-body">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ ACCORDIONS */}
      {page.faq && page.faq.length > 0 && (
        <section className="faq-section" aria-label="Veelgestelde vragen">
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

      {/* SECTION 7: CONCLUSION & CTA */}
      {cta && (
        <section className="badkamer-conclusion-section" aria-label="Afsluiting & Contact">
          <div className="container">
            <div className="badkamer-conclusion-grid">
              <div className="badkamer-conclusion-text">
                <span className="section-num">04 / CONTACT</span>
                <h2>{cta.H2}</h2>
                <p className="lead cta-lead">{cta.Body}</p>
                <div className="conclusion-action">
                  <a href={cta.URL || '/contact/'} className="btn">
                    {cta.Button || 'Project bespreken'}
                    <span className="btn-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="badkamer-conclusion-media">
                <figure className="badkamer-conclusion-figure">
                  <img
                    src="/media/Generated Image September 10, 2026 - 8_39PM(1).jpg"
                    alt="Sppat afgerond badkamerproject gereed voor gebruik"
                    loading="lazy"
                    className="badkamer-conclusion-img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MOBILE UI ADDITION: STICKY BOTTOM "OFFERTE AANVRAGEN" BAR */}
      <div
        className={`sticky-mobile-cta ${pastHero ? 'is-visible' : ''}`}
        aria-hidden={!pastHero}
      >
        <div className="sticky-mobile-cta-inner container">
          <span className="sticky-mobile-cta-label">Badkamer Renovatie</span>
          <a href="/contact/" className="sticky-mobile-cta-btn">
            Offerte Aanvragen
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}
