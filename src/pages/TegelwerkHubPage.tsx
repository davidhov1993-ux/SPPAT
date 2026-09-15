import RichText from '../components/RichText'
import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import CtaTypeB from '../components/CtaTypeB'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaArrow from '../components/CtaArrow'
import HeroSplit from '../components/HeroSplit'

const specialistCards = [
  ['Grootformaat / XXL', 'Grote keramische platen vragen om een vlakke ondergrond, volledige lijmdekking en nauwkeurige beheersing van hoogteverschillen.', '/specialisaties/grootformaat-tegels/'],
  ['Mozaïek', 'Detailwerk voor nissen, accenten en complexe vormen, met aandacht voor rustige mat-overgangen en een consistent voegbeeld.', '/specialisaties/mozaiek-zetten/'],
  ['Natuursteen', 'Marmer, travertin en andere natuursteen vragen om materiaalkennis, passende verlijming en zorgvuldige selectie en verwerking.', '/specialisaties/natuursteen/'],
  ['Keramisch parket', 'Houtlook tegels en langwerpige formaten vragen om een legplan dat rekening houdt met formaat, bolling en voegbeeld.', '/specialisaties/keramisch-parket/']
] as const

export default function TegelwerkHubPage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const routingSection = page.sections.find(s => s.H2 === 'Onze tegelwerk diensten') || page.sections[0]
  const pricingSection = page.sections.find(s => s.H2 === 'Prijzen in de tegelbranche (Marktindicaties 2026)') || page.sections[1]
  const hero = page.hero
  const cta = page.cta
  const cardImages = ['/media/Generated Image September 11, 2026 - 11_36AM.jpg','/media/README.jpg','/media/Generated Image September 11, 2026 - 11_16AM.jpg','/media/Generated Image September 11, 2026 - 11_18AM.jpg','/media/Generated Image September 11, 2026 - 11_38AM.jpg']

  useEffect(() => { const onScroll = () => setPastHero((heroRef.current?.getBoundingClientRect().bottom || 1) <= 0); window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll) }, [])

  return <div className="tegelwerk-hub-page">
    <HeroSplit ref={heroRef} eyebrow={hero.Eyebrow} title={hero.H1} body={hero.Body} ctaUrl={hero['Primary CTA URL']} ctaText={hero['Primary CTA'] || 'Project bespreken'} imageSrc="/media/Generated Image September 11, 2026 - 11_48AM.jpg" imageAlt={hero.ALT || 'Getegelde vloer in moderne woonruimte'} />

    {routingSection && <section className="tegel-routing-section" aria-label="Tegelwerk toepassingen"><div className="container"><div className="tegel-routing-header"><span className="section-num">01 / TOEPASSINGEN</span><p className="eyebrow"><span aria-hidden="true">—</span>Waar kunnen wij u mee helpen?</p><h2>{routingSection.H2}</h2></div><div className="tegel-routing-grid">
      {routingSection.cards?.map((card, index) => <article key={card['CTA URL']} className={`tegel-grid-item tegel-grid-item-${index + 1}`}><a href={card['CTA URL']} className="tegel-grid-media-link"><figure className="tegel-grid-figure"><img src={cardImages[index] || cardImages[0]} alt={card.Title} loading="lazy" className="tegel-grid-img" /></figure></a><div className="tegel-grid-content"><span className="tegel-item-num">0{index + 1}</span><h3 className="tegel-item-title"><a href={card['CTA URL']}>{card.Title}</a></h3><p className="tegel-item-body">{card.Body}</p><a href={card['CTA URL']} className="inline-link tegel-item-cta">Lees meer<CtaArrow /></a></div></article>)}
    </div></div></section>}

    <section className="tegel-routing-section specialist-routing-section" aria-label="Specialistisch tegelwerk"><div className="container"><div className="tegel-routing-header"><span className="section-num">02 / SPECIALISTISCH</span><p className="eyebrow"><span aria-hidden="true">—</span>Materiaal & techniek</p><h2>Specialistisch tegelwerk</h2></div><div className="tegel-routing-grid">
      {specialistCards.map(([title, body, href], index) => <article key={href} className="tegel-grid-item"><div className="tegel-grid-content"><span className="tegel-item-num">0{index + 1}</span><h3 className="tegel-item-title"><a href={href}>{title}</a></h3><p className="tegel-item-body">{body}</p><a href={href} className="inline-link tegel-item-cta">Bekijk specialisme<CtaArrow /></a></div></article>)}
    </div></div></section>

    {pricingSection && <section className="pricing-section tegel-pricing-section" aria-label={pricingSection.H2}><div className="container"><div className="tegel-pricing-grid"><div className="tegel-pricing-container"><span className="section-num">03 / TARIEVEN</span><h2>{pricingSection.H2}</h2><p className="lead tegel-pricing-lead">{pricingSection.Body}</p>{pricingSection.bullets && <ul className="tegel-spec-list">{pricingSection.bullets.map((bullet, idx) => <li key={idx} className="tegel-spec-item"><span className="tegel-spec-bullet">—</span><p><RichText text={bullet} links={page.links || []} /></p></li>)}</ul>}</div></div></div></section>}
    <CtaTypeB sectionNum="04 / CONTACT" title={cta?.H2 || 'Uw tegelproject bespreken?'} body={cta?.Body || 'Bespreek uw ruimte, ondergrond, materiaal en gewenste afwerking met ons.'} ctaUrl={cta?.URL || '/contact/'} ctaText={cta?.Button || 'Project bespreken'} />
    <StickyMobileCta isVisible={pastHero} label="Tegelwerk" />
  </div>
}
