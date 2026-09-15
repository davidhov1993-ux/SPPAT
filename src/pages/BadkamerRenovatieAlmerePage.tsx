import MediaImage from '../components/MediaImage'
import MediaCaption from '../components/MediaCaption'
import RelatedLinks from '../components/RelatedLinks'
import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import CtaArrow from '../components/CtaArrow'
import HeroSplit from '../components/HeroSplit'
import StickyMobileCta from '../components/StickyMobileCta'
import CtaTypeA from '../components/CtaTypeA'
import RichText from '../components/RichText'

export default function BadkamerRenovatieAlmerePage({ page }: { page: Page }) {
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  const hero = page.hero
  const sections = page.sections
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
    <div className="almere-page">
      <HeroSplit currentPath={page.url} pageTitle={page.title} 
        ref={heroRef}
        eyebrow={hero.Eyebrow}
        title={hero.H1}
        body={hero.Body}
        ctaUrl={hero['Primary CTA URL']}
        ctaText={hero['Primary CTA']}
        imageAlt="Gedetailleerde weergave van strak tegelwerk met ingebouwde nis"
      />

      {sections[0] && (
        <section className="almere-intro-section" aria-label="Lokale expertise in Almere">
          <div className="container">
            <div className="almere-intro-grid">
              <div className="almere-intro-container">
                <h2>{sections[0].H2}</h2>
                {sections[0].Lead && (
                  <p className="lead manifesto-lead">
                    {sections[0].Lead}
                  </p>
                )}
                <p className="intro-secondary-text">
                  {sections[0].Body}
                </p>
                <div className="intro-action">
                  <a href="/projecten/" className="btn btn-secondary">
                    Bekijk projecten
                    <CtaArrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {sections[1] && (
        <section className="almere-craft-section" aria-label="Tegelwerk in uw badkamer in Almere">
          <div className="container">
            <div className="almere-craft-grid">
              <figure className="almere-craft-media">
                <MediaImage mediaId={undefined} /><MediaCaption mediaId={undefined} />
              </figure>
              <div className="almere-craft-text">
                <h2>{sections[1].H2}</h2>
                {sections[1].Lead && (
                  <p className="lead">
                    <RichText text={sections[1].Lead} links={page.links} />
                  </p>
                )}
                <p className="craft-secondary-text">
                  <RichText text={sections[1].Body || ''} links={page.links} />
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <RelatedLinks urls={page.relatedUrls} />
      <CtaTypeA 
        
        title={cta?.H2 || 'Uw badkamer in Almere renoveren?'}
        body={cta?.Body || 'Wij denken technisch met u mee. Neem contact op voor een opname.'}
        ctaUrl={cta?.URL || '/contact/'}
        ctaText={cta?.Button || 'Project bespreken'}
        imageAlt="Voltooide badkamer met hoogwaardig sanitair en wandafwerking"
      />

      <StickyMobileCta 
        isVisible={pastHero}
        label="Badkamer Renovatie Almere"
      />
    </div>
  )
}
