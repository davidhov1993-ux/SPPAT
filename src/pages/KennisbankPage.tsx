import type { Page } from '../content/types'
import RichText from '../components/RichText'
import { CtaTypeB } from '../components/CtaSection'
import CtaArrow from '../components/CtaArrow'

const HUB_IMAGE = '/references/AEAB080F-23E5-4856-8806-039B4F1FEF85.JPG'

export default function KennisbankPage({ page }: { page: Page }) {
  const isHub = page.url === '/kennisbank/'
  const hero = page.hero

  if (isHub) return <>
    <section className="hero kennisbank-hub-hero" aria-label="Kennisbank introductie"><div className="container"><div className="kennisbank-hub-hero-grid">
      <div className="article-hero-content">{hero.Eyebrow && <p className="eyebrow"><span aria-hidden="true">—</span>{hero.Eyebrow}</p>}<h1>{hero.H1}</h1>{hero.Body && <p className="lead">{hero.Body}</p>}</div>
      <figure className="kennisbank-hub-figure"><img src={HUB_IMAGE} alt="Tegelwerk in uitvoering met groene bouwlaser" className="kennisbank-hub-image" /></figure>
    </div></div></section>
    {page.sections.map((block, index) => { const links = page.links.filter(link => link.placement.toUpperCase().startsWith(block.id || 'NONE')); return <section key={block.id || index} className="content-section kennisbank-hub-section" aria-label={block.H2}><div className="container"><div className="section-grid-editorial"><div className="editorial-header-col"><span className="section-num">{String(index + 1).padStart(2, '0')} /</span>{block.H2 && <h2>{block.H2}</h2>}</div><div className="editorial-body-col">{block.Body && <p><RichText text={block.Body} links={links} /></p>}{block.cards && <div className="kennisbank-link-grid">{block.cards.map((card, i) => <article key={card.Title} className="kennisbank-link-item"><span className="card-order-num">{String(i + 1).padStart(2, '0')}</span><h3><a href={card['CTA URL']}>{card.Title}</a></h3>{card.Body && <p>{card.Body}</p>}<a href={card['CTA URL']} className="text-link">{card.CTA || 'Lees artikel'}<CtaArrow /></a></article>)}</div>}</div></div></div></section>})}
    {page.cta && <CtaTypeB block={page.cta} />}
  </>

  return <>
    <section className="hero article-hero" aria-label="Artikel introductie"><div className="container"><div className="article-hero-content"><p className="eyebrow"><span aria-hidden="true">—</span>Kennisbank &amp; Techniek</p><h1>{hero.H1}</h1>{hero.Body && <p className="lead">{hero.Body}</p>}<a className="text-link" href="/kennisbank/">← Kennisbank</a></div></div></section>
    <section className="kennisbank-reading-section" aria-label="Artikel inhoud"><div className="container"><article className="kennisbank-reading-col kennisbank-reading-col-centered">
      {page.sections.map((block, index) => { const links = page.links.filter(link => link.placement.toUpperCase().startsWith(block.id || 'NONE')); return <section key={block.id || index} className="kennisbank-article-block">{block.H2 && <h2>{block.H2}</h2>}{block.H3 && <h3>{block.H3}</h3>}{block.Body && <p><RichText text={block.Body} links={links} /></p>}{block.bullets && <ul className="spec-list">{block.bullets.map(bullet => <li key={bullet} className="spec-item"><RichText text={bullet} links={links} /></li>)}</ul>}</section>})}
    </article></div></section>
    {page.cta && <CtaTypeB block={page.cta} />}
  </>
}
