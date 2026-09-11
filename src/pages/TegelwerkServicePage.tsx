import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import CtaArrow from "../components/CtaArrow";
import HeroSplit from '../components/HeroSplit'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaTypeB from '../components/CtaTypeB'

export default function TegelwerkServicePage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const hero = page.hero
  const section1 = page.sections[0]
  const section2 = page.sections[1]
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
    <div className="service-page">
      <HeroSplit 
        ref={heroRef}
        eyebrow={hero.Eyebrow}
        title={hero.H1}
        body={hero.Body}
        ctaUrl={hero['Primary CTA URL']}
        ctaText={hero['Primary CTA']}
      />

      {section1 && (
        <section className="service-content-section" aria-label={section1.H2 || 'Specificatie'}>
          <div className="container">
            <div className="service-content-block">
              <span className="section-num" aria-hidden="true">01 / SPECIFICATIE</span>
              <h2>{section1.H2}</h2>
              {section1.Body && (
                <p className="lead">
                  <RichText text={section1.Body} links={page.links} />
                </p>
              )}
              {section1.bullets && section1.bullets.length > 0 && (
                <ul className="service-spec-list">
                  {section1.bullets.map((bullet) => (
                    <li key={bullet} className="service-spec-item">
                      <span className="service-spec-bullet" aria-hidden="true">—</span>
                      <p>
                        <RichText text={bullet} links={page.links} />
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {section2 && (
        <section className="service-links-section" aria-label={section2.H2 || 'Aanvullende informatie'}>
          <div className="container">
            <div className="service-links-grid">
              <div className="service-links-block">
                <span className="section-num" aria-hidden="true">02 / OVERZICHT</span>
                <h2>{section2.H2}</h2>
                {section2.Body && (
                  <p className="lead">
                    <RichText text={section2.Body} links={page.links} />
                  </p>
                )}
                {page.links
                  .filter((link) => (link.placement || '').toUpperCase().includes('SECTION 3'))
                  .map((link) => (
                    <div key={link.url} className="service-link-action">
                      <a href={link.url} className="inline-link">
                        <span>{link.anchor}</span>
                        <CtaArrow />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {cta && (
        <CtaTypeB 
          title={cta.H2}
          body={cta.Body}
          ctaUrl={cta.URL}
          ctaText={cta.Button}
        />
      )}

      <StickyMobileCta 
        isVisible={pastHero}
        label={hero.H1}
      />
    </div>
  )
}
