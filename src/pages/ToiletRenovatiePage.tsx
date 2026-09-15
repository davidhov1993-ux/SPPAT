
import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaTypeB from '../components/CtaTypeB'
import RelatedLinks from '../components/RelatedLinks'
import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'
import HeroSplit from '../components/HeroSplit'

export default function ToiletRenovatiePage({ page }: { page: Page }) {
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
    <div className="service-page toilet-renovatie-page">
      {/* SERVICE SPLIT HERO */}
      <HeroSplit 
        currentPath={page.url} 
        ref={heroRef} 
        eyebrow={hero.Eyebrow} 
        title={hero.H1} 
        body={hero.Body} 
        ctaUrl={hero['Primary CTA URL']} 
        ctaText={hero['Primary CTA']} 
        mediaId="ai-toilet"
      />

      {/* DYNAMIC SECTIONS */}
      {page.sections.map((section, index) => {
        if (section.Type === 'Text') {
          return (
            <section key={section.id || index} className="service-content-section" aria-label={section.H2}>
              <div className="container">
                <div className="service-content-block" style={{ maxWidth: '800px' }}>
                  <h2>{section.H2}</h2>
                  {section.Body?.split('\n\n').map((text, i) => <p key={i}><RichText text={text} links={page.links} /></p>)}
                  {!!section.bullets?.length && <ul className="service-spec-list">{section.bullets.map((bullet, i) => <li key={i}><RichText text={bullet} links={page.links} /></li>)}</ul>}
                </div>
              </div>
            </section>
          )
        }
        if (section.Type === 'Asymmetrical') {
          return (
            <section key={section.id || index} className="service-content-section" aria-label={section.H2}>
              <div className="container service-content-layout">
                <div className="service-content-block">
                  <h2>{section.H2}</h2>
                  {section.Body?.split('\n\n').map((text, i) => <p key={i}><RichText text={text} links={page.links} /></p>)}
                </div>
                {section.mediaId && (
                  <figure className="service-detail-media">
                    <MediaImage mediaId={section.mediaId} role="detail" />
                    <MediaCaption mediaId={section.mediaId} />
                  </figure>
                )}
              </div>
            </section>
          )
        }
        if (section.Type === 'Macro') {
          return (
            <section key={section.id || index} className="technical-proof-section" aria-label={section.H2} style={{ padding: '80px 0' }}>
              <div className="container">
                <div className="technical-proof-grid">
                  <div className="proof-media-col">
                    {section.mediaId && (
                      <figure className="proof-macro-figure">
                        <MediaImage mediaId={section.mediaId} role="macro" className="proof-macro-img" />
                        <MediaCaption mediaId={section.mediaId} />
                      </figure>
                    )}
                  </div>
                  <div className="proof-text-col">
                    <h2>{section.H2}</h2>
                    {section.Body?.split('\n\n').map((text, i) => <p key={i}><RichText text={text} links={page.links} /></p>)}
                  </div>
                </div>
              </div>
            </section>
          )
        }
        return null
      })}

      <RelatedLinks urls={page.relatedUrls} />
      
      {page.cta && <CtaTypeB title={page.cta.H2} body={page.cta.Body} ctaUrl={page.cta.URL} ctaText={page.cta.Button} />}
      
      <StickyMobileCta isVisible={pastHero} label={hero.H1} />
    </div>
  )
}
