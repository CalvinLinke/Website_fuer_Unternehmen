import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

const ROUTES: Array<{ path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }> = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/leistungen', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/prozess', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/referenzen', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/kontakt', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
