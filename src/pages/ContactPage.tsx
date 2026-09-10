import type { Page } from '../content/types'
import ContactForm from '../components/ContactForm'
import business from '../content/business-input.json'

export default function ContactPage({ page }: { page: Page }) {
  const hero = page.hero
  const formSection = page.sections[0]
  const infoSection = page.sections[1]

  return (
    <>
      {/* 1. TOP: H1 + approved introduction */}
      <section className="hero page-hero" aria-label="Contact introductie">
        <div className="container">
          <div className="article-hero-content">
            <p className="eyebrow">
              <span aria-hidden="true">—</span>
              Afspraak &amp; Opname
            </p>
            <h1>{hero.H1}</h1>
            {hero.Body && <p className="lead">{hero.Body}</p>}
          </div>
        </div>
      </section>

      {/* 2. MAIN: Form cols 2–7 on desktop, Contact info cols 9–11 */}
      <section className="contact-section" aria-label="Aanvraagformulier en contactgegevens">
        <div className="container">
          <div className="contact-layout">
            {/* Form Column: Cols 2–7 on desktop */}
            <div className="contact-form-col">
              <span className="section-num">01 / AANVRAAG</span>
              {formSection?.H2 && <h2>{formSection.H2}</h2>}
              {formSection?.Body && <p className="lead">{formSection.Body}</p>}

              <ContactForm />
            </div>

            {/* Optional Contact Information Column: Cols 9–11 on desktop */}
            {infoSection && (
              <aside className="contact-info-col" aria-label="Contactgegevens">
                <div className="contact-info-block">
                  <span className="section-num">02 / REGIO</span>
                  {infoSection.H3 && <h3>{infoSection.H3}</h3>}
                  {infoSection.Body && <p>{infoSection.Body}</p>}

                  {business.address && <p>{business.address}</p>}
                  {business.phone && (
                    <p>
                      Telefoon: <a href={`tel:${business.phone}`}>{business.phone}</a>
                    </p>
                  )}
                  {business.email && (
                    <p>
                      E-mail: <a href={`mailto:${business.email}`}>{business.email}</a>
                    </p>
                  )}
                  {business.kvk && <p>KVK: {business.kvk}</p>}
                  {business.btw && <p>BTW: {business.btw}</p>}
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
