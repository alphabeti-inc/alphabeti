import type { Metadata } from 'next'
import { PageHeader } from '../_components/page-header'
import { StatusPill } from '../_components/status-pill'

export const metadata: Metadata = {
  title: 'Site Health | Alphabeti Admin',
  description: 'Monitor site health checks and operational status.',
}

const healthChecks = [
  { label: 'Build status', value: 'Passing', detail: 'Production build completed successfully.' },
  { label: 'Forms', value: 'Online', detail: 'Contact submissions are being accepted.' },
  { label: 'Analytics', value: 'Connected', detail: 'Traffic reporting is receiving events.' },
  { label: 'Backups', value: 'Scheduled', detail: 'Content backups are queued nightly.' },
]

export default function SiteHealthPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Health"
        title="Site operations health"
        description="Monitor the operational services that keep the public website reliable and measurable."
      />

      <section className="grid gap-4 px-6 py-6 sm:grid-cols-2 lg:px-8">
        {healthChecks.map((check) => (
          <article
            key={check.label}
            className="rounded-2xl border border-main-200 bg-main-0 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-main-1000">{check.label}</h2>
                <p className="mt-3 text-sm leading-7 text-main-600">{check.detail}</p>
              </div>
              <StatusPill status={check.value} />
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
