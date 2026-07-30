import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
})

// ⚠️ Cuando compres el dominio, reemplazá esta constante y se propaga a todo el SEO
const SITE_URL = 'https://agustincurti.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Agustin Curti | Diseño y Desarrollo Web · Freelance',
    template: '%s | Agustin Curti',
  },
  description:
    'Diseño y desarrollo sitios web y e-commerce de alto nivel para marcas que quieren crecer. Freelance en San Nicolás, trabajando con clientes de todo el mundo.',
  keywords: [
    'diseño web', 'desarrollo web', 'diseñador web', 'desarrollador web',
    'páginas web', 'e-commerce', 'tiendas online', 'freelance',
    'San Nicolás', 'Argentina', 'Next.js', 'React', 'Agustin Curti',
  ],
  authors: [{ name: 'Agustin Curti' }],
  creator: 'Agustin Curti',
  generator: 'Next.js',
  applicationName: 'Agustin Curti · Portfolio',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'Agustin Curti',
    title: 'Agustin Curti | Diseño y Desarrollo Web',
    description:
      'Diseño y desarrollo sitios web y e-commerce de alto nivel para marcas que quieren crecer.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agustin Curti · Diseño y Desarrollo Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agustin Curti | Diseño y Desarrollo Web',
    description:
      'Diseño y desarrollo sitios web y e-commerce de alto nivel para marcas que quieren crecer.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Agustin Curti · Diseño y Desarrollo Web',
  description:
    'Diseño y desarrollo de sitios web y e-commerce para marcas que quieren crecer.',
  url: SITE_URL,
  image: SITE_URL + '/og-image.png',
  areaServed: [
    { '@type': 'City', name: 'San Nicolás de los Arroyos' },
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Nicolás de los Arroyos',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  founder: { '@type': 'Person', name: 'Agustin Curti' },
  knowsAbout: ['Diseño Web', 'Desarrollo Web', 'E-commerce', 'Next.js', 'React', 'UI/UX'],
  sameAs: ['https://instagram.com/agustinncurti'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sora.variable} font-sans antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
