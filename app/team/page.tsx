import { TeamMember } from '@/components/TeamMember'

type SocialLink = {
  label: string
  href: string
  iconClass: string
}

type TeamMemberData = {
  name: string
  roles: string[]
  github: string
  imageSrc: string
  socials?: SocialLink[]
}

const teamMembers: TeamMemberData[] = [
  {
    name: 'Stephen IssaH',
    roles: ['Backend Engineer', 'Database Architect'],
    github: 'https://github.com/issah1554',
    imageSrc: 'https://avatars.githubusercontent.com/u/153155657?s=400&u=29b4aa0f3bee78bfa46c612a844cdd8de8e1ecef&v=4',
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/your-profile',
        iconClass: 'bi-linkedin',
      },
      { label: 'X', href: 'https://x.com/your-handle', iconClass: 'bi-twitter-x' },
    ],
  },
  {
    name: 'Eng. Mole ',
    roles: ['Frontend Engineer', 'UI Systems'],
    github: 'https://github.com/molegrace',
    imageSrc: 'https://avatars.githubusercontent.com/u/246514810?v=4',
  },
]

export default function TeamPage() {
  return (
    <main>
      <section className="border-b border-main-200 bg-linear-to-br from-primary-50 via-main-0 to-accent-50">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="font-(--font-mono) text-xs uppercase tracking-[0.35em] text-primary-700">
            Team
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-main-1000 sm:text-6xl">
            The people behind Alphabeti and the profiles that show how they build.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-main-700">
            This page highlights team members with their GitHub profiles and any other public links you want to share.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </section>
    </main>
  )
}
