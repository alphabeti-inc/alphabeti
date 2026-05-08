import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-main-200/70 bg-main-0/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex flex-col">
          <span className="font-(--font-mono) text-xs uppercase tracking-[0.35em] text-primary-700">
            alphabeti
          </span>
          <span className="text-sm text-main-600">Software development company</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-main-700 transition hover:bg-primary-50 hover:text-primary-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-main-0 transition hover:bg-primary-700"
        >
          Start a project
        </Link>
      </div>
    </header>
  )
}
