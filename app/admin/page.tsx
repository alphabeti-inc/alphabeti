import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from './_components/page-header'
import { StatusPill } from './_components/status-pill'

export const metadata: Metadata = {
  title: 'Admin Overview | Alphabeti',
  description: 'Overview dashboard for Alphabeti site management.',
}

const metrics = [
  {
    label: 'Pages live',
    value: '6',
    detail: 'Public site sections',
    icon: 'bi-window-sidebar',
    tone: 'bg-primary-50 text-primary-800',
  },
  {
    label: 'Open inquiries',
    value: '12',
    detail: '4 need a reply today',
    icon: 'bi-inbox',
    tone: 'bg-accent-50 text-accent-800',
  },
  {
    label: 'Draft updates',
    value: '8',
    detail: 'Content waiting review',
    icon: 'bi-pencil-square',
    tone: 'bg-warning-50 text-warning-800',
  },
  {
    label: 'Site health',
    value: '98%',
    detail: 'Performance and uptime',
    icon: 'bi-activity',
    tone: 'bg-success-50 text-success-800',
  },
]

const tasks = [
  'Review Services page copy',
  'Publish latest project case study',
  'Respond to four contact form inquiries',
  'Check analytics drop on mobile traffic',
]

const recentActivity = [
  { label: 'Home page hero copy updated', status: 'Published', time: '10:24' },
  { label: 'New project inquiry received', status: 'New', time: '09:40' },
  { label: 'Services page awaiting approval', status: 'Review', time: 'Yesterday' },
]

export default function AdminOverviewPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Overview"
        title="Site management dashboard"
        description="Monitor the public website, pending content, inbound project requests, and operational health from one admin home."
        action={
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-main-300 bg-main-0 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
          >
            <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
            View site
          </Link>
        }
      />

      <section className="grid gap-4 px-6 py-6 sm:grid-cols-2 lg:px-8 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-2xl border border-main-200 bg-main-0 p-5 shadow-[0_18px_50px_-40px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-main-600">{metric.label}</p>
                <p className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-main-1000">
                  {metric.value}
                </p>
              </div>
              <span className={`grid h-11 w-11 place-items-center rounded-full ${metric.tone}`}>
                <i className={`bi ${metric.icon}`} aria-hidden="true" />
              </span>
            </div>
            <p className="mt-4 text-sm text-main-500">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 px-6 pb-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <article className="rounded-2xl border border-main-200 bg-main-0 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-main-1000">Today</h2>
              <p className="mt-1 text-sm text-main-500">Priority site work</p>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-50 text-primary-800">
              <i className="bi bi-calendar2-check" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {tasks.map((task) => (
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
        </article>

        <article className="rounded-2xl border border-main-200 bg-main-0 p-5">
          <h2 className="text-xl font-semibold text-main-1000">Recent activity</h2>
          <div className="mt-5 space-y-3">
            {recentActivity.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 rounded-xl border border-main-200 bg-main-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-main-1000">{item.label}</p>
                  <p className="mt-1 text-xs text-main-500">{item.time}</p>
                </div>
                <StatusPill status={item.status} />
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}
