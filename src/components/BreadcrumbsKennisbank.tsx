export default function BreadcrumbsKennisbank({ title }: { title: string }) {
  return (
    <nav className="breadcrumbs-kb" aria-label="Breadcrumb">
      <div className="breadcrumbs-mobile">
        <a href="/kennisbank/" className="breadcrumbs-back">
          <span aria-hidden="true">←</span> KENNISBANK
        </a>
      </div>
      <ol className="breadcrumbs-list breadcrumbs-desktop">
        <li className="breadcrumbs-item"><a href="/">HOME</a></li>
        <li className="breadcrumbs-separator">/</li>
        <li className="breadcrumbs-item"><a href="/kennisbank/">KENNISBANK</a></li>
        <li className="breadcrumbs-separator">/</li>
        <li className="breadcrumbs-item breadcrumbs-current" aria-current="page">{title.toUpperCase()}</li>
      </ol>
    </nav>
  )
}
