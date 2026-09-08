import type { MetadataRoute } from 'next'

const SITE_URL = 'https://agustincurti.com.ar'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Las propuestas son privadas / para un cliente puntual: no se indexan
      disallow: ['/propuestas', '/propuesta'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
