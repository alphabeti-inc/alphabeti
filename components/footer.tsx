import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-main-200 bg-main-50/80">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="max-w-xl">
          <p className="font-[family:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-primary-700">
            alphabeti
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-main-1000">
            Software development for companies that need solid execution.
          </h2>
          <p className="mt-3 text-sm leading-7 text-main-600">
            We design and build custom software, modern web platforms, and internal systems with strong engineering standards and clear delivery.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-[family:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-main-500">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-main-700 transition hover:text-primary-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-(--font-mono) text-xs uppercase tracking-[0.3em] text-main-500">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-main-700">
              <a href="mailto:hello@alphabeti.co.tz" className="transition hover:text-primary-700">
                hello@alphabeti.co.tz
              </a>
              <p>Dar es Salaam, Tanzania</p>
              <p>Strategy, product engineering, delivery</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
