const articles = [
  {
    title: 'Waterdichting & Kimband',
    url: '/kennisbank/waterdichting-badkamer-kimband/'
  },
  {
    title: 'Tegel Lippage Voorkomen',
    url: '/kennisbank/tegel-lippage-voorkomen/'
  },
  {
    title: 'Onzichtbaar Inspectieluik',
    url: '/kennisbank/onzichtbaar-luik-badkamer/'
  },
  {
    title: 'Epoxyvoeg vs. Cementvoeg',
    url: '/kennisbank/epoxyvoeg-vs-cementvoeg/'
  }
]

export default function KennisbankNav({ currentUrl }: { currentUrl: string }) {
  return (
    <nav className="kennisbank-nav" aria-label="Kennisbank artikelen">
      <div className="kennisbank-nav-header">
        <span className="eyebrow">Dossiers</span>
        <h3 className="kennisbank-nav-title">Kennisbank Artikelen</h3>
      </div>
      <ul className="kennisbank-nav-list">
        {articles.map(article => {
          const isActive = currentUrl === article.url
          return (
            <li key={article.url} className="kennisbank-nav-item">
              <a
                href={article.url}
                className={`kennisbank-nav-link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="kennisbank-link-title">{article.title}</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
