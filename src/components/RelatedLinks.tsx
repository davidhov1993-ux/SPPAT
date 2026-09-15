import { navLabel } from '../data/navigation'
export default function RelatedLinks({ urls = [] }: { urls?: string[] }) {
  if (!urls.length) return null
  return <nav className="container related-services" aria-label="Gerelateerde informatie"><ul>{urls.map(url => <li key={url}><a href={url} className="inline-link">{navLabel(url)}</a></li>)}</ul></nav>
}
