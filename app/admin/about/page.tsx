import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '../_components/page-header'
import { StatusPill } from '../_components/status-pill'

export const metadata: Metadata = {
  title: 'About Management | Alphabeti Admin',
  description: 'Manage company positioning and About page content for Alphabeti.',
}

const sections = [
  {
    title: 'Hero positioning',
    status: 'Published',
    updated: 'Today',
    copy: 'Alphabeti is a software development company built around clarity, engineering quality, and dependable delivery.',
  },
  {
    title: 'Company summary',
    status: 'Review',
    updated: 'Yesterday',
    copy: 'We work with teams that need thoughtful software execution, whether that means launching a new product, improving an internal platform, or raising the quality of an existing system.',
  },
  {
    title: 'How we work',
    status: 'Published',
    updated: 'Last week',
    copy: 'We stay close to the actual problem, define scope carefully, and make technical decisions that support long-term product health.',
  },
]

const principles = [
  'We treat software delivery as both a technical and operational discipline.',
  'We prefer clean systems, direct communication, and maintainable implementation over short-term noise.',
  'We build with the assumption that your product will need to evolve under real business pressure.',
]

export default function AboutManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="Company story management"
        description="Manage the About page narrative, working principles, positioning copy, and publishing review status."
        action={
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-main-300 bg-main-0 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
          >
            <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
            Public about page
          </Link>
        }
      />

      <section className="grid gap-6 px-6 py-6 lg:grid-cols-[1fr_22rem] lg:px-8">
        <div className="grid gap-4">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-main-200 bg-main-0 p-5"
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-main-1000">{section.title}</h2>
                    <StatusPill status={section.status} />
                  </div>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-main-600">{section.copy}</p>
                  <p className="mt-4 text-xs text-main-500">Updated {section.updated}</p>
                </div>
                <button className="inline-flex w-fit items-center gap-2 rounded-full border border-main-300 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
                  <i className="bi bi-pencil-square" aria-hidden="true" />
                  Edit copy
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="rounded-2xl border border-main-200 bg-main-0 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-main-1000">Principles</h2>
              <p className="mt-1 text-sm text-main-500">Public working principles</p>
            </div>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-main-300 text-main-700 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
              <i className="bi bi-plus-lg" aria-hidden="true" />
              <span className="sr-only">Add principle</span>
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {principles.map((principle, index) => (
              <article
                key={principle}
                className="rounded-xl border border-main-200 bg-main-50 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="font-(--font-mono) text-xs text-primary-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-7 text-main-700">{principle}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>
    </main>
  )
}
