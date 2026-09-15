import pages from '../content/pages.json'
import projects from '../content/projects.json'

export type NavItem = { label: string; href: string; parent?: string; children?: NavItem[]; subordinate?: boolean; actionLabel?: string }
const groups: NavItem[] = [
  { label: 'Badkamers', href: '/complete-badkamer-renovatie/', actionLabel: 'Bekijk badkamers', children: [
    { label: 'Complete badkamer renovatie', href: '/complete-badkamer-renovatie/' },
    { label: 'Complete toilet renovatie', href: '/complete-toilet-renovatie/' },
    { label: 'Badkamer renovatie Almere', href: '/complete-badkamer-renovatie/almere/', parent: '/complete-badkamer-renovatie/', subordinate: true }
  ] },
  { label: 'Tegelwerk', href: '/tegelwerk/', actionLabel: 'Alle tegelwerk diensten', children: [
    { label: 'Vloertegels leggen', href: '/tegelwerk/vloer-tegelen/' },
    { label: 'Wandtegels zetten', href: '/tegelwerk/wand-tegelen/' },
    { label: 'Badkamer tegelen', href: '/tegelwerk/badkamer-tegelen/' },
    { label: 'Inloopdouche tegelen', href: '/tegelwerk/inloopdouche-tegelen/' },
    { label: 'Keuken tegelen', href: '/tegelwerk/keuken-tegelen/' },
    { label: 'Balkon tegelen', href: '/tegelwerk/balkon-tegelen/' },
    { label: 'Vloerverwarming & tegelen', href: '/tegelwerk/vloerverwarming-en-tegelen/' }
  ] },
  { label: 'Specialisaties', href: '/specialisaties/', actionLabel: 'Alle specialisaties', children: [
    { label: 'Grootformaat tegels', href: '/specialisaties/grootformaat-tegels/' },
    { label: 'Mozaïek zetten', href: '/specialisaties/mozaiek-zetten/' },
    { label: 'Natuursteen', href: '/specialisaties/natuursteen/' },
    { label: 'Keramisch parket', href: '/specialisaties/keramisch-parket/' }
  ] }
]
const information: NavItem[] = [
  { label: 'Projecten', href: '/projecten/' }, { label: 'Over ons', href: '/over-ons/' },
  { label: 'Kennisbank', href: '/kennisbank/' }, { label: 'Contact', href: '/contact/' }
]
export const mainNav = [...groups, ...information.filter(n => n.href !== '/kennisbank/')]
export const footerLinks = { badkamers: groups[0].children!.filter(n => !n.subordinate), tegelwerk: groups[1].children!, specialisaties: groups[2].children!, informatie: information }
export const routeNavigation: NavItem[] = [
  { label: 'Home', href: '/' }, ...groups, ...groups.flatMap(g => g.children!.map(c => ({ ...c, parent: c.parent || g.href }))), ...information,
  ...pages.filter(p => p.url.startsWith('/kennisbank/') && p.url !== '/kennisbank/').map(p => ({ label: p.hero.H1, href: p.url, parent: '/kennisbank/' })),
  ...projects.map(p => ({ label: p.title, href: `/projecten/${p.slug}/`, parent: '/projecten/' }))
]
export const navLabel = (href: string) => routeNavigation.find(n => n.href === href)?.label || pages.find(p => p.url === href)?.hero.H1 || href
export const isNavActive = (item: NavItem, path: string): boolean => item.href === path || Boolean(item.children?.some(c => path === c.href || (c.href !== '/' && path.startsWith(c.href)))) || (item.href !== '/' && path.startsWith(item.href))
export function breadcrumbPath(path: string): NavItem[] {
  const current = routeNavigation.find(n => n.href === path)
  if (!current || path === '/') return []
  const group = groups.find(g => g.children?.some(c => c.href === path))
  if (group) {
    const child = group.children!.find(c => c.href === path)!
    const between = child.subordinate ? [group.children![0]] : []
    return [{ label: 'Home', href: '/' }, group, ...between, child]
  }
  return [{ label: 'Home', href: '/' }, ...(current.parent ? [routeNavigation.find(n => n.href === current.parent)!] : []), current]
}
