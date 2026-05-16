import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '../_components/page-header'
import { StatusPill } from '../_components/status-pill'

export const metadata: Metadata = {
  title: 'Team Management | Alphabeti Admin',
  description: 'Manage Alphabeti team profiles, roles, and public contact details.',
}

const teamMembers = [
  {
    name: 'Stephen IssaH',
    title: 'Backend Engineer',
    roles: ['Backend Engineer', 'Database Architect'],
    status: 'Published',
    location: 'Dar es Salaam',
    email: 'issah1554@alphabeti.co.tz',
    phone: '+256 700 000000',
    github: 'https://github.com/issah1554',
    imageSrc:
      'https://avatars.githubusercontent.com/u/153155657?s=400&u=29b4aa0f3bee78bfa46c612a844cdd8de8e1ecef&v=4',
    updated: 'Today',
  },
  {
    name: 'Eng. Mole',
    title: 'Frontend Engineer',
    roles: ['Frontend Engineer', 'UI Systems'],
    status: 'Review',
    location: 'Remote',
    email: 'mole@alphabeti.co.tz',
    phone: 'Not listed',
    github: 'https://github.com/molegrace',
    imageSrc: 'https://avatars.githubusercontent.com/u/246514810?v=4',
    updated: 'Yesterday',
  },
]

const teamStats = [
  { label: 'Profiles', value: '2', icon: 'bi-person-badge', tone: 'bg-primary-50 text-primary-800' },
  { label: 'Published', value: '1', icon: 'bi-check2-circle', tone: 'bg-success-50 text-success-800' },
  { label: 'Needs review', value: '1', icon: 'bi-exclamation-circle', tone: 'bg-warning-50 text-warning-800' },
]

const profileTasks = [
  'Replace placeholder LinkedIn and X links',
  'Confirm public phone visibility',
  'Add short bios for each team member',
  'Review profile image quality on mobile',
]

export default function TeamManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Team"
        title="Team profile management"
        description="Manage public team profiles, roles, contact details, profile images, and publishing readiness."
        action={
          <button className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-main-0 transition hover:bg-primary-700">
            <i className="bi bi-person-plus" aria-hidden="true" />
            Add member
          </button>
        }
      />

      <section className="grid gap-4 px-6 py-6 sm:grid-cols-3 lg:px-8">
        {teamStats.map((stat) => (
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

      <section className="grid gap-6 px-6 pb-8 lg:grid-cols-[1fr_21rem] lg:px-8">
        <div className="rounded-2xl border border-main-200 bg-main-0">
          <div className="flex flex-col gap-4 border-b border-main-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-main-1000">Team members</h2>
              <p className="mt-1 text-sm text-main-500">Profiles currently shown or queued for the public team page.</p>
            </div>
            <Link
              href="/team"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-main-300 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
            >
              <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
              Public page
            </Link>
          </div>

          <div className="divide-y divide-main-200">
            {teamMembers.map((member) => (
              <article key={member.name} className="p-5">
                <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-start">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-main-200 bg-main-100">
                      <Image
                        src={member.imageSrc}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-main-1000">{member.name}</h3>
                        <StatusPill status={member.status} />
                      </div>
                      <p className="mt-1 text-sm text-main-500">{member.title}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {member.roles.map((role) => (
                          <span
                            key={role}
                            className="rounded-full border border-main-200 bg-main-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-main-600"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                      <dl className="mt-4 grid gap-2 text-sm text-main-600 md:grid-cols-2">
                        <div className="flex items-center gap-2">
                          <i className="bi bi-envelope text-main-400" aria-hidden="true" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="bi bi-telephone text-main-400" aria-hidden="true" />
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="bi bi-github text-main-400" aria-hidden="true" />
                          <span>{member.github.replace('https://github.com/', '@')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="bi bi-geo-alt text-main-400" aria-hidden="true" />
                          <span>{member.location}</span>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 xl:justify-end">
                    <button className="inline-flex items-center gap-2 rounded-full border border-main-300 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
                      <i className="bi bi-pencil-square" aria-hidden="true" />
                      Edit
                    </button>
                    <button className="grid h-10 w-10 place-items-center rounded-full border border-main-300 text-main-700 transition hover:border-danger-200 hover:bg-danger-50 hover:text-danger-700">
                      <i className="bi bi-archive" aria-hidden="true" />
                      <span className="sr-only">Archive member</span>
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-xs text-main-500">Last updated {member.updated}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="grid gap-6">
          <div className="rounded-2xl border border-main-200 bg-main-0 p-5">
            <h2 className="text-xl font-semibold text-main-1000">Profile checklist</h2>
            <div className="mt-5 space-y-3">
              {profileTasks.map((task) => (
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

          <div className="rounded-2xl border border-main-200 bg-main-0 p-5">
            <h2 className="text-xl font-semibold text-main-1000">Quick actions</h2>
            <div className="mt-5 grid gap-3">
              {[
                ['bi-image', 'Update avatars'],
                ['bi-link-45deg', 'Audit public links'],
                ['bi-file-text', 'Draft team bio'],
              ].map(([icon, label]) => (
                <button
                  key={label}
                  className="inline-flex items-center gap-3 rounded-xl border border-main-200 bg-main-50 px-4 py-3 text-left text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
                >
                  <i className={`bi ${icon}`} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
