import type { Page } from './content/types'
import './HomeServices.css'

const tilingUrl = '/tegelwerk/'
const specialismsUrl = '/specialisaties/'

function ServiceLink({ href, label = 'Lees meer' }: { href: string; label?: string }) {
  return <a className="text-link" href={href}>{label}<span className="arrow" aria-hidden="true">↗</span></a>
}

/** Uses approved page copy directly; home summaries never become a second copy source. */
export function HomeServiceNavigation({ pages }: { pages: Page[] }) {
  const tiling = pages.find(page => page.url === tilingUrl)!
  const specialisms = pages.find(page => page.url === specialismsUrl)!
  const renovation = pages.find(page => page.url === '/complete-badkamer-renovatie/')!

  return (
    <nav className="home-service-navigation" aria-label="Diensten">
      <a href="#tegelwerk">{tiling.hero.H1}<span aria-hidden="true">↓</span></a>
      <a href="#specialisaties">{specialisms.hero.H1}<span aria-hidden="true">↓</span></a>
      <a href="#werkzaamheden">{renovation.sections[0].H2}<span aria-hidden="true">↓</span></a>
    </nav>
  )
}

function ServiceOverview({ hub, pages, id }: { hub: Page; pages: Page[]; id: string }) {
  return (
    <section id={id} className={`content-section service-overview service-overview--${id}`}>
      <div className="overview-intro">
        {hub.hero.Eyebrow && <p className="eyebrow">{hub.hero.Eyebrow}</p>}
        <h2>{hub.hero.H1}</h2>
        <p>{hub.hero.Body}</p>
      </div>
      <div className="overview-rows">
        {hub.sections[0].cards?.map((card, index) => {
          const service = pages.find(page => page.url === card['CTA URL'])!
          const materialDetails = id === 'specialisaties' ? service.sections[0] : undefined

          return (
            <article className="overview-row" key={service.url}>
              <div className="overview-row-title">
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3><a href={service.url}>{card.Title}</a></h3>
              </div>
              <div className="overview-row-body">
                <p>{service.hero.Body}</p>
                {materialDetails?.Body && <p>{materialDetails.Body}</p>}
                {materialDetails?.bullets && <ul className="service-list">{materialDetails.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
                <ServiceLink href={service.url}/>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function RenovationScope({ page }: { page: Page }) {
  const scope = page.sections[0]
  return (
    <article className="renovation-scope">
      <h3>{page.hero.H1}</h3>
      <p>{scope.Body}</p>
      <ul className="service-list">
        {scope.bullets?.map(item => <li key={item}>{item}</li>)}
      </ul>
      <ServiceLink href={page.url}/>
    </article>
  )
}

export default function HomeServices({ pages }: { pages: Page[] }) {
  const tiling = pages.find(page => page.url === tilingUrl)!
  const specialisms = pages.find(page => page.url === specialismsUrl)!
  const bathroom = pages.find(page => page.url === '/complete-badkamer-renovatie/')!
  const toilet = pages.find(page => page.url === '/complete-toilet-renovatie/')!

  return (
    <>
      <ServiceOverview hub={tiling} pages={pages} id="tegelwerk"/>
      <ServiceOverview hub={specialisms} pages={pages} id="specialisaties"/>
      <section id="werkzaamheden" className="content-section renovation-overview">
        <div className="overview-intro">
          <p className="eyebrow">{bathroom.hero.Eyebrow}</p>
          <h2>{bathroom.sections[0].H2}</h2>
        </div>
        <div className="renovation-columns">
          <RenovationScope page={bathroom}/>
          <RenovationScope page={toilet}/>
        </div>
      </section>
    </>
  )
}
