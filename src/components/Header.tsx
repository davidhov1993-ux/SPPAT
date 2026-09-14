import { useEffect, useRef, useState } from 'react'
import CtaArrow from './CtaArrow'
import { mainNav } from '../data/navigation'
import type { NavItem } from '../data/navigation'

export default function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false)
  const [mobileLevel2, setMobileLevel2] = useState<NavItem | null>(null)
  
  const toggleRef = useRef<HTMLButtonElement>(null)

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

  useEffect(() => {
    if (open) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setOpen(false)
          toggleRef.current?.focus()
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [open])

  const handleClose = () => {
    setOpen(false)
    setMobileLevel2(null)
    toggleRef.current?.focus()
  }
  
  const isPathActive = (href: string) => path.startsWith(href) && (href !== '/' || path === '/')

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="/" className="wordmark" aria-label="Sppat homepage">
          Sppat
        </a>

        <nav className="nav-desktop" aria-label="Hoofdnavigatie">
          {mainNav.map((item) => {
            const isActive = isPathActive(item.href)
            const hasChildren = !!item.children?.length
            
            return (
              <div key={item.label} className={`nav-desktop-item ${hasChildren ? 'has-dropdown' : ''}`}>
                <a
                  href={item.href}
                  className={`nav-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {hasChildren && <span className="nav-dropdown-icon">▾</span>}
                </a>
                
                {hasChildren && (
                  <div className="nav-dropdown">
                    <ul className="nav-dropdown-list">
                      {item.children?.map(child => (
                        <li key={child.href}>
                          <a href={child.href} className={`nav-dropdown-link ${path === child.href ? 'is-active' : ''}`}>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
          <div className="mobile-nav-slider" style={{ transform: mobileLevel2 ? 'translateX(-100%)' : 'translateX(0)' }}>
            
            {/* Level 1 */}
            <div className="mobile-nav-pane mobile-nav-pane-1">
              <nav className="mobile-nav" aria-label="Mobiele hoofdnavigatie">
                {mainNav.map((item) => {
                  const isActive = isPathActive(item.href)
                  const hasChildren = !!item.children?.length
                  
                  if (hasChildren) {
                    return (
                      <button 
                        key={item.label}
                        type="button"
                        className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                        onClick={() => setMobileLevel2(item)}
                      >
                        <span className="mobile-nav-label">{item.label}</span>
                        <span className="mobile-nav-arrow">→</span>
                      </button>
                    )
                  }
                  
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={handleClose}
                    >
                      <span className="mobile-nav-label">{item.label}</span>
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
            
            {/* Level 2 */}
            <div className="mobile-nav-pane mobile-nav-pane-2">
              {mobileLevel2 && (
                <div className="mobile-nav-level2">
                  <button 
                    type="button" 
                    className="mobile-nav-back"
                    onClick={() => setMobileLevel2(null)}
                  >
                    ← Terug
                  </button>
                  <div className="mobile-nav-title">{mobileLevel2.label}</div>
                  <nav className="mobile-nav" aria-label={`Subnavigatie ${mobileLevel2.label}`}>
                    {mobileLevel2.children?.map(child => (
                      <a
                        key={child.href}
                        href={child.href}
                        className={`mobile-nav-link ${path === child.href ? 'is-active' : ''}`}
                        onClick={handleClose}
                      >
                        <span className="mobile-nav-label">{child.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </header>
  )
}
