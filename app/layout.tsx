import type { Metadata } from 'next'
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import { Footer } from '@/components/footer'
import { TopNavbar } from '@/components/top-navbar'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'alphabeti | Software Development Company',
  description:
    'Alphabeti is a software development company that designs, builds, and scales modern web platforms, internal tools, and custom digital products.',
  icons: {
    icon: '/alpha.png',
    shortcut: '/alpha.png',
    apple: '/alpha.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-main-0 font-(--font-display) text-main-1000 antialiased">
        <div className="min-h-screen bg-main-0">
          <TopNavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
