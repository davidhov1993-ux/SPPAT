import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import CtaArrow from '../components/CtaArrow'

export default function TegelwerkServicePage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const hero = page.hero
  const section1 = page.sections[0]
  const section2 = page.sections[1]
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
    <div className="service-page">
      {/* SECTION 1 (HERO): Asymmetrical Split. Text left (6 cols), Placeholder right (5 cols, offset by 1). Mobile: Stacked, TEXT FIRST / PLACEHOLDER SECOND. */}
      <section ref={heroRef} className="service-hero-section" aria-label="Introductie">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-text">
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
              {hero['Primary CTA URL'] && (
                <div className="service-hero-cta">
                  <a href={hero['Primary CTA URL']} className="btn btn-primary">
                    {hero['Primary CTA'] || 'Project bespreken'}
                    <CtaArrow />
                  </a>
                </div>
              )}
            </div>
            <div className="service-hero-media">
              <div className="hero-image-placeholder" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 (CONTENT/LIST): Typography-led, centered alignment. Max-width 8 columns. Apply spacing-lg top and bottom. */}
      {section1 && (
        <section className="service-content-section" aria-label={section1.H2 || 'Specificatie'}>
          <div className="container">
            <div className="service-content-block">
              <span className="section-num" aria-hidden="true">01 / SPECIFICATIE</span>
              <h2>{section1.H2}</h2>
              {section1.Body && (
                <p className="lead">
                  <RichText text={section1.Body} links={page.links} />
                </p>
              )}
              {section1.bullets && section1.bullets.length > 0 && (
                <ul className="service-spec-list">
                  {section1.bullets.map((bullet) => (
                    <li key={bullet} className="service-spec-item">
                      <span className="service-spec-bullet" aria-hidden="true">—</span>
                      <p>
                        <RichText text={bullet} links={page.links} />
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3 (TEXT + INTERNAL LINK): Left-aligned, spanning 6 columns. Apply spacing-lg top and bottom. Use the .inline-link class for the internal link. */}
      {section2 && (
        <section className="service-links-section" aria-label={section2.H2 || 'Aanvullende informatie'}>
          <div className="container">
            <div className="service-links-grid">
              <div className="service-links-block">
                <span className="section-num" aria-hidden="true">02 / OVERZICHT</span>
                <h2>{section2.H2}</h2>
                {section2.Body && (
                  <p className="lead">
                    <RichText text={section2.Body} links={page.links} />
                  </p>
                )}
                {page.links
                  .filter((link) => (link.placement || '').toUpperCase().includes('SECTION 3'))
                  .map((link) => (
                    <div key={link.url} className="service-link-action">
                      <a href={link.url} className="inline-link">
                        <span>{link.anchor}</span>
                        <CtaArrow />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4 (CONCLUSION & CTA): Use "CTA Type B" (Centered, bordered, spacing-xl padding). */}
      {cta && (
        <section className="service-cta-section" aria-label="Afsluiting & Contact">
          <div className="container">
            <div className="cta-type-b">
              <span className="section-num" aria-hidden="true">03 / CONTACT</span>
              <h2>{cta.H2}</h2>
              {cta.Body && <p className="lead cta-lead">{cta.Body}</p>}
              <div className="cta-action">
                <a href={cta.URL || '/contact/'} className="btn btn-primary">
                  {cta.Button || 'Project bespreken'}
                  <CtaArrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STICKY MOBILE CTA BAR */}
      <div
        className={`sticky-mobile-cta ${pastHero ? 'is-visible' : ''}`}
        aria-hidden={!pastHero}
      >
        <div className="sticky-mobile-cta-inner container">
          <span className="sticky-mobile-cta-label">{hero.H1}</span>
          <a href="/contact/" className="sticky-mobile-cta-btn">
            Project bespreken
            <CtaArrow />
          </a>
        </div>
      </div>
    </div>
  )
}
