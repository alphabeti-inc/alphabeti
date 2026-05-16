type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
  action?: React.ReactNode
}

export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <section className="border-b border-main-200 bg-main-0">
      <div className="flex flex-col gap-5 px-6 py-8 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-(--font-mono) text-xs uppercase tracking-[0.35em] text-primary-700">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-main-1000 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-main-600">{description}</p>
        </div>
        {action}
      </div>
    </section>
  )
}
