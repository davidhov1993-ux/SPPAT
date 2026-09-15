
import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaTypeA from '../components/CtaTypeA'
import RelatedLinks from '../components/RelatedLinks'
import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'
import CtaArrow from '../components/CtaArrow'

export default function BadkamerRenovatiePage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const hero = page.hero

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
    <div className="badkamer-renovatie-page">
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
                <MediaImage mediaId="bath-feb" role="hero" priority className="home-hero-img" />
                <MediaCaption mediaId="bath-feb" />
              </figure>
            </div>
          </div>
        </div>
      </section>

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
      
      {page.cta && <CtaTypeA title={page.cta.H2} lead={page.cta.Body} ctaUrl={page.cta.URL} ctaText={page.cta.Button} imageAlt="Sppat afgerond badkamerproject gereed voor gebruik" />}
      
      <StickyMobileCta isVisible={pastHero} label={hero.H1} />
    </div>
  )
}
