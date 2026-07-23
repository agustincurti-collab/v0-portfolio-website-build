import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Agustin Curti | Diseño y Desarrollo Web',
  description: 'Diseño y desarrollo sitios web y e-commerce de alto nivel para marcas que quieren crecer.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} font-sans antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
