import type { Metadata } from 'next'
import { PageHeader } from '../_components/page-header'
import { StatusPill } from '../_components/status-pill'

export const metadata: Metadata = {
  title: 'Lead Management | Alphabeti Admin',
  description: 'Manage project inquiries and sales pipeline activity.',
}

const inquiries = [
  {
    company: 'Nexa Logistics',
    contact: 'Amina K.',
    request: 'Internal operations platform',
    stage: 'Qualified',
    value: '$28k',
  },
  {
    company: 'BluePeak Finance',
    contact: 'Daniel M.',
    request: 'Client portal modernization',
    stage: 'New',
    value: '$18k',
  },
  {
    company: 'Kijiji Health',
    contact: 'Grace N.',
    request: 'Workflow automation',
    stage: 'Proposal',
    value: '$34k',
  },
]

export default function LeadManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Leads"
        title="Project inquiry pipeline"
        description="Review new contact submissions, qualify opportunities, and track active proposal value."
      />

      <section className="grid gap-4 px-6 py-6 lg:px-8">
        {inquiries.map((inquiry) => (
          <article
            key={inquiry.company}
            className="rounded-2xl border border-main-200 bg-main-0 p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-main-1000">{inquiry.company}</h2>
                <p className="mt-1 text-sm text-main-500">{inquiry.contact}</p>
                <p className="mt-4 text-sm leading-7 text-main-700">{inquiry.request}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <StatusPill status={inquiry.stage} />
                <span className="font-(--font-mono) text-sm text-main-700">{inquiry.value}</span>
                <button className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-main-0 transition hover:bg-primary-700">
                  Open
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
