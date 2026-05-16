import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '../_components/page-header'
import { StatusPill } from '../_components/status-pill'

export const metadata: Metadata = {
  title: 'Projects Management | Alphabeti Admin',
  description: 'Manage project examples and case study content for Alphabeti.',
}

const projects = [
  {
    title: 'Internal operations platform',
    status: 'Published',
    type: 'Operations',
    impact: 'Workflow coordination',
    updated: 'Today',
    summary:
      'A workflow system for managing service requests, approvals, and team coordination across departments.',
  },
  {
    title: 'Client-facing digital product',
    status: 'Review',
    type: 'Product',
    impact: 'Customer onboarding',
    updated: 'Yesterday',
    summary:
      'A responsive web application for onboarding users, managing accounts, and delivering a clean product experience.',
  },
  {
    title: 'Legacy modernization engagement',
    status: 'Draft',
    type: 'Modernization',
    impact: 'Reliability cleanup',
    updated: '2 days ago',
    summary:
      'A focused rebuild of brittle interfaces and backend workflows to improve performance, reliability, and maintainability.',
  },
]

const projectStats = [
  { label: 'Examples', value: '3', icon: 'bi-kanban', tone: 'bg-primary-50 text-primary-800' },
  { label: 'Published', value: '1', icon: 'bi-check2-circle', tone: 'bg-success-50 text-success-800' },
  { label: 'In review', value: '1', icon: 'bi-eye', tone: 'bg-warning-50 text-warning-800' },
]

export default function ProjectsManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Projects"
        title="Project example management"
        description="Manage public project examples, summaries, impact labels, and case-study publishing status."
        action={
          <button className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-main-0 transition hover:bg-primary-700">
            <i className="bi bi-plus-lg" aria-hidden="true" />
            Add project
          </button>
        }
      />

      <section className="grid gap-4 px-6 py-6 sm:grid-cols-3 lg:px-8">
        {projectStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-main-200 bg-main-0 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-main-600">{stat.label}</p>
                <p className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-main-1000">
                  {stat.value}
                </p>
              </div>
              <span className={`grid h-11 w-11 place-items-center rounded-full ${stat.tone}`}>
                <i className={`bi ${stat.icon}`} aria-hidden="true" />
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-4 px-6 pb-8 lg:px-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-main-200 bg-main-0 p-5"
          >
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-semibold text-main-1000">{project.title}</h2>
                  <StatusPill status={project.status} />
                </div>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-main-600">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[project.type, project.impact, `Updated ${project.updated}`].map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-main-200 bg-main-50 px-3 py-1 text-xs font-medium text-main-600"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 xl:justify-end">
                <button className="inline-flex items-center gap-2 rounded-full border border-main-300 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
                  <i className="bi bi-pencil-square" aria-hidden="true" />
                  Edit
                </button>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-main-300 text-main-700 transition hover:border-danger-200 hover:bg-danger-50 hover:text-danger-700">
                  <i className="bi bi-archive" aria-hidden="true" />
                  <span className="sr-only">Archive project</span>
                </button>
              </div>
            </div>
          </article>
        ))}

        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-main-300 bg-main-0 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
        >
          <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
          Public projects page
        </Link>
      </section>
    </main>
  )
}
