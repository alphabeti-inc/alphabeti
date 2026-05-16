import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '../_components/page-header'
import { StatusPill } from '../_components/status-pill'

export const metadata: Metadata = {
  title: 'Services Management | Alphabeti Admin',
  description: 'Manage service offerings shown on the Alphabeti website.',
}

const services = [
  {
    title: 'Custom software development',
    status: 'Published',
    owner: 'Delivery',
    updated: 'Today',
    description:
      'Business systems, internal tools, dashboards, portals, and platforms shaped around your workflow instead of generic templates.',
  },
  {
    title: 'Web product engineering',
    status: 'Review',
    owner: 'Product',
    updated: 'Yesterday',
    description:
      'Product architecture, frontend implementation, backend services, and full-stack delivery for modern web applications.',
  },
  {
    title: 'Technical support and modernization',
    status: 'Draft',
    owner: 'Engineering',
    updated: '2 days ago',
    description:
      'Refactoring, architecture cleanup, delivery support, and targeted engineering help for existing software teams.',
  },
]

const serviceTasks = [
  'Add proof points for each service',
  'Review modernization service positioning',
  'Map services to project examples',
]

export default function ServicesManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Service offering management"
        description="Manage the service cards, descriptions, ownership, and publishing status shown on the public Services page."
        action={
          <button className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-main-0 transition hover:bg-primary-700">
            <i className="bi bi-plus-lg" aria-hidden="true" />
            Add service
          </button>
        }
      />

      <section className="grid gap-6 px-6 py-6 lg:grid-cols-[1fr_21rem] lg:px-8">
        <div className="grid gap-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-main-200 bg-main-0 p-5"
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-main-1000">{service.title}</h2>
                    <StatusPill status={service.status} />
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-main-600">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-main-500">
                    <span>Owner: {service.owner}</span>
                    <span>Updated: {service.updated}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 xl:justify-end">
                  <button className="inline-flex items-center gap-2 rounded-full border border-main-300 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
                    <i className="bi bi-pencil-square" aria-hidden="true" />
                    Edit
                  </button>
                  <button className="grid h-10 w-10 place-items-center rounded-full border border-main-300 text-main-700 transition hover:border-danger-200 hover:bg-danger-50 hover:text-danger-700">
                    <i className="bi bi-archive" aria-hidden="true" />
                    <span className="sr-only">Archive service</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="grid gap-6">
          <div className="rounded-2xl border border-main-200 bg-main-0 p-5">
            <h2 className="text-xl font-semibold text-main-1000">Publishing queue</h2>
            <div className="mt-5 space-y-3">
              {serviceTasks.map((task) => (
                <label
                  key={task}
                  className="flex items-start gap-3 rounded-xl border border-main-200 bg-main-50 px-4 py-3 text-sm text-main-700"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-main-300 accent-primary-600"
                  />
                  <span>{task}</span>
                </label>
              ))}
            </div>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-main-300 bg-main-0 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
          >
            <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
            Public services page
          </Link>
        </aside>
      </section>
    </main>
  )
}
