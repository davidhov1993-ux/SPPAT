import business from '../content/business-input.json'

const primaryLinks: [string, string][] = [
  ['Badkamers', '/complete-badkamer-renovatie/'],
  ['Tegelwerk', '/tegelwerk/'],
  ['Projecten', '/projecten/'],
  ['Over ons', '/over-ons/'],
  ['Contact', '/contact/']
]

const supportLinks: [string, string][] = [
  ['Kennisbank', '/kennisbank/'],
  ['Badkamer Renovatie in Almere', '/complete-badkamer-renovatie/almere/']
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand">
            <a href="/" className="wordmark" aria-label="Sppat homepage">
              Sppat
            </a>
            <p className="footer-brand-desc">
              Vakkundige badkamer renovaties en hoogwaardig tegelwerk met focus op bouwkundige precisie en duurzame detaillering.
            </p>
            {business.address && <p className="footer-meta">{business.address}</p>}
            {business.phone && (
              <p className="footer-meta">
                <a href={"tel:" + business.phone}>{business.phone}</a>
              </p>
            )}
            {business.email && (
              <p className="footer-meta">
                <a href={"mailto:" + business.email}>{business.email}</a>
              </p>
            )}
            {business.kvk && <p className="footer-meta">KVK: {business.kvk}</p>}
            {business.btw && <p className="footer-meta">BTW: {business.btw}</p>}
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Navigatie</h2>
            <ul className="footer-links">
              {primaryLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Informatie</h2>
            <ul className="footer-links">
              {supportLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">Sppat — Almere & Nederland</p>
        </div>
      </div>
    </footer>
  )
}
