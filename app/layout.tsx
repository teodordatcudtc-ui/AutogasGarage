import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingAppointmentButton from '@/components/FloatingAppointmentButton'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://autogas-service.ro'),
  title: {
    default: 'Autogas Service - Service Roți Profesional Ploiești | Geometrie 3D',
    template: '%s | Autogas Service',
  },
  description: 'Service roți profesional în Ploiești. Îndreptat jante, geometrie roți computerizată 3D, revizii complete, mecanică rapidă, diagnoză computerizată. Peste 10 ani experiență.',
  keywords: ['service roți profesional', 'geometrie 3D', 'îndreptat jante', 'revizii complete', 'mecanică rapidă', 'diagnoză computerizată', 'Ploiești', 'service auto'],
  authors: [{ name: 'Autogas Service' }],
  creator: 'Autogas Service',
  publisher: 'Autogas Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://autogas-service.ro',
    siteName: 'Autogas Service',
    title: 'Autogas Service - Service Roți Profesional Ploiești',
    description: 'Service roți profesional în Ploiești. Geometrie 3D, îndreptat jante, revizii complete.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Autogas Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autogas Service - Service Roți Profesional Ploiești',
    description: 'Service roți profesional în Ploiești. Geometrie 3D, îndreptat jante, revizii complete.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Adaugă Google Search Console verification code aici când îl obții
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="canonical" href="https://autogas-service.ro" />
        <link rel="alternate" hrefLang="ro" href="https://autogas-service.ro" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'Autogas Service',
              image: 'https://autogas-service.ro/og-image.jpg',
              '@id': 'https://autogas-service.ro',
              url: 'https://autogas-service.ro',
              telephone: '+40727517896',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Strada Gheorghe Grigore Cantacuzino 348',
                addressLocality: 'Ploiești',
                postalCode: '100301',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.9389779,
                longitude: 25.9815096,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/servicegas/',
              ],
              areaServed: {
                '@type': 'City',
                name: 'Ploiești',
              },
            }),
          }}
        />
      </head>
      <body className="bg-navy-dark text-text-light antialiased overflow-x-hidden">
        <TopBar />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingAppointmentButton />
      </body>
    </html>
  )
}

