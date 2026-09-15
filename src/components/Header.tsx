import { useEffect, useRef, useState } from 'react'
import CtaArrow from './CtaArrow'

const navItems: [string, string][] = [
  ['Badkamers', '/complete-badkamer-renovatie/'],
  ['Tegelwerk', '/tegelwerk/'],
  ['Projecten', '/projecten/'],
  ['Over ons', '/over-ons/'],
  ['Contact', '/contact/']
]

const mobileServiceItems: [string, string][] = [
  ['Complete badkamer renovatie', '/complete-badkamer-renovatie/'],
  ['Toilet renovatie', '/complete-toilet-renovatie/'],
  ['Alle tegelwerk', '/tegelwerk/'],
  ['Badkamer tegelen', '/tegelwerk/badkamer-tegelen/'],
  ['Vloertegels', '/tegelwerk/vloer-tegelen/'],
  ['Grootformaat / XXL', '/specialisaties/grootformaat-tegels/'],
  ['Natuursteen', '/specialisaties/natuursteen/']
]

export default function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const mainEl = document.getElementById('main')
    const footerEl = document.querySelector('.site-footer')
    if (open) {
      mainEl?.setAttribute('inert', '')
      footerEl?.setAttribute('inert', '')
      document.body.style.overflow = 'hidden'
    } else {
      mainEl?.removeAttribute('inert')
      footerEl?.removeAttribute('inert')
      document.body.style.overflow = ''
    }
    return () => {
      mainEl?.removeAttribute('inert')
      footerEl?.removeAttribute('inert')
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const handleClose = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="/" className="wordmark" aria-label="Sppat homepage">Sppat</a>
        <nav className="nav-desktop" aria-label="Hoofdnavigatie">
          {navItems.map(([label, href]) => {
            const active = path === href || (href === '/tegelwerk/' && (path.startsWith('/tegelwerk/') || path.startsWith('/specialisaties/')))
            return <a key={href} href={href} className={`nav-link ${active ? 'is-active' : ''}`} aria-current={path === href ? 'page' : undefined}>{label}</a>
          })}
        </nav>
        <div className="header-action-desktop"><a href="/contact/" className="btn btn-header">Project bespreken<CtaArrow /></a></div>
        <button ref={toggleRef} type="button" className={`menu-toggle ${open ? 'is-open' : ''}`} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Menu sluiten' : 'Menu openen'} onClick={() => setOpen(!open)}><span className="toggle-bar"/><span className="toggle-bar"/></button>
      </div>

      <div id="mobile-menu" className={`mobile-menu-overlay ${open ? 'is-visible' : ''}`} aria-hidden={!open} role="dialog" aria-modal="true" aria-label="Mobiel menu">
        <div className="mobile-menu-header container"><a href="/" className="wordmark wordmark-light" onClick={handleClose}>Sppat</a><button type="button" className="menu-close-btn" aria-label="Menu sluiten" onClick={handleClose}><span aria-hidden="true">✕</span></button></div>
        <div className="mobile-menu-content container">
          <nav className="mobile-nav" aria-label="Mobiele navigatie">
            {navItems.map(([label, href]) => <a key={href} href={href} className={`mobile-nav-link ${path === href ? 'is-active' : ''}`} aria-current={path === href ? 'page' : undefined} onClick={handleClose}><span className="mobile-nav-label">{label}</span><CtaArrow /></a>)}
          </nav>
          <nav className="mobile-service-nav" aria-label="Diensten">
            {mobileServiceItems.map(([label, href]) => <a key={href} href={href} onClick={handleClose}>{label}</a>)}
          </nav>
          <div className="mobile-menu-footer"><a href="/contact/" className="btn btn-mobile-cta" onClick={handleClose}>Project bespreken<CtaArrow /></a><p className="mobile-location-notice">Sppat — Almere &amp; Nederland</p></div>
        </div>
      </div>
    </header>
  )
}
