const statusClasses: Record<string, string> = {
  Published: 'border-success-200 bg-success-50 text-success-800',
  Passing: 'border-success-200 bg-success-50 text-success-800',
  Online: 'border-success-200 bg-success-50 text-success-800',
  Qualified: 'border-primary-200 bg-primary-50 text-primary-800',
  Connected: 'border-primary-200 bg-primary-50 text-primary-800',
  Proposal: 'border-primary-200 bg-primary-50 text-primary-800',
  Review: 'border-warning-200 bg-warning-50 text-warning-800',
  New: 'border-warning-200 bg-warning-50 text-warning-800',
  Draft: 'border-main-200 bg-main-100 text-main-700',
}

export function StatusPill({ status }: { status: string }) {
  const classes = statusClasses[status] ?? 'border-main-200 bg-main-100 text-main-700'

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${classes}`}>
      {status}
    </span>
  )
}
