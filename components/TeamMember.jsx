import Image from 'next/image'

export function TeamMember({ member }) {
  const links = [
    {
      label: 'GitHub',
      href: member.github,
      iconClass: 'bi-github',
    },
    ...(member.socials ?? []),
  ]

  const contacts = member.contacts ?? []

  const allLinks = [
    ...contacts.map((contact) => ({
      label: contact.label,
      href: contact.href,
      iconClass: contact.iconClass,
      title: contact.value,
    })),
    ...links,
  ]

  return (
    <article className="group overflow-hidden rounded-3xl border border-main-200 bg-main-50 shadow-xs transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-linear-to-br from-main-200 via-main-100 to-primary-100">
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Name + Roles */}
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-main-1000">
              {member.name}
            </h2>

            {member.title && (
              <p className="mt-1 text-sm text-main-500">
                {member.title}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {member.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-main-200 bg-main-0 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-main-600"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        {member.bio && (
          <p className="text-sm leading-relaxed text-main-600">
            {member.bio}
          </p>
        )}

        {/* Links */}
        {allLinks.length > 0 && (
          <div className="flex items-center gap-2 pt-1">
            {allLinks.map((link) => (
              <a
                key={`${member.name}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.title || link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-main-200 bg-main-0 text-base text-main-700 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
              >
                <i className={`bi ${link.iconClass}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}