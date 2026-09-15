import business from '../content/business-input.json'
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

          {/* Column 2: DIENSTEN */}
          <div className="footer-col">
            <h2 className="footer-heading">DIENSTEN</h2>
            <ul className="footer-links">
              {footerLinks.diensten.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: TEGELWERK */}
          <div className="footer-col">
            <h2 className="footer-heading">TEGELWERK</h2>
            <ul className="footer-links">
              {footerLinks.tegelwerk.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: SPPAT */}
          <div className="footer-col">
            <h2 className="footer-heading">SPPAT</h2>
            <ul className="footer-links">
              {footerLinks.sppat.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">Sppat — Almere &amp; Nederland</p>
        </div>
      </div>
    </footer>
  )
}
