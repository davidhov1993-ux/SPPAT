import { useState, useEffect, useRef } from 'react'
import type { Page } from '../content/types'
import CtaArrow from '../components/CtaArrow'

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
      {/* SECTION 1: HERO (Lokaal Vakmanschap, Landelijke Kwaliteit) */}
      <section ref={heroRef} className="almere-hero-section" aria-label="Introductie">
        <div className="container">
          <div className="almere-hero-wrapper">
            <figure className="almere-hero-media">
              <img
                src="/media/SPPAT-VIS-013.jpg"
                alt={hero.ALT || 'Badkamer renovatie uitgevoerd in Almere'}
                fetchPriority="high"
                className="almere-hero-img"
              />
            </figure>

            <div className="almere-hero-content-block">
              {hero.Eyebrow && (
                <p className="eyebrow">
                  <span aria-hidden="true">—</span>
                  {hero.Eyebrow}
                </p>
              )}
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
              {hero['Primary CTA URL'] && (
                <div className="hero-cta-action">
                  <a href={hero['Primary CTA URL']} className="btn">
                    {hero['Primary CTA']}
                    <CtaArrow />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION (Uw lokale specialist...) */}
      <section className="almere-intro-section" aria-label="Lokale expertise in Almere">
        <div className="container">
          <div className="almere-intro-grid">
            <div className="almere-intro-container">
              <span className="section-num" aria-hidden="true">01 / LOKAAL</span>
              <h2>Uw lokale specialist voor complexe projecten</h2>
              <p className="intro-badge">{sections[0]?.H2 || 'Kennis van lokale installatietechniek'}</p>
              <p className="lead manifesto-lead">
                Of u nu woont in Almere Poort, Duin of Haven, wij kennen de lokale bouwstijlen. Wij onderscheiden ons door niet te kiezen voor de makkelijkste weg, maar voor de technisch beste oplossing. Rechte wanden, perfect afschot in uw inloopdouche en tegelwerk zonder hoogteverschillen.
              </p>
              <p className="intro-secondary-text">
                {sections[0]?.Body}
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

      {/* SECTION 3: THE CRAFT (Tegelwerk in uw badkamer...) */}
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
              <p className="craft-badge">{sections[1]?.H2 || 'Uw project van sloop tot afwerking'}</p>
              <p className="lead">
                Het tegelwerk bepaalt de uiteindelijke uitstraling van de ruimte. Wij zijn gespecialiseerd in het verwerken van complexe materialen. Of u nu kiest voor de naadloze look van{' '}
                <a href="/specialisaties/grootformaat-tegels/">grootformaat tegels</a>, de detaillering van{' '}
                <a href="/specialisaties/mozaiek-zetten/">mozaïek</a>, of de organische uitstraling van{' '}
                <a href="/specialisaties/natuursteen/">natuursteen</a>, wij streven naar een technisch en visueel hoogwaardige verwerking.
              </p>
              <p className="craft-secondary-text">
                Wij voeren de stappen van de verbouwing uit. Van het vakkundig slopen tot het waterdicht maken van de doucheruimte en het integreren van inbouwkranen. Voor het tegelwerk kunnen alle materialen worden verwerkt, waaronder{' '}
                <a href="/specialisaties/grootformaat-tegels/">grootformaat tegels</a>,{' '}
                <a href="/specialisaties/natuursteen/">natuursteen</a> en{' '}
                <a href="/specialisaties/mozaiek-zetten/">mozaïek</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNICAL PRECISION (FAQ Section) */}
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
              <h2>Technische Precisie &amp; Veelgestelde Vragen</h2>
              <div className="almere-faq-list">
                <div className="almere-faq-item">
                  <h3 className="almere-faq-question">Installeren jullie ook inbouwkranen en nissen?</h3>
                  <p className="almere-faq-answer">
                    Ja. Inbouwkranen, regendouches uit het plafond en op maat gemaakte nissen (eventueel met LED-profielen) behoren tot onze standaard werkzaamheden bij luxe renovaties.
                  </p>
                </div>
                <div className="almere-faq-item">
                  <h3 className="almere-faq-question">Regelen jullie ook het leidingwerk?</h3>
                  <p className="almere-faq-answer">
                    Ja, bij een complete renovatie passen wij al het benodigde leidingwerk en de afvoeren aan op het nieuwe ontwerp.
                  </p>
                </div>
              </div>
              <p className="precision-note">
                De bouwkundige kwaliteit van een badkamer zit in het onzichtbare werk. Wij werken met gecertificeerde waterdichtingssystemen: kimband in alle aansluitingen, afdichtingspasta rondom doorvoeren en een uiterst vlakke voorbereiding van wand en vloer. Douchedrains en inbouwkranen worden op de millimeter nauwkeurig gepositioneerd zodat het tegelwerk naadloos aansluit op het afwateringssysteem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONCLUSION & CTA (Start uw renovatie in Almere - CTA Type A: The Anchor) */}
      <section className="almere-cta-section cta-type-a" aria-label="Start uw renovatie in Almere">
        <div className="container">
          <div className="almere-cta-grid">
            <div className="almere-cta-text">
              <span className="section-num" aria-hidden="true">04 / CONTACT</span>
              <h2>Start uw renovatie in Almere</h2>
              <h3 className="cta-subheading">{cta?.H2 || 'Uw badkamer in Almere renoveren?'}</h3>
              <p className="lead cta-lead">
                Heeft u een ontwerp of referentiebeelden? Wij vertalen uw idee naar een technisch perfecte badkamer.
              </p>
              <p className="cta-sublead">
                {cta?.Body || 'Wij denken technisch met u mee. Neem contact op voor een opname.'}
              </p>
              <div className="cta-action">
                <a href={cta?.URL || '/contact/'} className="btn">
                  {cta?.Button || 'Project bespreken'}
                  <CtaArrow />
                </a>
              </div>
            </div>

            <figure className="almere-cta-media">
              <img
                src="/media/SPPAT-VIS-016.jpg"
                alt="Voltooide badkamer met hoogwaardig sanitair en wandafwerking"
                loading="lazy"
                className="almere-cta-img"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA BAR */}
      <div
        className={`sticky-mobile-cta ${pastHero ? 'is-visible' : ''}`}
        aria-hidden={!pastHero}
      >
        <div className="sticky-mobile-cta-inner container">
          <span className="sticky-mobile-cta-label">Badkamer Renovatie Almere</span>
          <a href="/contact/" className="sticky-mobile-cta-btn">
            Project bespreken
            <CtaArrow />
          </a>
        </div>
      </div>
    </div>
  )
}
