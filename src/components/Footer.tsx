import business from '../content/business-input.json'
import CtaArrow from './CtaArrow'

const dienstenLinks: [string, string][] = [
  ['Complete badkamer renovatie', '/complete-badkamer-renovatie/'],
  ['Toilet renovatie', '/complete-toilet-renovatie/'],
  ['Vloertegels leggen', '/tegelwerk/vloer-tegelen/'],
  ['Wandtegels zetten', '/tegelwerk/wand-tegelen/']
]

const specialisatiesLinks: [string, string][] = [
  ['Grootformaat tegels', '/specialisaties/grootformaat-tegels/'],
  ['Mozaïek zetten', '/specialisaties/mozaiek-zetten/'],
  ['Natuursteen', '/specialisaties/natuursteen/'],
  ['Keramisch parket', '/specialisaties/keramisch-parket/']
]

const informatieLinks: [string, string][] = [
  ['Projecten', '/projecten/'],
  ['Over ons', '/over-ons/'],
  ['Kennisbank', '/kennisbank/'],
  ['Contact', '/contact/']
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Contact if available */}
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
                <a href={`tel:${business.phone}`}>{business.phone}</a>
              </p>
            )}
            {business.email && (
              <p className="footer-meta">
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>
            )}
            {business.kvk && <p className="footer-meta">KVK: {business.kvk}</p>}
            {business.btw && <p className="footer-meta">BTW: {business.btw}</p>}
          </div>

          {/* Column 2: Diensten */}
          <div className="footer-col">
            <h2 className="footer-heading">Diensten</h2>
            <ul className="footer-links">
              {dienstenLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialisaties */}
          <div className="footer-col">
            <h2 className="footer-heading">Specialisaties</h2>
            <ul className="footer-links">
              {specialisatiesLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Informatie */}
          <div className="footer-col">
            <h2 className="footer-heading">Informatie</h2>
            <ul className="footer-links">
              {informatieLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">Sppat — Almere &amp; Nederland</p>
          <a href="/complete-badkamer-renovatie/almere/" className="footer-almere-link">
            Badkamer Renovatie in Almere
            <CtaArrow />
          </a>
        </div>
      </div>
    </footer>
  )
}
