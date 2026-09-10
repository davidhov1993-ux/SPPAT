import { useEffect, useState } from 'react'
import pageData from './content/pages.json'
import type { Page } from './content/types'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CommercialPage from './pages/CommercialPage'
import BadkamerRenovatiePage from './pages/BadkamerRenovatiePage'
import TegelwerkPage from './pages/TegelwerkPage'
import SpecialisatiesPage from './pages/SpecialisatiesPage'
import KennisbankPage from './pages/KennisbankPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

const pages = pageData as Page[]

function renderPage(page: Page) {
  if (page.url === '/') {
    return <HomePage page={page} />
  }
  if (page.url === '/complete-badkamer-renovatie/') {
    return <BadkamerRenovatiePage page={page} />
  }
  if (
    page.url.startsWith('/complete-badkamer-renovatie') ||
    page.url === '/complete-toilet-renovatie/'
  ) {
    return <CommercialPage page={page} />
  }
  if (page.url.startsWith('/tegelwerk/')) {
    return <TegelwerkPage page={page} />
  }
  if (page.url.startsWith('/specialisaties/')) {
    return <SpecialisatiesPage page={page} />
  }
  if (page.url.startsWith('/kennisbank/')) {
    return <KennisbankPage page={page} />
  }
  if (page.url === '/projecten/') {
    return <ProjectsPage page={page} />
  }
  if (page.url === '/over-ons/') {
    return <AboutPage page={page} />
  }
  if (page.url === '/contact/') {
    return <ContactPage page={page} />
  }
  return null
}

export default function App({
  path: initialPath = typeof window !== 'undefined' ? window.location.pathname : '/'
}: {
  path?: string
}) {
  const [prevInitialPath, setPrevInitialPath] = useState(initialPath)
  const [currentPath, setCurrentPath] = useState(initialPath)

  if (initialPath !== prevInitialPath) {
    setPrevInitialPath(initialPath)
    setCurrentPath(initialPath)
  }

  const normalized = currentPath === '/' ? '/' : `${currentPath.replace(/\/+$/, '')}/`
  const page = pages.find(item => item.url === normalized)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    const handleClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return

      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      if (e.defaultPrevented || target.target === '_blank') return

      const href = target.getAttribute('href')
      if (!href) return

      // In-page hash jumps
      if (href.startsWith('#')) return

      // External links or protocols
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return
      }

      // Internal same-origin route
      if (href.startsWith('/')) {
        const [targetPath, hash] = href.split('#')
        const currentNorm = window.location.pathname === '/' ? '/' : `${window.location.pathname.replace(/\/+$/, '')}/`
        const targetNorm = targetPath === '/' ? '/' : `${targetPath.replace(/\/+$/, '')}/`

        e.preventDefault()

        if (targetNorm !== currentNorm) {
          window.history.pushState(null, '', href)
          setCurrentPath(targetNorm)
          if (!hash) {
            window.scrollTo(0, 0)
          } else {
            const el = document.getElementById(hash)
            if (el) el.scrollIntoView()
          }
        } else if (hash) {
          window.location.hash = hash
          const el = document.getElementById(hash)
          if (el) el.scrollIntoView()
        }
      }
    }

    window.addEventListener('click', handleClick)
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  useEffect(() => {
    if (!page) {
      document.title = '404 | Sppat'
      document.querySelector('meta[name="description"]')?.setAttribute('content', '')
      let robots = document.querySelector('meta[name="robots"]')
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex')
      return
    }

    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', page.url)
  }, [page])

  return (
    <div className="site-wrapper">
      <Header path={normalized} />
      <main id="main" className="site-main">
        {page ? (
          renderPage(page)
        ) : (
          <section className="not-found-section container">
            <span className="eyebrow">404</span>
            <h1>404 — Pagina niet gevonden</h1>
            <p>De opgevraagde pagina bestaat niet of is verplaatst.</p>
            <a href="/" className="btn">
              Naar homepagina
              <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
