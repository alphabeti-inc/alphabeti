import type { Metadata } from 'next'
import { PageHeader } from '../_components/page-header'
import { StatusPill } from '../_components/status-pill'

export const metadata: Metadata = {
  title: 'Content Management | Alphabeti Admin',
  description: 'Manage Alphabeti website pages and publishing workflow.',
}

const pages = [
  { name: 'Home', path: '/', status: 'Published', owner: 'Marketing', updated: 'Today' },
  { name: 'Services', path: '/services', status: 'Review', owner: 'Delivery', updated: 'Yesterday' },
  { name: 'Projects', path: '/projects', status: 'Draft', owner: 'Product', updated: '2 days ago' },
  { name: 'Team', path: '/team', status: 'Published', owner: 'People', updated: 'Last week' },
  { name: 'About', path: '/about', status: 'Published', owner: 'Leadership', updated: 'Last week' },
]

const contentQueue = [
  'Add two recent project outcomes',
  'Refresh team member bios',
  'Review contact page response promise',
]

export default function ContentManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Content"
        title="Website pages and publishing"
        description="Manage page status, ownership, and review queues for the public Alphabeti website."
        action={
          <button className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-main-0 transition hover:bg-primary-700">
            <i className="bi bi-file-earmark-plus" aria-hidden="true" />
            New page
          </button>
        }
      />

      <section className="grid gap-6 px-6 py-6 lg:grid-cols-[1fr_20rem] lg:px-8">
        <div className="rounded-2xl border border-main-200 bg-main-0">
          <div className="flex flex-col gap-4 border-b border-main-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-main-1000">Page inventory</h2>
              <p className="mt-1 text-sm text-main-500">Core pages currently managed by the site team.</p>
            </div>
            <button className="inline-flex w-fit items-center gap-2 rounded-full border border-main-300 px-4 py-2 text-sm font-semibold text-main-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
              <i className="bi bi-filter" aria-hidden="true" />
              Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-180 text-left text-sm">
              <thead className="border-b border-main-200 bg-main-50 text-xs uppercase tracking-[0.18em] text-main-500">
                <tr>
                  <th className="px-5 py-4 font-medium">Page</th>
                  <th className="px-5 py-4 font-medium">Path</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                  <th className="px-5 py-4 font-medium">Owner</th>
                  <th className="px-5 py-4 font-medium">Updated</th>
                  <th className="px-5 py-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-main-200">
                {pages.map((page) => (
                  <tr key={page.name} className="text-main-700">
                    <td className="px-5 py-4 font-semibold text-main-1000">{page.name}</td>
                    <td className="px-5 py-4 font-(--font-mono) text-xs">{page.path}</td>
                    <td className="px-5 py-4">
                      <StatusPill status={page.status} />
                    </td>
                    <td className="px-5 py-4">{page.owner}</td>
                    <td className="px-5 py-4">{page.updated}</td>
                    <td className="px-5 py-4">
                      <button className="grid h-9 w-9 place-items-center rounded-full text-main-600 transition hover:bg-primary-50 hover:text-primary-800">
                        <i className="bi bi-three-dots" aria-hidden="true" />
                        <span className="sr-only">Open page actions</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="rounded-2xl border border-main-200 bg-main-0 p-5">
          <h2 className="text-xl font-semibold text-main-1000">Review queue</h2>
          <div className="mt-5 space-y-3">
            {contentQueue.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-main-200 bg-main-50 px-4 py-3 text-sm text-main-700"
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  )
}
