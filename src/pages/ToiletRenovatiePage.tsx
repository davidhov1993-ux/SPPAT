import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import RichText from '../components/RichText'
import HeroSplit from '../components/HeroSplit'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaTypeA from '../components/CtaTypeA'

export default function ToiletRenovatiePage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const hero = page.hero
  const cta = page.cta
  const imageSrc = '/media/Generated Image September 11, 2026 - 2_09PM.jpg'

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
    <div className="service-page toilet-page">
      <HeroSplit 
        ref={heroRef}
        eyebrow={hero.Eyebrow}
        title={hero.H1}
        body={hero.Body}
        ctaUrl={hero['Primary CTA URL']}
        ctaText={hero['Primary CTA']}
        imageSrc={imageSrc}
        imageAlt={hero.ALT || hero.H1}
        imageClassName="toilet-hero-img"
      />

      {page.sections.map((section, index) => (
        <section key={index} className="spec-nested-content-section" aria-label={section.H2 || 'Details'}>
          <div className="container">
            <div className="spec-nested-content-grid">
              <div className="spec-nested-content-block">
                <span className="section-num" aria-hidden="true">0{index + 1} / OVERZICHT</span>
                {section.H2 && <h2>{section.H2}</h2>}
                {section.Body && (
                  <p className="lead">
                    <RichText text={section.Body} links={page.links} />
                  </p>
                )}
                
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="spec-minimal-list">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="spec-minimal-item">
                        <RichText text={bullet} links={page.links} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {cta && (
        <CtaTypeA 
          sectionNum={`0${page.sections.length + 1} / CONTACT`}
          title={cta.H2 || 'Start uw renovatie'}
          body={cta.Body}
          ctaUrl={cta.URL}
          ctaText={cta.Button}
          imageSrc={imageSrc}
          imageAlt={hero.ALT || hero.H1}
        />
      )}

      <StickyMobileCta 
        isVisible={pastHero}
        label={hero.H1}
      />
    </div>
  )
}
