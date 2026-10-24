
import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'SmartPrep LMS',
    category: 'Learning Management System',
    description:
      'A learning platform concept with student and teacher workflows, quizzes, attendance, and course management.',
    stack: ['React', 'Node.js', 'Database'],
    status: 'Development project',
  },
  {
    number: '02',
    title: 'Smart ATM Security',
    category: 'Security Web Application',
    description:
      'A security-focused application concept with a backend, database integration, and camera-based photo capture.',
    stack: ['Node.js', 'Express', 'MySQL'],
    status: 'Development project',
  },
  {
    number: '03',
    title: 'Inventory Manager',
    category: 'Business Web Application',
    description:
      'An inventory management demo planned around product records, stock updates, search, and reporting.',
    stack: ['React', 'API', 'Database'],
    status: 'Portfolio demo',
  },
]

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description:
      'Responsive websites for businesses that need a professional online presence.',
  },
  {
    number: '02',
    title: 'Bug Fixing',
    description:
      'Debugging layout problems, JavaScript issues, PHP errors, and database queries.',
  },
  {
    number: '03',
    title: 'Full-Stack Development',
    description:
      'Database-driven applications, admin dashboards, CRUD features, and APIs.',
  },
]

const skillGroups = [
  { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'PHP', 'REST APIs'] },
  { title: 'Database', skills: ['MySQL', 'MongoDB'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Vite'] },
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 leading-7 text-zinc-400">{description}</p>
      )}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['Services', '#services'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/85 backdrop-blur-xl">
      <nav className="container-main flex min-h-[72px] items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Ali<span className="text-blue-400">.</span>
        </a>

        <button
          className="rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <div className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-[71px] flex-col gap-5 border-b border-white/10 bg-[#09090b] p-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold transition hover:bg-blue-500"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="container-main relative grid min-h-[660px] items-center gap-12 py-24 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Web Developer · Available for projects
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-7xl">
            I build websites that help your business{' '}
            <span className="text-blue-400">move forward.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I'm Ali, a web developer building responsive websites and
            database-driven applications with modern frontend and backend
            technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Explore My Work ↗
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3.5 font-semibold transition hover:border-white/40"
            >
              Let's Talk
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
            <span>Frontend Development</span>
            <span>Backend Development</span>
            <span>Database Integration</span>
          </div>
        </div>

        <div className="glow relative mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900/80 p-5">
          <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-zinc-500">developer.js</span>
          </div>
          <pre className="overflow-x-auto text-sm leading-8">
            <code>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">developer</span> = {'{\n'}
              {'  '}name: <span className="text-green-300">'Ali'</span>,{'\n'}
              {'  '}role: <span className="text-green-300">'Web Developer'</span>,{'\n'}
              {'  '}frontend: [<span className="text-green-300">'React'</span>],{'\n'}
              {'  '}backend: [<span className="text-green-300">'Node.js'</span>],{'\n'}
              {'  '}database: <span className="text-green-300">'MySQL'</span>,{'\n'}
              {'  '}mindset: <span className="text-green-300">'Keep learning'</span>{'\n'}
              {'};'}
            </code>
          </pre>
          <div className="mt-5 rounded-lg border border-white/5 bg-black/30 p-3 text-xs text-zinc-500">
            // Turning ideas into working products.
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="container-main py-24">
      <SectionTitle
        eyebrow="A little about me"
        title="Code with purpose."
        description="I enjoy solving practical problems with clean interfaces, reliable application logic, and well-structured code."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <p className="leading-8 text-zinc-400">
          I'm a Computer Science student focused on web development. I work
          across frontend interfaces, backend logic, and databases. My goal
          is to deliver useful software that is easy to use and maintain.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-zinc-500">My working principles</p>
          <ul className="mt-5 space-y-4 text-zinc-300">
            <li>01. Clear communication</li>
            <li>02. Responsive, accessible interfaces</li>
            <li>03. Maintainable and tested code</li>
            <li>04. Honest project updates</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="border-y border-white/5 bg-white/[0.02] py-24">
      <div className="container-main">
        <SectionTitle
          eyebrow="What I do"
          title="Services for your next project."
          description="Practical development services for businesses, founders, and people improving an existing website."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-2xl border border-white/10 bg-[#09090b] p-7 transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <p className="text-sm text-blue-400">{service.number}</p>
              <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{service.description}</p>
              <a href="#contact" className="mt-7 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300">
                Discuss a project ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="container-main py-24">
      <SectionTitle
        eyebrow="Selected work"
        title="Projects I'm working on."
        description="A few examples of the applications and concepts I work with. Project status is stated honestly."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-blue-400/40"
          >
            <div className="flex h-40 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-blue-500/15 via-zinc-900 to-violet-500/10">
              <span className="text-5xl font-bold text-white/10">{project.number}</span>
            </div>
            <p className="mt-6 text-xs uppercase tracking-widest text-blue-400">{project.category}</p>
            <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 text-xs text-zinc-500">{project.status}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-zinc-500">
        Replace these descriptions with verified project details and add repository or demo links when available.
      </p>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-white/[0.02] py-24">
      <div className="container-main">
        <SectionTitle
          eyebrow="My toolkit"
          title="Technologies I work with."
          description="Tools I use or am developing experience with. I'll keep this list aligned with my actual skills."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-white/10 bg-[#09090b] p-5">
              <h3 className="mb-5 font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-white/[0.06] px-3 py-2 text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const email = 'devwithali@gmail.com'

  return (
    <section id="contact" className="container-main py-24">
      <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-zinc-900 to-zinc-900 p-8 sm:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">Contact</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold sm:text-6xl">
          Have a project in mind?
        </h2>
        <p className="mt-5 max-w-xl leading-8 text-zinc-400">
          Tell me what you're building, what you need help with, and your
          expected timeline. I'll get back to you to discuss the next steps.
        </p>
        <a
          href={`mailto:${email}?subject=${encodeURIComponent('Website project inquiry')}`}
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3.5 font-semibold hover:bg-blue-500"
        >
          Email Me ↗
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-7">
      <div className="container-main flex flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ali. All rights reserved.</p>
        <a href="#home" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
