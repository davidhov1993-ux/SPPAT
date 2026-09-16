import type { Page } from '../content/types'
import ContactForm from '../components/ContactForm'
import business from '../content/business-input.json'

export default function ContactPage({ page }: { page: Page }) {
  const hero = page.hero
  const formSection = page.sections[0]
  const infoSection = page.sections[1]

  return (
    <>
      <section className="contact-section" aria-label="Contact en Aanvraag" style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
        <div className="container">
          <div className="grid-12">
            
            {/* Intro/Details: 5 columns */}
            <div className="col-span-5">
              <p className="eyebrow">
                <span aria-hidden="true">—</span>
                Afspraak & Opname
              </p>
              <h1>{hero.H1}</h1>
              {hero.Body && <p className="lead">{hero.Body}</p>}
              
              {infoSection && (
                <div style={{ marginTop: 'var(--space-xl)' }}>
                  <span className="section-num">REGIO</span>
                  {infoSection.H3 && <h3>{infoSection.H3}</h3>}
                  {infoSection.Body && <p>{infoSection.Body}</p>}
                  
                  <div style={{ marginTop: 'var(--space-md)' }}>
                    {business.address && <p>{business.address}</p>}
                    {business.phone && (
                      <p>
                        Telefoon: <a href={"tel:" + business.phone}>{business.phone}</a>
                      </p>
                    )}
                    {business.email && (
                      <p>
                        E-mail: <a href={"mailto:" + business.email}>{business.email}</a>
                      </p>
                    )}
                    {business.kvk && <p>KVK: {business.kvk}</p>}
                    {business.btw && <p>BTW: {business.btw}</p>}
                  </div>
                </div>
              )}
            </div>
            
            {/* Form: 7 columns */}
            <div className="col-start-6 col-span-7">
              <span className="section-num">01 / AANVRAAG</span>
              {formSection?.H2 && <h2>{formSection.H2}</h2>}
              {formSection?.Body && <p style={{ marginBottom: 'var(--space-md)' }}>{formSection.Body}</p>}
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
