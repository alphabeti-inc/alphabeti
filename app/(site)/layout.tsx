import { Footer } from '@/components/footer'
import { TopNavbar } from '@/components/top-navbar'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-main-0">
      <TopNavbar />
      {children}
      <Footer />
    </div>
  )
}
