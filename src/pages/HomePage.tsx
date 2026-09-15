import { useState } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import { CtaTypeA } from '../components/CtaSection'
import CtaArrow from '../components/CtaArrow'

const heroMedia = { src: '/media/SPPAT-VIS-001.jpg', alt: 'Strak afgewerkte badkamer met grootformaat tegels en inbouwdetails' }
const serviceMedia = [
  { src: '/media/SPPAT-VIS-002.jpg', alt: 'Complete badkamer renovatie', objectPosition: 'center center' },
  { src: '/media/SPPAT-VIS-003.jpg', alt: 'Toilet renovatie', objectPosition: 'center center' },
  { src: '/media/SPPAT-VIS-004.jpg', alt: 'Professioneel tegelwerk', objectPosition: 'left center' }
]
const proofMedia = { src: '/media/SPPAT-VIS-006.jpg', alt: 'Detail van strak tegelwerk en voegprecisie' }

export default function HomePage({ page }: { page: Page }) {
  const [activeService, setActiveService] = useState(0)
  const hero = page.hero
  const servicesBlock = page.sections[0]
  const proofBlock = page.sections[1]
  const cta = page.cta
  const proofLinks = page.links.filter(l => l.placement.toUpperCase().startsWith(proofBlock?.id || 'NONE'))
  const cards = (servicesBlock.cards || []).filter(card => card['CTA URL'] !== '/specialisaties/')

  return <>
    <section className="hero home-hero" aria-label="Introductie"><div className="container"><div className="home-hero-grid">
      <div className="home-hero-text">{hero.Eyebrow && <p className="eyebrow"><span aria-hidden="true">—</span>{hero.Eyebrow}</p>}<h1>{hero.H1}</h1>{hero.Body && <p className="lead">{hero.Body}</p>}{hero['Primary CTA URL'] && <div><a href={hero['Primary CTA URL']} className="btn">{hero['Primary CTA']}<CtaArrow /></a></div>}</div>
      <div className="home-hero-media"><figure className="home-hero-figure"><img src={heroMedia.src} alt={hero.ALT || heroMedia.alt} fetchPriority="high" className="home-hero-img" /></figure></div>
    </div></div></section>

    <section id="werkzaamheden" className="home-services-section" aria-label="Diensten"><div className="container">
      <div className="home-services-header"><span className="section-num">01 / OVERZICHT</span><h2>{servicesBlock.H2}</h2></div>
      <div className="services-interactive-layout"><div className="services-text-col">
        {cards.map((card, idx) => { const media = serviceMedia[idx] || serviceMedia[0]; return <article key={card.Title} id={idx === 2 ? 'tegelwerk' : undefined} className={`service-interactive-item ${activeService === idx ? 'is-active' : ''}`} onMouseEnter={() => setActiveService(idx)} onFocus={() => setActiveService(idx)} tabIndex={0}>
          <div className="service-item-content"><span className="card-order-num" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span><h3 className="card-title"><a href={card['CTA URL']}>{card.Title}</a></h3>{card.Body && <p className="card-body">{card.Body}</p>}</div>
          <div className="service-inline-media"><img src={media.src} alt={media.alt} loading="lazy" style={{ objectPosition: media.objectPosition }} /></div>
          <a href={card['CTA URL']} className="text-link">{card.CTA || 'Lees meer'}<CtaArrow /></a>
        </article>})}
      </div><div className="services-desktop-media" aria-hidden="true"><div className="services-media-frame">{serviceMedia.map((media, idx) => <img key={media.src} src={media.src} alt="" loading="lazy" className={`services-media-slide ${activeService === idx ? 'is-visible' : ''}`} style={{ objectPosition: media.objectPosition }} />)}</div></div></div>
    </div></section>

    {proofBlock && <section className="technical-proof-section" aria-label="Technische kwaliteit"><div className="container"><div className="technical-proof-grid">
      <div className="proof-media-col"><figure className="proof-macro-figure"><img src={proofMedia.src} alt={proofBlock.ALT || proofMedia.alt} loading="lazy" className="proof-macro-img" /></figure></div>
      <div className="proof-text-col"><span className="section-num">02 / TECHNIEK</span><h2>{proofBlock.H2}</h2>{proofBlock.Body && <p><RichText text={proofBlock.Body} links={proofLinks} /></p>}{proofBlock['CTA URL'] && <div style={{ marginTop: '16px' }}><a href={proofBlock['CTA URL']} className="text-link">{proofBlock.CTA}<CtaArrow /></a></div>}</div>
    </div></div></section>}
    {cta && <CtaTypeA block={cta} />}
  </>
}
