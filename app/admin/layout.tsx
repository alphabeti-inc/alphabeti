'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Avatar from '@/components/Avatar'

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

const notifications = [
  {
    title: 'New lead received',
    message: 'A visitor submitted a contact request.',
    time: '2 min ago',
    icon: 'bi-inbox',
  },
  {
    title: 'Content updated',
    message: 'The services page was recently changed.',
    time: '18 min ago',
    icon: 'bi-pencil-square',
  },
  {
    title: 'System healthy',
    message: 'No issues detected in the latest check.',
    time: '1 hr ago',
    icon: 'bi-activity',
  },
]

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-main-50 text-main-1000 lg:grid lg:grid-cols-[17rem_1fr]">
      <aside className="border-b border-main-200 bg-main-0 lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-b-0">
        <div className="flex h-full flex-col">
          <div className="border-b border-main-200 px-6 py-5">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-main-200 bg-main-0">
                <Image
                  src="/logo.png"
                  alt="Alphabeti logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>

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
                const isGroupActive = item.items.some((child) => pathname === child.href)

                return (
                  <details key={item.label} className="group shrink-0 lg:w-full" open={isGroupActive}>
                    <summary
                      className={`inline-flex w-full cursor-pointer list-none items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isGroupActive
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-main-700 hover:bg-primary-50 hover:text-primary-800'
                        }`}
                    >
                      <i className={`bi ${item.icon}`} aria-hidden="true" />
                      <span>{item.label}</span>
                      <i
                        className="bi bi-chevron-down ml-auto text-xs transition group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>

                    <div className="mt-2 flex gap-2 lg:ml-4 lg:flex-col lg:border-l lg:border-main-200 lg:pl-3">
                      {item.items.map((child) => {
                        const isActive = pathname === child.href

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`inline-flex shrink-0 items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${isActive
                              ? 'bg-primary-600 text-main-0'
                              : 'text-main-600 hover:bg-primary-50 hover:text-primary-800'
                              }`}
                          >
                            <i className={`bi ${child.icon}`} aria-hidden="true" />
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  </details>
                )
              }

              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                    ? 'bg-primary-600 text-main-0'
                    : 'text-main-700 hover:bg-primary-50 hover:text-primary-800'
                    }`}
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

            <div className="flex items-center gap-3">
              <div className="relative group">
                <button
                  type="button"
                  className="relative grid h-10 w-10 place-items-center rounded-full border border-main-200 bg-main-0 text-main-700 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
                >
                  <i className="bi bi-bell" aria-hidden="true" />
                  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-danger ring-2 ring-main-0" />
                </button>

                <div className="invisible absolute right-0 top-full z-50 mt-2 w-80 translate-y-1 rounded-2xl border border-main-200 bg-main-0 p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between border-b border-main-200 px-3 py-3">
                    <p className="text-sm font-semibold text-main-1000">Notifications</p>
                    <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-800">
                      {notifications.length} new
                    </span>
                  </div>

                  <div className="py-2">
                    {notifications.map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        className="flex w-full gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-primary-50"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-800">
                          <i className={`bi ${item.icon}`} aria-hidden="true" />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-main-900">
                            {item.title}
                          </span>
                          <span className="block truncate text-xs text-main-500">
                            {item.message}
                          </span>
                          <span className="mt-1 block text-xs text-main-400">
                            {item.time}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>

                  <Link
                    href="/admin/notifications"
                    className="flex items-center justify-center rounded-xl border-t border-main-200 px-3 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-50 hover:text-primary-900"
                  >
                    View all notifications
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-3 transition"
                >
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/153155657?s=400&u=29b4aa0f3bee78bfa46c612a844cdd8de8e1ecef&v=4"
                    alt="Issah Abdul"
                    initials="IA"
                    size={44}
                    status="online"
                  />

                  <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-40 group-hover:opacity-100">
                    <span className="block whitespace-nowrap text-left text-sm font-semibold text-main-900">
                      Issah Abdul
                    </span>

                    <span className="block whitespace-nowrap text-left text-xs text-main-500">
                      Admin
                    </span>
                  </span>

                  <i
                    className="
                      max-w-0 overflow-hidden opacity-0
                      bi bi-chevron-down
                      text-xs text-main-500
                      transition-all duration-300
                      group-hover:max-w-4
                      group-hover:rotate-180
                      group-hover:opacity-100
                    "
                    aria-hidden="true"
                  />
                </button>

                <div className="invisible absolute right-0 top-full z-50 mt-2 w-56 translate-y-1 rounded-2xl border border-main-200 bg-main-0 p-2 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="border-b border-main-200 px-3 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src="https://avatars.githubusercontent.com/u/153155657?s=400&u=29b4aa0f3bee78bfa46c612a844cdd8de8e1ecef&v=4"
                        alt="Issah Abdul"
                        initials="IA"
                        size={42}
                        status="online"
                      />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-main-1000">
                          Issah Abdul
                        </p>

                        <p className="truncate text-xs text-main-500">
                          nzikustephen826@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <Link
                      href="/admin/profile"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-main-700 transition hover:bg-primary-50 hover:text-primary-800"
                    >
                      <i className="bi bi-person" aria-hidden="true" />
                      Profile
                    </Link>

                    <Link
                      href="/admin/settings"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-main-700 transition hover:bg-primary-50 hover:text-primary-800"
                    >
                      <i className="bi bi-sliders" aria-hidden="true" />
                      Settings
                    </Link>

                    <Link
                      href="/admin/security"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-main-700 transition hover:bg-primary-50 hover:text-primary-800"
                    >
                      <i className="bi bi-shield-lock" aria-hidden="true" />
                      Security
                    </Link>
                  </div>

                  <div className="border-t border-main-200 pt-2">
                    <button
                      type="button"
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium text-danger transition hover:bg-danger/10"
                    >
                      <i className="bi bi-box-arrow-right" aria-hidden="true" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  )
}