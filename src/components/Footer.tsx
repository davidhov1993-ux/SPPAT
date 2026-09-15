import business from '../content/business-input.json'

const dienstenLinks: [string, string][] = [
  ['Badkamer renovatie', '/complete-badkamer-renovatie/'],
  ['Toilet renovatie', '/complete-toilet-renovatie/'],
  ['Tegelwerk', '/tegelwerk/']
]

const tegelwerkLinks: [string, string][] = [
  ['Badkamer tegelen', '/tegelwerk/badkamer-tegelen/'],
  ['Vloertegels', '/tegelwerk/vloer-tegelen/'],
  ['Grootformaat / XXL', '/specialisaties/grootformaat-tegels/'],
  ['Natuursteen', '/specialisaties/natuursteen/']
]

const sppatLinks: [string, string][] = [
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
          <div className="footer-col footer-col-brand">
            <a href="/" className="wordmark" aria-label="Sppat homepage">Sppat</a>
            <p className="footer-brand-desc">Vakkundige badkamer renovaties en hoogwaardig tegelwerk met focus op bouwkundige precisie en duurzame detaillering.</p>
            {business.address && <p className="footer-meta">{business.address}</p>}
            {business.phone && <p className="footer-meta"><a href={`tel:${business.phone}`}>{business.phone}</a></p>}
            {business.email && <p className="footer-meta"><a href={`mailto:${business.email}`}>{business.email}</a></p>}
            {business.kvk && <p className="footer-meta">KVK: {business.kvk}</p>}
            {business.btw && <p className="footer-meta">BTW: {business.btw}</p>}
          </div>
          <div className="footer-col"><h2 className="footer-heading">Diensten</h2><ul className="footer-links">{dienstenLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></div>
          <div className="footer-col"><h2 className="footer-heading">Tegelwerk</h2><ul className="footer-links">{tegelwerkLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></div>
          <div className="footer-col"><h2 className="footer-heading">Sppat</h2><ul className="footer-links">{sppatLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></div>
        </div>
        <div className="footer-bottom"><p className="footer-copy">Sppat — Almere &amp; Nederland</p></div>
      </div>
    </footer>
  )
}
