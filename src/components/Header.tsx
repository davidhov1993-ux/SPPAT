import { useEffect, useRef, useState } from 'react'
import CtaArrow from './CtaArrow'
import { mainNav, isNavActive } from '../data/navigation'
import type { NavItem } from '../data/navigation'

export default function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false)
  const [level, setLevel] = useState<NavItem | null>(null)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDivElement>(null)
  const headerContent = useRef<HTMLDivElement>(null)
  const back = useRef<HTMLButtonElement>(null)
  const categoryTriggers = useRef<Record<string, HTMLButtonElement | null>>({})
  const close = () => { setOpen(false); setLevel(null); trigger.current?.focus() }

  useEffect(() => {
    if (!open) return
    const targets = [document.querySelector('main'), document.querySelector('footer'), headerContent.current]
    const opener = trigger.current
    const previous = document.body.style.overflow
    targets.forEach(el => el?.setAttribute('inert', ''))
    document.body.style.overflow = 'hidden'
    dialog.current?.querySelector<HTMLButtonElement>('.menu-close-btn')?.focus()
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); setLevel(null); return }
      if (event.key !== 'Tab') return
      const controls = [...(dialog.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex="0"]') || [])].filter(el => el.getClientRects().length)
      const first = controls[0], last = controls[controls.length - 1]
      if (event.shiftKey && (document.activeElement === first || !dialog.current?.contains(document.activeElement))) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && (document.activeElement === last || !dialog.current?.contains(document.activeElement))) { event.preventDefault(); first?.focus() }
    }
    const viewport = window.matchMedia('(min-width: 1024px)')
    const resize = () => { if (viewport.matches) { setOpen(false); setLevel(null) } }
    document.addEventListener('keydown', keyboard)
    viewport.addEventListener('change', resize)
    return () => {
      targets.forEach(el => el?.removeAttribute('inert'))
      document.body.style.overflow = previous
      document.removeEventListener('keydown', keyboard)
      viewport.removeEventListener('change', resize)
      opener?.focus()
    }
  }, [open])
  useEffect(() => { if (level) back.current?.focus() }, [level])

  return <header className="site-header">
    <div className="container header-container" ref={headerContent}>
      <a className="skip-link" href="#main">Naar hoofdinhoud</a>
      <a href="/" className="wordmark" aria-label="Sppat homepage">Sppat</a>
      <nav className="nav-desktop" aria-label="Hoofdnavigatie">
        {mainNav.map((item, index) => <div key={item.label} className={`nav-desktop-item ${item.children ? 'has-dropdown' : ''}`}
          onMouseEnter={() => item.children && setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}
          onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setDropdown(null) }}
          onKeyDown={event => { if (event.key === 'Escape') { setDropdown(null); event.currentTarget.querySelector('button')?.focus(); event.stopPropagation() } }}>
          {item.children ? <button className={`nav-link ${isNavActive(item, path) ? 'is-active' : ''}`} type="button"
            aria-expanded={dropdown === item.label} aria-controls={`desktop-nav-${index}`}
            onClick={() => setDropdown(dropdown === item.label ? null : item.label)}>{item.label}<span aria-hidden="true" className="nav-dropdown-icon">▾</span></button>
            : <a href={item.href} className={`nav-link ${isNavActive(item, path) ? 'is-active' : ''}`} aria-current={path === item.href ? 'page' : undefined}>{item.label}</a>}
          {item.children && <div className="nav-dropdown" id={`desktop-nav-${index}`} hidden={dropdown !== item.label}>
            <ul className="nav-dropdown-list">{item.children.map(child => <li key={child.href} className={child.subordinate ? 'nav-subordinate' : undefined}>
              <a href={child.href} className="nav-dropdown-link" aria-current={path === child.href ? 'page' : undefined}>{child.label}</a>
            </li>)}</ul>
            <a href={item.href} className="nav-dropdown-action">{item.actionLabel} <span aria-hidden="true">→</span></a>
          </div>}
        </div>)}
      </nav>
      <div className="header-action-desktop"><a href="/contact/" className="btn btn-header">Project bespreken<CtaArrow /></a></div>
      <button ref={trigger} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu openen" onClick={() => setOpen(true)}><span className="toggle-bar" /><span className="toggle-bar" /></button>
    </div>
    <div ref={dialog} id="mobile-menu" className={`mobile-menu-overlay ${open ? 'is-visible' : ''}`} hidden={!open} role="dialog" aria-modal="true" aria-label="Mobiel menu">
      <div className="mobile-menu-header container"><a href="/" className="wordmark wordmark-light" aria-label="Sppat homepage">Sppat</a><button className="menu-close-btn" type="button" aria-label="Menu sluiten" onClick={close}>×</button></div>
      <div className="mobile-menu-content container">
        {level ? <div className="mobile-nav-level2">
          <button ref={back} type="button" className="mobile-nav-back" onClick={() => { const label = level.label; setLevel(null); requestAnimationFrame(() => categoryTriggers.current[label]?.focus()) }}>← Terug</button>
          <p className="mobile-nav-title">{level.label}</p>
          <nav className="mobile-nav" aria-label={`Subnavigatie ${level.label}`}>
            <a className="mobile-nav-link" href={level.href}>Overzicht</a>
            {level.children?.map(child => <a key={child.href} href={child.href} className={`mobile-nav-link ${child.subordinate ? 'nav-subordinate' : ''}`} aria-current={path === child.href ? 'page' : undefined}>{child.label}</a>)}
          </nav>
        </div> : <nav className="mobile-nav" aria-label="Mobiele hoofdnavigatie">
          {mainNav.map(item => item.children ? <button ref={el => { categoryTriggers.current[item.label] = el }} key={item.label} type="button" className={`mobile-nav-link ${isNavActive(item,path) ? 'is-active' : ''}`} onClick={() => setLevel(item)}>{item.label}<span aria-hidden="true">→</span></button>
            : <a key={item.href} href={item.href} className={`mobile-nav-link ${isNavActive(item,path) ? 'is-active' : ''}`} aria-current={path === item.href ? 'page' : undefined}>{item.label}</a>)}
        </nav>}
        <div className="mobile-menu-footer"><a href="/contact/" className="btn btn-mobile-cta">Project bespreken<CtaArrow /></a><p className="mobile-location-notice">Sppat — Almere &amp; Nederland</p></div>
      </div>
    </div>
  </header>
}
