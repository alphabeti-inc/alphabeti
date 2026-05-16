const projects = [
  {
    title: 'Internal operations platform',
    summary:
      'A workflow system for managing service requests, approvals, and team coordination across departments.',
  },
  {
    title: 'Client-facing digital product',
    summary:
      'A responsive web application for onboarding users, managing accounts, and delivering a clean product experience.',
  },
  {
    title: 'Legacy modernization engagement',
    summary:
      'A focused rebuild of brittle interfaces and backend workflows to improve performance, reliability, and maintainability.',
  },
]

export default function ProjectsPage() {
  return (
    <main>
      <section className="border-b border-main-200 bg-linear-to-br from-accent-50 via-main-0 to-primary-50">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="font-(--font-mono) text-xs uppercase tracking-[0.35em] text-primary-700">
            Projects
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-main-1000 sm:text-6xl">
            Sample engagement types that reflect the software work we help teams deliver.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 sm:px-8 lg:grid-cols-3 lg:px-10">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.75rem] border border-main-200 bg-main-50 p-6"
          >
            <h2 className="text-2xl font-semibold text-main-1000">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-main-600">{project.summary}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
