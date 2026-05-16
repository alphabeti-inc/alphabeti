import Link from 'next/link'

const adminNavItems = [
  { href: '/admin', label: 'Overview', icon: 'bi-grid-1x2' },
  {
    label: 'Content',
    icon: 'bi-folder2-open',
    items: [
      { href: '/admin/content', label: 'All content', icon: 'bi-file-earmark-text' },
      { href: '/admin/about', label: 'About', icon: 'bi-info-circle' },
      { href: '/admin/services', label: 'Services', icon: 'bi-tools' },
      { href: '/admin/projects', label: 'Projects', icon: 'bi-kanban' },
      { href: '/admin/team', label: 'Team', icon: 'bi-people' },
    ],
  },
  { href: '/admin/leads', label: 'Leads', icon: 'bi-inbox' },
  { href: '/admin/health', label: 'Health', icon: 'bi-activity' },
  { href: '/admin/settings', label: 'Settings', icon: 'bi-sliders' },
]

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-main-50 text-main-1000 lg:grid lg:grid-cols-[17rem_1fr]">
      <aside className="border-b border-main-200 bg-main-0 lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-b-0">
        <div className="flex h-full flex-col">
          <div className="border-b border-main-200 px-6 py-5">
            <Link href="/admin" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-600 text-main-0">
                <i className="bi bi-command" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-(--font-mono) text-xs uppercase tracking-[0.32em] text-primary-700">
                  alphabeti
                </span>
                <span className="block text-sm text-main-600">Site admin</span>
              </span>
            </Link>
          </div>

          <nav className="flex gap-2 overflow-x-auto px-4 py-4 lg:flex-col lg:overflow-visible">
            {adminNavItems.map((item) => {
              if (item.items) {
                return (
                  <details key={item.label} className="group shrink-0 lg:w-full" open>
                    <summary className="inline-flex w-full cursor-pointer list-none items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-main-700 transition hover:bg-primary-50 hover:text-primary-800">
                      <i className={`bi ${item.icon}`} aria-hidden="true" />
                      <span>{item.label}</span>

                      <i
                        className="bi bi-chevron-down ml-auto text-xs transition group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>

                    <div className="mt-2 flex gap-2 lg:ml-4 lg:flex-col lg:border-l lg:border-main-200 lg:pl-3">
                      {item.items.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="inline-flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-main-600 transition hover:bg-primary-50 hover:text-primary-800"
                        >
                          <i className={`bi ${child.icon}`} aria-hidden="true" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-main-700 transition hover:bg-primary-50 hover:text-primary-800"
                >
                  <i className={`bi ${item.icon}`} aria-hidden="true" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto hidden border-t border-main-200 p-4 lg:block">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-main-300 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
            >
              <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
              View site
            </Link>
          </div>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-30 border-b border-main-200 bg-main-0/90 backdrop-blur-xl">
          <div className="flex min-h-18 items-center justify-between gap-4 px-6 py-4 lg:px-8">
            <div>
              <p className="text-sm font-semibold text-main-1000">Site management</p>
              <p className="text-xs text-main-500">Content, inquiries, health, and settings</p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-main-0 transition hover:bg-primary-700">
              <i className="bi bi-plus-lg" aria-hidden="true" />
              New update
            </button>
          </div>
        </header>

        {children}
      </div>
    </div>
  )
}