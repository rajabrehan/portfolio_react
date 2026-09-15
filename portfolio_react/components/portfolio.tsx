'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react'
import {
  experiences,
  leadership,
  projects,
  site,
} from '@/lib/portfolio-data'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
] as const

function SectionHeading({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
    >
      {children}
    </h2>
  )
}

export function PortfolioComponent() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-neutral-50/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <a
            href="#top"
            className="text-sm font-medium tracking-tight text-neutral-900"
          >
            {site.name}
          </a>
          <nav
            className="flex max-w-[60%] flex-wrap justify-end gap-x-4 gap-y-1 sm:max-w-none sm:gap-6"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs text-neutral-600 transition-colors hover:text-neutral-900 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-6 pb-20 pt-16">
        <section className="flex flex-col gap-10 border-b border-neutral-200 pb-16 sm:flex-row sm:items-start sm:justify-between">
          <div className="order-2 flex-1 space-y-6 sm:order-1">
            <div className="space-y-3">
              <p className="text-sm text-neutral-500">{site.location}</p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {site.name}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-neutral-600">
                {site.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.links.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                <FileText className="h-4 w-4" aria-hidden />
                Resume
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-neutral-900"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-neutral-900"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>
            </div>
          </div>
          <div className="order-1 shrink-0 sm:order-2">
            <div className="relative h-36 w-36 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 sm:h-44 sm:w-44">
              <Image
                src="/headshot.png"
                alt="Portrait of Rajab Rehan"
                fill
                className="object-cover object-[center_18%]"
                priority
                sizes="176px"
              />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 space-y-8 py-16">
          <SectionHeading id="about-heading">About</SectionHeading>
          <p className="text-base leading-relaxed text-neutral-700">
            {site.summary}
          </p>
          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6 text-sm leading-relaxed text-neutral-700">
            <p>
              <span className="font-medium text-neutral-900">
                {site.education.school}
              </span>
              <br />
              {site.education.degree} · {site.education.graduation}
            </p>
            <p className="text-neutral-600">{site.education.courses}</p>
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-2 font-medium text-neutral-900">Languages</p>
              <p className="text-neutral-600">{site.skills.languages}</p>
            </div>
            <div>
              <p className="mb-2 font-medium text-neutral-900">Frameworks</p>
              <p className="text-neutral-600">{site.skills.frameworks}</p>
            </div>
            <div>
              <p className="mb-2 font-medium text-neutral-900">Tools</p>
              <p className="text-neutral-600">{site.skills.tools}</p>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 space-y-8 border-t border-neutral-200 py-16">
          <SectionHeading id="experience-heading">Experience</SectionHeading>
          <ul className="space-y-10">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.title}`} className="space-y-3">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900">
                      {exp.title}
                    </h3>
                    <p className="text-neutral-600">{exp.company}</p>
                  </div>
                  <p className="text-sm tabular-nums text-neutral-500">
                    {exp.period}
                  </p>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="scroll-mt-24 space-y-10 border-t border-neutral-200 py-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="projects-heading">Projects</SectionHeading>
            <a
              href={site.links.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900"
            >
              All on Devpost
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="space-y-8">
            <p className="text-sm font-medium text-neutral-900">Featured</p>
            <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
              {featured.map((project) => (
                <li key={project.title}>
                  <ProjectRow project={project} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-neutral-900">More hackathons</p>
            <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
              {more.map((project) => (
                <li key={project.title}>
                  <ProjectRow project={project} compact />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="leadership" className="scroll-mt-24 space-y-8 border-t border-neutral-200 py-16">
          <SectionHeading id="leadership-heading">Leadership</SectionHeading>
          <ul className="space-y-10">
            {leadership.map((item) => (
              <li key={item.org} className="space-y-3">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900">
                      {item.role}
                    </h3>
                    <p className="text-neutral-600">{item.org}</p>
                  </div>
                  <p className="text-sm tabular-nums text-neutral-500">
                    {item.period}
                  </p>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-24 space-y-6 border-t border-neutral-200 py-16">
          <SectionHeading id="contact-heading">Contact</SectionHeading>
          <p className="text-base text-neutral-700">
            Open to internships, collaborations, and mentorship conversations.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-fit items-center gap-2 font-medium text-neutral-900 underline-offset-4 hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {site.email}
            </a>
            <p className="text-neutral-600">{site.phone}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8">
        <p className="text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </div>
  )
}

function ProjectRow({
  project,
  compact = false,
}: {
  project: (typeof projects)[number]
  compact?: boolean
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block px-5 py-5 transition hover:bg-neutral-50"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p className="flex items-center gap-2 font-medium text-neutral-900">
            {project.title}
            <ArrowUpRight
              className="h-4 w-4 text-neutral-400 transition group-hover:text-neutral-900"
              aria-hidden
            />
          </p>
          <p className="text-sm text-neutral-500">
            {project.event} · {project.date}
            {project.award ? ` · ${project.award}` : ''}
          </p>
        </div>
      </div>
      <p
        className={`mt-2 text-sm leading-relaxed text-neutral-600 ${compact ? 'line-clamp-2' : ''}`}
      >
        {project.description}
      </p>
      <p className="mt-3 text-xs text-neutral-500">{project.tech}</p>
    </a>
  )
}
