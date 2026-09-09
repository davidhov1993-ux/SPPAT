import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import pageData from './content/pages.json'
import business from './content/business-input.json'
import type { Block, Link, Page, Project } from './content/types'
import './App.css'
import ContactForm from './ContactForm'
import HomeServices, { HomeServiceNavigation } from './HomeServices'

const pages = pageData as Page[]
const navigation = [['Badkamers', '/complete-badkamer-renovatie/'], ['Tegelwerk', '/tegelwerk/'], ['Projecten', '/projecten/'], ['Over ons', '/over-ons/'], ['Contact', '/contact/']]
const footer = [
  ['Diensten', ['Complete badkamer renovatie', '/complete-badkamer-renovatie/'], ['Toilet renovatie', '/complete-toilet-renovatie/'], ['Vloertegels leggen', '/tegelwerk/vloer-tegelen/'], ['Wandtegels zetten', '/tegelwerk/wand-tegelen/']],
  ['Specialisaties', ['Grootformaat tegels', '/specialisaties/grootformaat-tegels/'], ['Mozaïek zetten', '/specialisaties/mozaiek-zetten/'], ['Natuursteen', '/specialisaties/natuursteen/'], ['Keramisch parket', '/specialisaties/keramisch-parket/']],
  ['Informatie', ['Projecten', '/projecten/'], ['Over ons', '/over-ons/'], ['Kennisbank', '/kennisbank/'], ['Contact', '/contact/']],
] as const
const reference = '/references/ref_1.jpeg'
const detailReference = '/references/WhatsApp Image 2025-05-30 at 21.24.08.jpeg'
const serviceReferences: Record<string, string> = {
  '/complete-badkamer-renovatie/': detailReference,
  '/complete-toilet-renovatie/': '/references/WhatsApp Image 2025-05-30 at 21.24.01 (5).jpeg',
  '/tegelwerk/': '/references/WhatsApp Image 2025-05-30 at 21.24.04 (2).jpeg',
}
function Arrow() { return <span aria-hidden="true" className="arrow">↗</span> }
function Button({href, children, subtle = false}: {href: string; children: ReactNode; subtle?: boolean}) {
  return <a className={subtle ? 'text-link' : 'button'} href={href}>{children}<Arrow /></a>
}
function RichText({text, links}: {text: string; links: Link[]}) {
  let parts: ReactNode[] = [text]
  for (const link of links) {
    const anchor = link.anchor
    parts = parts.flatMap<ReactNode>((part, i) => {
      if (typeof part !== 'string' || !part.includes(anchor)) return [part]
      const index = part.indexOf(anchor)
      return [part.slice(0, index), <a key={`${link.url}-${i}`} href={link.url}>{anchor}</a>, part.slice(index + anchor.length)]
    })
  }
  return <>{parts}</>
}
function Header({path}: {path: string}) {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="Sppat">Sppat<span aria-hidden="true">.</span></a>
    <button ref={toggle} className={`menu-toggle ${open ? 'is-open' : ''}`} aria-expanded={open} aria-controls="navigation" aria-label="Menu" onClick={() => setOpen(!open)}><span/><span/></button>
    <nav id="navigation" aria-label="Sppat" className={open ? 'open' : ''}>
      {navigation.map(([label, href]) => <a key={href} href={href} aria-current={path === href ? 'page' : undefined}>{label}</a>)}
      <Button href="/contact/">Project bespreken</Button>
    </nav>
  </header>
}
function Hero({page}: {page: Page}) {
  const home = page.url === '/'
  const serviceReference = serviceReferences[page.url]
  const article = page.url.startsWith('/kennisbank/') && page.url !== '/kennisbank/'
  return <section className={`hero ${home ? 'home-hero' : 'page-hero'} ${article ? 'article-hero' : ''} ${serviceReference ? 'has-media' : ''}`}>
    {home && <><img className="hero-image" src={reference} alt={page.hero.ALT} fetchPriority="high"/><div className="hero-shade"/></>}
    <div className="hero-content">
      {page.hero.Eyebrow && <p className="eyebrow"><span/>{page.hero.Eyebrow}</p>}
      {home && <div className="hero-brand" aria-hidden="true">Sppat<span>.</span></div>}
      <h1>{page.hero.H1}</h1>
      {page.hero.Body && <p className="hero-body">{page.hero.Body}</p>}
      {page.hero['Primary CTA URL'] && <Button href={page.hero['Primary CTA URL']}>{page.hero['Primary CTA']}</Button>}
    </div>
    {home && <span className="reference-caption">referentiebeelden</span>}
    {serviceReference && <figure className="service-hero-photo"><img src={serviceReference} alt={page.hero.ALT} fetchPriority="high"/><figcaption>referentiebeelden</figcaption></figure>}
    {!home && !serviceReference && <span className="hero-mark" aria-hidden="true">S.</span>}
  </section>
}
function ProjectGrid({block}: {block: Block}) {
  const [filter, setFilter] = useState('Alle')
  const projects: Project[] = business.projects
  const visible = projects.filter(project => filter === 'Alle' || project.category === filter)
  return <section className="content-section project-section">
    <h2>{block.H2}</h2>
    <div className="filters" role="group" aria-label={block.H2}>{block.Filters?.split(' | ').map(value => <button key={value} aria-pressed={value === filter} onClick={() => setFilter(value)}>{value}</button>)}</div>
    <div className="project-grid" aria-live="polite">{visible.map(project => <figure key={project.title}><img src={project.image} alt={project.alt} loading="lazy"/><figcaption><h3>{project.title}</h3><p>{project.location}</p><p>{project.services.join(' · ')}</p></figcaption></figure>)}</div>
  </section>
}
function ContentSection({block, page, index}: {block: Block; page: Page; index: number}) {
  if (block.Type === 'Dynamic Grid') return <ProjectGrid block={block}/>
  const links = page.links.filter(link => link.placement.toUpperCase().startsWith(block.id || 'NONE'))
  const homeDetail = page.url === '/' && index === 1
  const pricing = block.H2?.includes('Marktindicaties 2026')
  const CardHeading = block.H2 ? 'h3' : 'h2'
  const direct = page.url === '/contact/' && index === 1
  return <section className={`content-section ${block.cards ? 'card-section' : 'editorial-section'} ${homeDetail ? 'detail-section' : ''} ${pricing ? 'pricing-section' : ''} ${block.Type === 'Form' ? 'form-section' : ''}`}>
    {homeDetail && <figure className="detail-photo"><img src={detailReference} alt={block.ALT} loading="lazy"/><figcaption>referentiebeelden</figcaption></figure>}
    <div className="section-heading"><span className="section-number" aria-hidden="true">{String(index + 1).padStart(2,'0')} /</span>{block.H2 && <h2>{block.H2}</h2>}{block.H3 && <h3>{block.H3}</h3>}</div>
    <div className="section-body">
      {block.Body && <p><RichText text={block.Body} links={links}/></p>}
      {links.filter(link => ![block.Body || '', ...(block.bullets || [])].join(' ').includes(link.anchor)).map(link => <p key={link.url}><a href={link.url}>{link.anchor}</a></p>)}
      {direct && <>{business.phone && <p>Telefoon: <a href={`tel:${business.phone}`}>{business.phone}</a></p>}{business.email && <p>E-mail: <a href={`mailto:${business.email}`}>{business.email}</a></p>}{business.kvk && <p>KVK: {business.kvk}</p>}</>}
      {block.bullets && <ul className="service-list">{block.bullets.map(item => <li key={item}><RichText text={item} links={links}/></li>)}</ul>}
      {block['CTA URL'] && <Button href={block['CTA URL']} subtle>{block.CTA}</Button>}
      {block.Type === 'Form' && <ContactForm/>}
    </div>
    {block.cards && <div className="cards">{block.cards.map((card, i) => <article key={card.Title} className="service-card"><span className="card-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><CardHeading><a href={card['CTA URL']}>{card.Title}</a></CardHeading>{card.Body && <p>{card.Body}</p>}{card.CTA ? <Button href={card['CTA URL']} subtle>{card.CTA}</Button> : <a className="text-link article-arrow" href={card['CTA URL']} aria-label={card.Title}><Arrow/></a>}</article>)}</div>}
  </section>
}
function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><a className="wordmark" href="/">Sppat<span>.</span></a>{business.address && <p>{business.address}</p>}{business.phone && <a href={`tel:${business.phone}`}>{business.phone}</a>}{business.email && <a href={`mailto:${business.email}`}>{business.email}</a>}{business.kvk && <p>KVK: {business.kvk}</p>}{business.btw && <p>BTW: {business.btw}</p>}</div>{footer.map(([title,...items]) => <div className="footer-column" key={title}><h2>{title}</h2>{items.map(([label,href]) => <a href={href} key={href}>{label}</a>)}</div>)}</div><div className="footer-bottom"><span>Sppat — Almere & Nederland</span><a href="/complete-badkamer-renovatie/almere/">Badkamer Renovatie in Almere<Arrow/></a></div></footer>
}
export default function App({path = typeof window !== 'undefined' ? window.location.pathname : '/'}: {path?: string}) {
  const normalized = path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`
  const page = pages.find(item => item.url === normalized)
  useEffect(() => {
    if (!page) {
      document.title = '404 | Sppat'
      document.querySelector('meta[name="description"]')?.setAttribute('content', '')
      const robots = document.querySelector('meta[name="robots"]') || document.createElement('meta')
      robots.setAttribute('name', 'robots')
      robots.setAttribute('content', 'noindex')
      if (!robots.parentNode) document.head.appendChild(robots)
      return
    }
    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.add('in-view'); observer.unobserve(entry.target)}}), {threshold: .08})
    document.querySelectorAll('.content-section, .final-cta').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [page])
  return <><Header path={normalized}/><main id="main">{page ? <><Hero page={page}/>{page.url === '/' && <HomeServiceNavigation pages={pages}/>}{page.sections.map((block,index) => <ContentSection block={block} page={page} index={index} key={block.id}/>)}{page.url === '/' && <HomeServices pages={pages}/>} {page.faq.length > 0 && <section className="faq content-section">{page.faq.map(({question,answer}) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</section>}{page.cta && <section className="final-cta"><span className="eyebrow">Sppat</span><h2>{page.cta.H2}</h2>{page.cta.Body && <p>{page.cta.Body}</p>}<Button href={page.cta.URL!}>{page.cta.Button}</Button><span className="cta-mark" aria-hidden="true">S.</span></section>}</> : <section className="not-found"><h1>404</h1><Button href="/">Sppat</Button></section>}</main><Footer/></>
}
