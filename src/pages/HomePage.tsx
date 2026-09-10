import { useState } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import { CtaTypeA } from '../components/CtaSection'
import CtaArrow from '../components/CtaArrow'

const heroMedia = {
  src: '/media/SPPAT-VIS-001.jpg',
  alt: 'Strak afgewerkte badkamer met grootformaat tegels en inbouwdetails'
}

const serviceMedia = [
  {
    src: '/media/SPPAT-VIS-002.jpg',
    alt: 'Complete Badkamer Renovatie nisdetail en wandafwerking',
    objectPosition: 'center center'
  },
  {
    src: '/media/SPPAT-VIS-003.jpg',
    alt: 'Toilet Renovatie met symmetrische tegelvoegen en inbouwelement',
    objectPosition: 'center center'
  },
  {
    src: '/media/SPPAT-VIS-004.jpg',
    alt: 'Professioneel Tegelwerk met scherpe 45 graden verstekrand',
    objectPosition: 'left center'
  },
  {
    src: '/media/SPPAT-VIS-005.jpg',
    alt: 'Tegel Specialisaties natuursteen textuur en drain detail',
    objectPosition: 'center bottom'
  }
]

const proofMedia = {
  src: '/media/SPPAT-VIS-006.jpg',
  alt: 'Detail van strak tegelwerk en voegprecisie'
}

export default function HomePage({ page }: { page: Page }) {
  const [activeService, setActiveService] = useState(0)

  const hero = page.hero
  const servicesBlock = page.sections[0] // SECTION 2: Waarvoor schakelt u ons in?
  const proofBlock = page.sections[1] // SECTION 3: Kwaliteit begint onder de tegels
  const cta = page.cta

  const proofLinks = page.links.filter(l =>
    l.placement.toUpperCase().startsWith(proofBlock?.id || 'NONE')
  )

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
                  src={heroMedia.src}
                  alt={hero.ALT || heroMedia.alt}
                  fetchPriority="high"
                  className="home-hero-img"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES (Process: Interactive discovery on Desktop, linear on Tablet/Mobile) */}
      <section id="werkzaamheden" className="home-services-section" aria-label="Diensten">
        <div className="container">
          <div className="home-services-header">
            <span className="section-num">01 / OVERZICHT</span>
            <h2>{servicesBlock.H2}</h2>
            <nav className="home-jump-nav" aria-label="Diensten navigatie">
              <a href="#werkzaamheden" className="home-jump-link">
                Werkzaamheden <span className="btn-arrow" aria-hidden="true">↓</span>
              </a>
              <a href="#tegelwerk" className="home-jump-link">
                Tegelwerk <span className="btn-arrow" aria-hidden="true">↓</span>
              </a>
              <a href="#specialisaties" className="home-jump-link">
                Specialisaties <span className="btn-arrow" aria-hidden="true">↓</span>
              </a>
            </nav>
          </div>

          <div className="services-interactive-layout">
            {/* Left: Services Text List (spans 7 of 12 columns on desktop) */}
            <div className="services-text-col">
              {servicesBlock.cards?.map((card, idx) => {
                const cardId = idx === 2 ? 'tegelwerk' : idx === 3 ? 'specialisaties' : undefined
                const mediaItem = serviceMedia[idx] || serviceMedia[0]

                return (
                  <article
                    key={card.Title}
                    id={cardId}
                    className={`service-interactive-item ${activeService === idx ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveService(idx)}
                    onFocus={() => setActiveService(idx)}
                    tabIndex={0}
                  >
                    <div className="service-item-content">
                      <span className="card-order-num" aria-hidden="true">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="card-title">
                        <a href={card['CTA URL']}>{card.Title}</a>
                      </h3>
                      {card.Body && <p className="card-body">{card.Body}</p>}
                    </div>

                    {/* Tablet/Mobile Inline Image (displayed directly underneath heading/body) */}
                    <div className="service-inline-media">
                      <img
                        src={mediaItem.src}
                        alt={mediaItem.alt}
                        loading="lazy"
                        style={{ objectPosition: mediaItem.objectPosition }}
                      />
                    </div>

                    <a href={card['CTA URL']} className="text-link">
                      {card.CTA || 'Lees meer'}
                      <CtaArrow />
                    </a>
                  </article>
                )
              })}
            </div>

            {/* Right: Dedicated Media Container (spans 5 of 12 columns on desktop, fixed 3:4 aspect ratio) */}
            <div className="services-desktop-media" aria-hidden="true">
              <div className="services-media-frame">
                {serviceMedia.map((media, idx) => (
                  <img
                    key={media.src}
                    src={media.src}
                    alt={media.alt}
                    loading="lazy"
                    className={`services-media-slide ${activeService === idx ? 'is-visible' : ''}`}
                    style={{ objectPosition: media.objectPosition }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL PROOF (Precision: 4-column Square Macro Grout Shot + 8-column text) */}
      {proofBlock && (
        <section className="technical-proof-section" aria-label="Technische Kwaliteit">
          <div className="container">
            <div className="technical-proof-grid">
              {/* Spans 4 of 12 columns on desktop (1:1 square with 1px border) */}
              <div className="proof-media-col">
                <figure className="proof-macro-figure">
                  <img
                    src={proofMedia.src}
                    alt={proofBlock.ALT || proofMedia.alt}
                    loading="lazy"
                    className="proof-macro-img"
                  />
                </figure>
              </div>

              {/* Spans 8 of 12 columns adjacent to macro photo */}
              <div className="proof-text-col">
                <span className="section-num">02 / TECHNIEK</span>
                <h2>{proofBlock.H2}</h2>
                {proofBlock.Body && (
                  <p>
                    <RichText text={proofBlock.Body} links={proofLinks} />
                  </p>
                )}
                {proofLinks
                  .filter(link => !(proofBlock.Body || '').includes(link.anchor))
                  .map(link => (
                    <p key={link.url}>
                      <a href={link.url}>{link.anchor}</a>
                    </p>
                  ))}
                {proofBlock['CTA URL'] && (
                  <div style={{ marginTop: '16px' }}>
                    <a href={proofBlock['CTA URL']} className="text-link">
                      {proofBlock.CTA}
                      <CtaArrow />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. TYPE A FINAL CTA (Action: Clean typography-driven conversion without image distraction) */}
      {cta && <CtaTypeA block={cta} />}
    </>
  )
}
