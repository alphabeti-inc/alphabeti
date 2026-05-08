const services = [
  {
    title: 'Custom software development',
    description:
      'Business systems, internal tools, dashboards, portals, and platforms shaped around your workflow instead of generic templates.',
  },
  {
    title: 'Web product engineering',
    description:
      'Product architecture, frontend implementation, backend services, and full-stack delivery for modern web applications.',
  },
  {
    title: 'Technical support and modernization',
    description:
      'Refactoring, architecture cleanup, delivery support, and targeted engineering help for existing software teams.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-main-200 bg-main-50/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="font-[family:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-primary-700">
            Services
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-main-1000 sm:text-6xl">
            Software services designed for teams that need working systems, not vague promises.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 sm:px-8 lg:px-10">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[1.75rem] border border-main-200 bg-main-50 p-7"
          >
            <h2 className="text-2xl font-semibold text-main-1000">{service.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-main-600">
              {service.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}
