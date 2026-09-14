import business from '../content/business-input.json'
import CtaArrow from './CtaArrow'
import { footerLinks } from '../data/navigation'

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
            <h2 className="footer-heading">Badkamers & Tegelwerk</h2>
            <ul className="footer-links">
              {footerLinks.badkamers.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              {footerLinks.tegelwerk.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialisaties */}
          <div className="footer-col">
            <h2 className="footer-heading">Specialisaties</h2>
            <ul className="footer-links">
              {footerLinks.specialisaties.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Informatie */}
          <div className="footer-col">
            <h2 className="footer-heading">Informatie</h2>
            <ul className="footer-links">
              {footerLinks.informatie.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
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
