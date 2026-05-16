const principles = [
  'We treat software delivery as both a technical and operational discipline.',
  'We prefer clean systems, direct communication, and maintainable implementation over short-term noise.',
  'We build with the assumption that your product will need to evolve under real business pressure.',
]

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-main-200 bg-linear-to-br from-main-50 via-main-0 to-primary-50">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="font-(--font-mono) text-xs uppercase tracking-[0.35em] text-primary-700">
            About
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-main-1000 sm:text-6xl">
            Alphabeti is a software development company built around clarity, engineering quality, and dependable delivery.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-main-700">
            We work with teams that need thoughtful software execution, whether that means launching a new product, improving an internal platform, or raising the quality of an existing system.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-main-1000">
            How we work
          </h2>
          <p className="mt-4 text-base leading-7 text-main-700">
            We stay close to the actual problem, define scope carefully, and make technical decisions that support long-term product health instead of temporary momentum.
          </p>
        </div>
        <div className="space-y-4">
          {principles.map((principle) => (
            <div
              key={principle}
              className="rounded-2xl border border-main-200 bg-main-50 px-5 py-5"
            >
              <p className="text-sm leading-7 text-main-700">{principle}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
