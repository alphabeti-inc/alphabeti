const contactPoints = [
  'New product builds and MVP delivery',
  'Internal software and workflow tools',
  'Engineering support for an existing team',
  'Architecture cleanup and modernization work',
]

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-main-200 bg-main-100/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="font-(--font-mono) text-xs uppercase tracking-[0.35em] text-primary-700">
            Contact
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-main-1000 sm:text-6xl">
            Tell us what you need to build, fix, or improve.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-main-700">
            Alphabeti works best with teams that want direct technical conversation, realistic planning, and solid implementation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
        <div className="rounded-4xl border border-main-200 bg-main-50 p-8">
          <h2 className="text-3xl font-semibold text-main-1000">Start the conversation</h2>
          <p className="mt-4 text-base leading-7 text-main-700">
            Reach out with your product idea, current system challenge, or delivery gap. We can help assess scope and recommend the next practical step.
          </p>
          <a
            href="mailto:hello@alphabeti.co.tz"
            className="mt-8 inline-flex rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-main-0 transition hover:bg-primary-700"
          >
            hello@alphabeti.co.tz
          </a>
        </div>

        <div className="rounded-4xl bg-primary-950 p-8 text-main-0">
          <p className="font-(--font-mono) text-xs uppercase tracking-[0.3em] text-primary-200">
            Good fit
          </p>
          <div className="mt-6 space-y-4">
            {contactPoints.map((point) => (
              <div key={point} className="flex gap-4 rounded-2xl bg-main-0/10 px-4 py-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-300" />
                <p className="text-sm leading-7 text-primary-100/85">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
