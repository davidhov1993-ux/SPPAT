import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'

import RelatedLinks from '../components/RelatedLinks'
import RichText from "../components/RichText"
import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import CtaTypeB from '../components/CtaTypeB'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaArrow from "../components/CtaArrow";

export default function TegelwerkHubPage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const hero = page.hero
  const introSection = page.sections.find(s => s.id === 'INTRO')
  const routingSection = page.sections.find(s => s.cards)
  const technicalProof = page.sections.find(s => s.id === 'TECHNICAL_PROOF')
  const asymmetrical = page.sections.find(s => s.id === 'ASYMMETRICAL')
  const pricingSection = page.sections.find(s => s.H2 && s.H2.includes("Prijzen"))
  
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
      {/* 1. HERO OVERLAP */}
      <section className="hero home-hero" aria-label="Introductie" ref={heroRef}>
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
                <MediaImage mediaId="substrate" role="hero" priority className="home-hero-img" />
                <MediaCaption mediaId="substrate" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO / POSITIONING */}
      {introSection && (
        <section className="service-content-section" aria-label="Positionering" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div className="container">
            <div className="service-content-block" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2>{introSection.H2}</h2>
              <p className="lead">{introSection.Body}</p>
            </div>
          </div>
        </section>
      )}

      {/* 3. TEGELWERK ROUTING GRID */}
      {routingSection && (
        <section className="tegel-routing-section" aria-label="Waar kunnen wij u mee helpen?">
          <div className="container">
            <div className="tegel-routing-header">
              <p className="eyebrow">
                <span aria-hidden="true">—</span>
                Onze Diensten
              </p>
              <h2>{routingSection.H2 || 'Kies uw tegelwerk project'}</h2>
            </div>

            <div className="tegel-routing-grid">
              {routingSection.cards?.map((card, index) => (
                <article key={card['CTA URL']} className={`tegel-grid-item tegel-grid-item-${index + 1}`}>
                  <div className="tegel-grid-content">
                    <h3 className="tegel-item-title">
                      <a href={card['CTA URL']}>{card.Title}</a>
                    </h3>
                    <p className="tegel-item-body">
                      {card.Body}
                    </p>
                    <a href={card['CTA URL']} className="inline-link tegel-item-cta">
                      <span>Lees meer</span>
                      <CtaArrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. TECHNICAL PROOF */}
      {technicalProof && (
        <section className="technical-proof-section" aria-label="Technische Kwaliteit" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="technical-proof-grid">
              <div className="proof-media-col">
                <figure className="proof-macro-figure">
                  <MediaImage mediaId={technicalProof.mediaId as string} role="macro" className="proof-macro-img" />
                  <MediaCaption mediaId={technicalProof.mediaId as string} />
                </figure>
              </div>
              <div className="proof-text-col">
                <h2>{technicalProof.H2}</h2>
                <p><RichText text={technicalProof.Body as string} links={page.links || []} /></p>
                {technicalProof.CTA && (
                  <div style={{ marginTop: '16px' }}>
                    <a href={technicalProof['CTA URL']} className="text-link">
                      {technicalProof.CTA}
                      <CtaArrow />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. ASYMMETRICAL VISUAL SECTION */}
      {asymmetrical && (
        <section className="service-content-section" aria-label={asymmetrical.H2} style={{ padding: '80px 0', backgroundColor: 'var(--color-surface)' }}>
          <div className="container service-content-layout">
            <div className="service-content-block">
              <h2>{asymmetrical.H2}</h2>
              <p><RichText text={asymmetrical.Body as string} links={page.links || []} /></p>
            </div>
            {asymmetrical.mediaId && (
              <figure className="service-detail-media">
                <MediaImage mediaId={asymmetrical.mediaId as string} role="detail" />
                <MediaCaption mediaId={asymmetrical.mediaId as string} />
              </figure>
            )}
          </div>
        </section>
      )}

      
      {/* 5.5 PRICING INTERLUDE */}
      {pricingSection && (
        <section className="pricing-section tegel-pricing-section" aria-label={pricingSection.H2 || "Prijzen in de tegelbranche"}>
          <div className="container">
            <div className="tegel-pricing-grid">
              <div className="tegel-pricing-container">
                <h2>{pricingSection.H2}</h2>
                <p className="lead tegel-pricing-lead">
                  {pricingSection.Body}
                </p>
                {pricingSection.bullets && pricingSection.bullets.length > 0 && (
                  <ul className="tegel-spec-list">
                    {pricingSection.bullets.map((bullet, idx) => {
                      const match = bullet.match(/^(.*?):(.*)$/)
                      return (
                        <li key={idx} className="tegel-spec-item">
                          <span className="tegel-spec-bullet" aria-hidden="true">—</span>
                          <p>
                            {match ? (
                              <>
                                <strong>{match[1]}:</strong><RichText text={match[2]} links={page.links || []} />
                              </>
                            ) : (
                              <RichText text={bullet} links={page.links || []} />
                            )}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. RELATED COMPLETE PROJECT CONTEXT (Included as Related Links) */}
      <RelatedLinks urls={page.relatedUrls} />

      {/* 7. CTA TYPE B */}
      <CtaTypeB 
        title={cta?.H2 || 'Uw tegelproject bespreken?'}
        body={cta?.Body || 'Wij beoordelen de ondergrond en bespreken de mogelijkheden qua formaten en legverbanden.'}
        ctaUrl={cta?.URL || '/contact/'}
        ctaText={cta?.Button || 'Project bespreken'}
      />

      <StickyMobileCta 
        isVisible={pastHero}
        label="Specialistisch Tegelwerk"
      />
    </div>
  )
}
