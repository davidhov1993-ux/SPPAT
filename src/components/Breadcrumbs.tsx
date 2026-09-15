import { breadcrumbPath } from '../data/navigation'
import './Breadcrumbs.css'

export default function Breadcrumbs({ currentPath }: { currentPath: string; title?: string }) {
  const items = breadcrumbPath(currentPath)
  if (!items.length) return null
  const parent = items[items.length - 2]
  return <nav className="breadcrumbs" aria-label="Kruimelpad">
    <div className="breadcrumbs-mobile"><a href={parent.href} className="breadcrumbs-back"><span aria-hidden="true">←</span> {parent.label}</a></div>
    <ol className="breadcrumbs-list breadcrumbs-desktop">
      {items.map((item, i) => <li key={`${item.href}-${i}`} className="breadcrumbs-item">
        {i > 0 && <span className="breadcrumbs-separator" aria-hidden="true">/</span>}
        {i === items.length - 1 ? <span aria-current="page">{item.label}</span> : <a href={item.href}>{item.label}</a>}
      </li>)}
    </ol>
  </nav>
}
