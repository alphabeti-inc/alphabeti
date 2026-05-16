import type { Metadata } from 'next'
import { PageHeader } from '../_components/page-header'

export const metadata: Metadata = {
  title: 'Admin Settings | Alphabeti Admin',
  description: 'Configure site management preferences for Alphabeti admin.',
}

const settings = [
  { label: 'Publishing approval', description: 'Require review before public page changes go live.', enabled: true },
  { label: 'Inquiry notifications', description: 'Notify the delivery team when a new lead arrives.', enabled: true },
  { label: 'Weekly health summary', description: 'Send a weekly email with uptime and content activity.', enabled: false },
]

export default function AdminSettingsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Settings"
        title="Site management settings"
        description="Configure the operating preferences for publishing, notifications, and health reporting."
      />

      <section className="grid gap-4 px-6 py-6 lg:px-8">
        {settings.map((setting) => (
          <article
            key={setting.label}
            className="flex flex-col gap-4 rounded-2xl border border-main-200 bg-main-0 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-main-1000">{setting.label}</h2>
              <p className="mt-2 text-sm leading-7 text-main-600">{setting.description}</p>
            </div>
            <label className="inline-flex cursor-pointer items-center gap-3 text-sm font-semibold text-main-700">
              <span>{setting.enabled ? 'Enabled' : 'Disabled'}</span>
              <input
                type="checkbox"
                defaultChecked={setting.enabled}
                className="h-5 w-5 rounded border-main-300 accent-primary-600"
              />
            </label>
          </article>
        ))}
      </section>
    </main>
  )
}
