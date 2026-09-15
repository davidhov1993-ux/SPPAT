import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import HeroSplit from '../components/HeroSplit'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaTypeB from '../components/CtaTypeB'
import RelatedLinks from '../components/RelatedLinks'
import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'
import { serviceMedia } from '../data/media'

export default function TegelwerkServicePage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const hero = page.hero
  const media = serviceMedia[page.url] || {}
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0))
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])
  return <div className="service-page">
    <HeroSplit currentPath={page.url} ref={heroRef} eyebrow={hero.Eyebrow} title={hero.H1} body={hero.Body} ctaUrl={hero['Primary CTA URL']} ctaText={hero['Primary CTA']} />
    {page.sections.map((section, index) => <section key={section.id || section.H2} className="service-content-section" aria-label={section.H2}>
      <div className="container service-content-layout">
        <div className="service-content-block">
          <span className="section-num" aria-hidden="true">{String(index + 1).padStart(2, '0')} / TECHNIEK</span>
          <h2>{section.H2}</h2>
          {section.Body?.split('\n\n').map(text => <p key={text}><RichText text={text} links={page.links} /></p>)}
          {!!section.bullets?.length && <ul className="service-spec-list">{section.bullets.map(bullet => <li key={bullet}><RichText text={bullet} links={page.links} /></li>)}</ul>}
        </div>
        {index === 0 && media.detail && <figure className="service-detail-media"><MediaImage mediaId={media.detail} /><MediaCaption mediaId={media.detail} /></figure>}
      </div>
    </section>)}
    {media.macro && <aside className="container explanatory-media" aria-label="Illustratieve technische toelichting"><figure><MediaImage mediaId={media.macro} role="macro" /><MediaCaption mediaId={media.macro} /></figure></aside>}
    {!!page.faq?.length && <section className="container faq-section" aria-label="Veelgestelde vragen">{page.faq.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>}
    <RelatedLinks urls={page.relatedUrls} />
    {page.cta && <CtaTypeB title={page.cta.H2} body={page.cta.Body} ctaUrl={page.cta.URL} ctaText={page.cta.Button} />}
    <StickyMobileCta isVisible={pastHero} label={hero.H1} />
  </div>
}
