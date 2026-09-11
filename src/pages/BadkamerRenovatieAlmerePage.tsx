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
  const faq = page.faq

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
      <HeroSplit
        ref={heroRef}
        eyebrow={hero.Eyebrow}
        title={hero.H1}
        body={hero.Body}
        ctaUrl={hero['Primary CTA URL']}
        ctaText={hero['Primary CTA']}
        imageSrc="/media/SPPAT-VIS-013.jpg"
        imageAlt="Gedetailleerde weergave van strak tegelwerk met ingebouwde nis"
      />

      {sections[0] && (
        <section className="almere-intro-section" aria-label="Lokale expertise in Almere">
          <div className="container">
            <div className="almere-intro-grid">
              <div className="almere-intro-container">
                <span className="section-num" aria-hidden="true">01 / LOKAAL</span>
                <h2>Uw lokale specialist voor complexe projecten</h2>
                <p className="intro-badge">{sections[0].H2}</p>
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
                <img
                  src="/media/Generated Image September 10, 2026 - 11_53PM.jpg"
                  alt="Tegelzetter brengt met getande spaan lijmbed aan met millimeterprecisie"
                  loading="lazy"
                  className="almere-craft-img"
                />
              </figure>
              <div className="almere-craft-text">
                <span className="section-num" aria-hidden="true">02 / UITVOERING</span>
                <h2>Tegelwerk in uw badkamer in Almere</h2>
                <p className="craft-badge">{sections[1].H2}</p>
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

      {sections[2] && (
        <section className="almere-precision-section" aria-label="Technische precisie en veelgestelde vragen">
          <div className="container">
            <div className="almere-precision-grid">
              <figure className="almere-precision-media">
                <img
                  src="/media/SPPAT-VIS-015.jpg"
                  alt="Naadloze afwerking van tegelinleg drain en voegen"
                  loading="lazy"
                  className="almere-precision-img"
                />
              </figure>
              <div className="almere-precision-text">
                <span className="section-num" aria-hidden="true">03 / PRECISIE &amp; FAQ</span>
                <h2>{sections[2].H2}</h2>
                <div className="almere-faq-list">
                  {faq.map((item, index) => (
                    <div className="almere-faq-item" key={index}>
                      <h3 className="almere-faq-question">{item.question}</h3>
                      <p className="almere-faq-answer">{item.answer}</p>
                    </div>
                  ))}
                </div>
                <p className="precision-note">
                  {sections[2].Body}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaTypeA 
        sectionNum="04 / CONTACT"
        title="Start uw renovatie in Almere"
        subtitle={cta?.H2 || 'Uw badkamer in Almere renoveren?'}
        lead="Heeft u een ontwerp of referentiebeelden? Wij vertalen uw idee naar een technisch perfecte badkamer."
        body={cta?.Body || 'Wij denken technisch met u mee. Neem contact op voor een opname.'}
        ctaUrl={cta?.URL || '/contact/'}
        ctaText={cta?.Button || 'Project bespreken'}
        imageSrc="/media/SPPAT-VIS-016.jpg"
        imageAlt="Voltooide badkamer met hoogwaardig sanitair en wandafwerking"
      />

      <StickyMobileCta 
        isVisible={pastHero}
        label="Badkamer Renovatie Almere"
      />
    </div>
  )
}
