
import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaTypeB from '../components/CtaTypeB'
import RelatedLinks from '../components/RelatedLinks'
import HeroSplit from '../components/HeroSplit'

export default function BadkamerRenovatieAlmerePage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const hero = page.hero

  useEffect(() => {
    if (typeof window === 'undefined') return
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0))
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="almere-landing-page">
      <HeroSplit 
        currentPath={page.url} 
        ref={heroRef} 
        eyebrow={hero.Eyebrow} 
        title={hero.H1} 
        body={hero.Body} 
        ctaUrl={hero['Primary CTA URL']} 
        ctaText={hero['Primary CTA']} 
        mediaId="bath-feb"
      />

      {/* SECTIONS */}
      {page.sections.map((section, index) => {
        return (
          <section key={section.id || index} className="service-content-section" aria-label={section.H2}>
            <div className="container">
              <div className="service-content-block" style={{ maxWidth: '800px' }}>
                <h2>{section.H2}</h2>
                {section.Body?.split('\n\n').map((text, i) => <p key={i}><RichText text={text} links={page.links} /></p>)}
              </div>
            </div>
          </section>
        )
      })}

      <RelatedLinks urls={page.relatedUrls} />
      
      {page.cta && <CtaTypeB title={page.cta.H2} body={page.cta.Body} ctaUrl={page.cta.URL} ctaText={page.cta.Button} />}
      
      <StickyMobileCta isVisible={pastHero} label={hero.H1} />
    </div>
  )
}
