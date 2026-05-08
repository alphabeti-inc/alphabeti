import Link from 'next/link'

const services = [
  'Custom platforms and internal software',
  'Product design and engineering execution',
  'API, backend, and workflow automation',
]

const highlights = [
  {
    value: 'End-to-end',
    label: 'discovery, design, engineering, and release support',
  },
  {
    value: 'Practical',
    label: 'technical decisions tied to business outcomes',
  },
  {
    value: 'Reliable',
    label: 'delivery shaped around clarity and maintainability',
  },
]

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <section className="relative isolate border-b border-main-200/70">
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-linear-to-br from-primary-100 via-main-0 to-accent-100" />
        <div className="absolute left-[14%] top-16 -z-10 h-64 w-64 rounded-full bg-accent-300/20 blur-3xl" />
        <div className="absolute right-[12%] top-32 -z-10 h-72 w-72 rounded-full bg-primary-300/20 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm text-primary-800">
                <span className="h-2 w-2 rounded-full bg-success-500" />
                Modern software delivery for companies with real operational needs
              </div>
              <h1 className="mt-6 text-5xl leading-none font-semibold tracking-[-0.04em] text-main-1000 sm:text-6xl lg:text-7xl">
                Alphabeti builds software products, platforms, and internal systems with engineering rigor.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-main-700 sm:text-xl">
                We help teams move from rough ideas and fragile processes to well-built software that is easier to operate, scale, and improve.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary-600 px-6 py-3 text-center text-sm font-semibold text-main-0 transition hover:bg-primary-700"
                >
                  Start a project
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-main-300 bg-main-0 px-6 py-3 text-center text-sm font-semibold text-main-900 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
                >
                  View services
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-main-200 bg-main-100/90 p-4 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="rounded-[1.6rem] border border-main-200 bg-main-0 p-5">
                <div className="border-b border-main-200 pb-5">
                  <p className="font-[family:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-main-500">
                    Engagement model
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-main-950">
                    Focused delivery, clean communication
                  </h2>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div
                      key={item.value}
                      className="rounded-2xl border border-main-200 bg-main-50 p-4"
                    >
                      <p className="text-2xl font-semibold text-main-1000">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-main-600">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 rounded-2xl border border-main-200 bg-main-0 px-4 py-3"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                      <p className="text-sm text-main-700">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 sm:px-8 lg:grid-cols-3 lg:px-10">
        {[
          {
            title: 'About alphabeti',
            text: 'Learn how we think about engineering quality, delivery discipline, and long-term software value.',
            href: '/about',
          },
          {
            title: 'Services',
            text: 'See the types of software systems, product work, and technical support we provide.',
            href: '/services',
          },
          {
            title: 'Projects',
            text: 'Review sample engagement types and the outcomes we help teams create.',
            href: '/projects',
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-[1.75rem] border border-main-200 bg-main-50 p-6"
          >
            <h2 className="text-2xl font-semibold text-main-1000">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-main-600">{card.text}</p>
            <Link
              href={card.href}
              className="mt-6 inline-flex rounded-full bg-main-100 px-4 py-2 text-sm font-medium text-main-900 transition hover:bg-primary-100 hover:text-primary-800"
            >
              Open page
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
