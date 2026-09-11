import RichText from "../components/RichText"
import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import CtaTypeB from '../components/CtaTypeB'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaArrow from "../components/CtaArrow";
import HeroSplit from '../components/HeroSplit'

export default function TegelwerkHubPage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  
  const routingSection = page.sections.find(s => s.H2 === 'Onze tegelwerk diensten') || page.sections[0]
  
  const CARD_IMAGES = [
    '/media/Generated Image September 11, 2026 - 11_36AM.jpg',
    '/media/README.jpg',
    '/media/Generated Image September 11, 2026 - 11_16AM.jpg',
    '/media/Generated Image September 11, 2026 - 11_18AM.jpg',
    '/media/Generated Image September 11, 2026 - 11_38AM.jpg'
  ]


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
      <HeroSplit 
        ref={heroRef}
        eyebrow={hero.Eyebrow}
        title={hero.H1}
        body={hero.Body}
        ctaUrl={hero['Primary CTA URL']}
        ctaText={hero['Primary CTA'] || 'Project bespreken'}
        imageSrc="/media/Generated Image September 11, 2026 - 11_48AM.jpg"
        imageAlt={hero.ALT || 'Getegelde vloer in moderne woonruimte'}
      />

            {/* SECTION 2: THE ROUTING GRID (Waar kunnen wij u mee helpen?) */}
      {routingSection && (
        <section className="tegel-routing-section" aria-label="Waar kunnen wij u mee helpen?">
          <div className="container">
            <div className="tegel-routing-header">
              <span className="section-num" aria-hidden="true">01 / OVERZICHT</span>
              <p className="eyebrow">
                <span aria-hidden="true">—</span>
                Waar kunnen wij u mee helpen?
              </p>
              <h2>{routingSection.H2}</h2>
            </div>

            <div className="tegel-routing-grid">
              {routingSection.cards?.map((card, index) => (
                <article key={card['CTA URL']} className={`tegel-grid-item tegel-grid-item-${index + 1}`}>
                  <a
                    href={card['CTA URL']}
                    className="tegel-grid-media-link"
                    aria-label={card.Title}
                  >
                    <figure className="tegel-grid-figure">
                      <img
                        src={CARD_IMAGES[index] || '/media/README.jpg'}
                        alt={card.Title}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className={`tegel-grid-img ${index === 0 ? 'tegel-img-16-9' : 'tegel-img-1-1'}`}
                      />
                    </figure>
                  </a>
                  <div className="tegel-grid-content">
                    <span className="tegel-item-num" aria-hidden="true">0{index + 1} / {card.Title.split(' ')[0].toUpperCase()}</span>
                    <h3 className="tegel-item-title">
                      <a href={card['CTA URL']}>{card.Title}</a>
                    </h3>
                    <p className="tegel-item-body">
                      {card.Body}
                    </p>
                    <a href={card['CTA URL']} className="inline-link tegel-item-cta">
                      <span>{card.CTA || 'Lees meer'}</span>
                      <CtaArrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: PRICING INTERLUDE */}
      {pricingSection && (
        <section className="pricing-section tegel-pricing-section" aria-label={pricingSection.H2 || "Prijzen in de tegelbranche"}>
          <div className="container">
            <div className="tegel-pricing-grid">
              <div className="tegel-pricing-container">
                <span className="section-num" aria-hidden="true">02 / TARIEVEN</span>
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
                                <strong>{match[1]}:</strong>{match[2]}
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

      <CtaTypeB 
        sectionNum="03 / CONTACT"
        title={cta?.H2 || 'Uw tegelproject bespreken?'}
        body={cta?.Body || 'Wij beoordelen de ondergrond en bespreken de mogelijkheden qua formaten en legverbanden.'}
        ctaUrl={cta?.URL || '/contact/'}
        ctaText={cta?.Button || 'Project bespreken'}
      />

      <StickyMobileCta 
        isVisible={pastHero}
        label="Tegelwerk & Installatie"
      />
    </div>
  )
}
