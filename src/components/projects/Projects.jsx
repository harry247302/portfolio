import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const projects = [
  {
    title: 'Kamal CRM – Real Estate Management System',
    description: 'A full-featured CRM for real estate with lead lifecycle management, role-based auth, and call log tracking. REST APIs power both mobile and web clients.',
    features: [
      'Lead lifecycle management',
      'Role-based auth',
      'Call log tracking',
      'REST APIs for mobile + web',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    github: '#',
    live: '#',
  },
  {
    title: 'SearchMyStudy',
    description: 'Student-facing portal for discovering courses and institutes. Part of the education management ecosystem with search, filters, and secure authentication.',
    features: [
      'Course & institute search',
      'Filters and recommendations',
      'Secure authentication',
      'Responsive web app',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind'],
    github: '#',
    live: 'http://searchmystudy.com/',
  },
  {
    title: 'Admission Portals',
    description: 'Central admission portal for institutes. Streamlines application and enrollment with role-based access and a clean admin workflow.',
    features: [
      'Application management',
      'Role-based access',
      'Admission workflow',
      'Admin dashboard',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind'],
    github: '#',
    live: 'https://admissionportals.in/',
  },
  {
    title: 'CourseFinder Admin',
    description: 'Admin panel for the CourseFinder / SearchMyStudy ecosystem. Manages courses, franchises, and content with secure authentication.',
    features: [
      'Admin dashboard',
      'Course & content management',
      'Franchise management',
      'Secure authentication',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind'],
    github: '#',
    live: 'http://admin.coursefinder.co.in/',
  },
  {
    title: 'Uni Admission Portal',
    description: 'University-focused admission portal. Handles applications and enrollment for higher education with a dedicated workflow.',
    features: [
      'University admissions',
      'Application tracking',
      'Enrollment workflow',
      'Secure authentication',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind'],
    github: '#',
    live: 'https://uni.admissionportals.in/',
  },
  {
    title: 'CourseFinder',
    description: 'Course discovery and institute search platform. Helps students find courses and connect with institutes across the education ecosystem.',
    features: [
      'Course discovery',
      'Institute search',
      'Responsive design',
      'Secure authentication',
    ],
    tech: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: 'https://coursefinder.co.in/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Projects" title="What I've built" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-glass dark:shadow-glass-dark backdrop-blur-sm hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <ul className="space-y-1.5 mb-4">
                {project.features.map((f) => (
                  <li key={f} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                    <span className="text-primary-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500 text-white font-medium text-sm hover:bg-primary-600 transition-colors"
                  >
                    <LiveIcon className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function LiveIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
