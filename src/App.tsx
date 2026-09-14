import { useEffect } from 'react'
import pageData from './content/pages.json'
import projectsData from './content/projects.json'
import type { Page } from './content/types'
import Header from './components/Header'
import Footer from './components/Footer'
import CtaArrow from './components/CtaArrow'
import HomePage from './pages/HomePage'
import CommercialPage from './pages/CommercialPage'
import BadkamerRenovatiePage from './pages/BadkamerRenovatiePage'
import BadkamerRenovatieAlmerePage from './pages/BadkamerRenovatieAlmerePage'
import TegelwerkHubPage from './pages/TegelwerkHubPage'
import TegelwerkServicePage from './pages/TegelwerkServicePage'
import SpecialisatiesHubPage from './pages/SpecialisatiesHubPage'
import SpecialisatiesNestedPage from './pages/SpecialisatiesNestedPage'
import ToiletRenovatiePage from './pages/ToiletRenovatiePage'
import KennisbankPage from './pages/KennisbankPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

const SITE_URL = "https://sppat.nl"
const pages = pageData as Page[]
const projectCases = projectsData

function renderPage(page: Page) {
  if (page.url === '/') {
    return <HomePage page={page} />
  }
  if (page.url === '/complete-badkamer-renovatie/') {
    return <BadkamerRenovatiePage page={page} />
  }
  if (page.url === '/complete-badkamer-renovatie/almere/') {
    return <BadkamerRenovatieAlmerePage page={page} />
  }
  if (page.url === '/complete-toilet-renovatie/') {
    return <ToiletRenovatiePage page={page} />
  }
  if (page.url.startsWith('/complete-badkamer-renovatie')) {
    return <CommercialPage page={page} />
  }
  if (page.url === '/tegelwerk/') {
    return <TegelwerkHubPage page={page} />
  }
  if (page.url.startsWith('/tegelwerk/')) {
    return <TegelwerkServicePage page={page} />
  }
  if (page.url === '/specialisaties/') {
    return <SpecialisatiesHubPage page={page} />
  }
  if (page.url.startsWith('/specialisaties/')) {
    return <SpecialisatiesNestedPage page={page} />
  }
  if (page.url.startsWith('/kennisbank/')) {
    return <KennisbankPage page={page} />
  }
  if (page.url === '/projecten/') {
    return <ProjectsPage page={page} projectCases={projectCases} />
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
  path = typeof window !== 'undefined' ? window.location.pathname : '/'
}: {
  path?: string
}) {
  const normalized = path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`
  
  // Check if it's a project case
  const projectCase = projectCases.find(p => `/projecten/${p.slug}/` === normalized)
  
  const page = pages.find(item => item.url === normalized)
  
  useEffect(() => {
    if (projectCase) {
      document.title = `${projectCase.title} | Sppat`
      document.querySelector('meta[name="description"]')?.setAttribute('content', projectCase.meta)
    } else if (page) {
      document.title = page.title
      document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    } else {
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

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    const absoluteUrl = SITE_URL + normalized
    canonical.setAttribute('href', absoluteUrl)
  }, [page, projectCase, normalized])

  return (
    <div className="site-wrapper">
      <Header path={normalized} />
      <main id="main" className="site-main">
        {projectCase ? (
          <ProjectDetailPage project={projectCase} />
        ) : page ? (
          renderPage(page)
        ) : (
          <section className="not-found-section container">
            <span className="eyebrow">404</span>
            <h1>404 — Pagina niet gevonden</h1>
            <p>De opgevraagde pagina bestaat niet of is verplaatst.</p>
            <a href="/" className="btn">
              Naar homepagina
              <CtaArrow />
            </a>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
