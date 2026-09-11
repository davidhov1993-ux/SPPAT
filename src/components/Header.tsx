import { useEffect, useRef, useState } from 'react'
import CtaArrow from './CtaArrow'

const navItems: [string, string][] = [
  ['Badkamers', '/complete-badkamer-renovatie/'],
  ['Tegelwerk', '/tegelwerk/'],
  ['Projecten', '/projecten/'],
  ['Over ons', '/over-ons/'],
  ['Contact', '/contact/']
]

export default function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mainEl = document.getElementById('main')
    const footerEl = document.querySelector('.site-footer')
    if (open) {
      if (mainEl) mainEl.setAttribute('inert', '')
      if (footerEl) footerEl.setAttribute('inert', '')
      document.body.style.overflow = 'hidden'
    } else {
      if (mainEl) mainEl.removeAttribute('inert')
      if (footerEl) footerEl.removeAttribute('inert')
      document.body.style.overflow = ''
    }
    
    return () => {
      if (mainEl) mainEl.removeAttribute('inert')
      if (footerEl) footerEl.removeAttribute('inert')
      document.body.style.overflow = ''
    }
  }, [open])


  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setOpen(false)
          toggleRef.current?.focus()
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="/" className="wordmark" aria-label="Sppat homepage">
          Sppat
        </a>

        <nav className="nav-desktop" aria-label="Hoofdnavigatie">
          {navItems.map(([label, href]) => {
            const isActive = path === href
            return (
              <a
                key={href}
                href={href}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className="header-action-desktop">
          <a href="/contact/" className="btn btn-header">
            Project bespreken
            <CtaArrow />
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen(!open)}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu-overlay ${open ? 'is-visible' : ''}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Mobiel menu"
      >
        <div className="mobile-menu-header container">
          <a href="/" className="wordmark wordmark-light" onClick={handleClose} aria-label="Sppat homepage">
            Sppat
          </a>
          <button
            type="button"
            className="menu-close-btn"
            aria-label="Menu sluiten"
            onClick={handleClose}
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="mobile-menu-content container">
          <nav className="mobile-nav" aria-label="Mobiele navigatie">
            {navItems.map(([label, href]) => {
              const isActive = path === href
              return (
                <a
                  key={href}
                  href={href}
                  className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={handleClose}
                >
                  <span className="mobile-nav-label">{label}</span>
                  <CtaArrow />
                </a>
              )
            })}
          </nav>

          <div className="mobile-menu-footer">
            <a href="/contact/" className="btn btn-mobile-cta" onClick={handleClose}>
              Project bespreken
              <CtaArrow />
            </a>
            <p className="mobile-location-notice">Sppat — Almere &amp; Nederland</p>
          </div>
        </div>
      </div>
    </header>
  )
}
