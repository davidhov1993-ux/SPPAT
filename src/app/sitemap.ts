import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sppat.nl'
  
  const routes = [
    '',
    '/complete-badkamer-renovatie',
    '/complete-badkamer-renovatie/almere',
    '/tegelwerk',
    '/specialisaties',
    '/projecten',
    '/over-ons',
    '/contact',
    '/kennisbank',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
