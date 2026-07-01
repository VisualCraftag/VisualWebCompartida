import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  // 🔴 ESTO ES LO QUE LE DICE A GOOGLE CUÁL ES TU DOMINIO REAL
  metadataBase: new URL('https://www.visualcraftagency.com'),

  title: 'VisualCraft | Soluciones Digitales para Restaurantes',
  description:
    'Transformamos tu restaurante en digital. Sitios web, menus digitales con QR y sistemas de reservas. Especialistas en gastronomia digital en Argentina.',
  keywords: [
    'restaurantes',
    'menu digital',
    'pagina web restaurante',
    'reservas online',
    'gastronomia digital',
    'Argentina',
    'VisualCraft',
    'Visual Craft',
    'VisualCraft Argentina',
  ],

  // 🔴 DEFINE LA URL CANÓNICA GLOBAL (soluciona el error de duplicada)
  alternates: {
    canonical: 'https://www.visualcraftagency.com/',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VisualCraft",
    url: "https://www.visualcraftagency.com/",
    logo: "https://www.visualcraftagency.com/images/logo.png",
    sameAs: [
      "https://www.instagram.com/visualcraftag/",
      "linktr.ee/VisualCraft_Agency",
    ]
  }

  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">

        {/* ✅ JSON-LD Organization (marca) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
