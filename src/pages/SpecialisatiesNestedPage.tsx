import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import HeroSplit from '../components/HeroSplit'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaTypeB from '../components/CtaTypeB'
import RelatedLinks from '../components/RelatedLinks'
import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'

export default function SpecialisatiesNestedPage({ page }: { page: Page }) {
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
    <div className="service-page">
      <HeroSplit 
        currentPath={page.url} 
        ref={heroRef} 
        eyebrow={hero.Eyebrow} 
        title={hero.H1} 
        body={hero.Body} 
        ctaUrl={hero['Primary CTA URL']} 
        ctaText={hero['Primary CTA']} 
      />
      
      {page.sections.map((section, index) => {
        if (section.Type === 'Text') {
          return (
            <section key={section.id || index} className="service-content-section" aria-label={section.H2}>
              <div className="container">
                <div className="service-content-block">
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
                {section.mediaId! && (
                  <figure className="service-detail-media">
                    <MediaImage mediaId={section.mediaId as string} role="detail" />
                    <MediaCaption mediaId={section.mediaId as string} />
                  </figure>
                )}
              </div>
            </section>
          )
        }
        if (section.Type === 'Macro') {
          return (
            <section key={section.id || index} className="service-content-section" aria-label={section.H2}>
              <div className="container service-content-layout">
                <div className="service-content-block">
                  <h2>{section.H2}</h2>
                  {section.Body?.split('\n\n').map((text, i) => <p key={i}><RichText text={text} links={page.links} /></p>)}
                </div>
                {section.mediaId! && (
                  <aside className="explanatory-media" aria-label="Illustratieve technische toelichting">
                    <figure>
                      <MediaImage mediaId={section.mediaId as string} role="macro" />
                      <MediaCaption mediaId={section.mediaId as string} />
                    </figure>
                  </aside>
                )}
              </div>
            </section>
          )
        }
        return null
      })}

      {!!page.faq?.length && (
        <section className="container faq-section" aria-label="Veelgestelde vragen">
          <h2 className="faq-header">Veelgestelde vragen</h2>
          <div className="faq-list">
            {page.faq.map(faq => (
              <details key={faq.question} className="faq-item">
                <summary className="faq-summary">
                  <span>{faq.question}</span><span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <p className="faq-body">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <RelatedLinks urls={page.relatedUrls} />
      
      {page.cta && <CtaTypeB title={page.cta.H2} body={page.cta.Body} ctaUrl={page.cta.URL} ctaText={page.cta.Button} />}
      
      <StickyMobileCta isVisible={pastHero} label={hero.H1} />
    </div>
  )
}
