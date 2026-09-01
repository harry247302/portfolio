import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../components/footer/Footer'
import { getProjectBySlug } from '../data/projectsData'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const { details } = project

  return (
    <>
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Projects
            </Link>

            <p className="text-primary-500 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Project Details
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">
                {project.subtitle}
              </p>
            )}
            {!project.subtitle && <div className="mb-6" />}

            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-glass dark:shadow-glass-dark backdrop-blur-sm space-y-8">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-3">
                  Overview
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {details?.overview || project.description}
                </p>
              </div>

              {details?.responsibilities && (
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-3">
                    Key Contributions
                  </h2>
                  <ul className="space-y-2">
                    {details.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-primary-500 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-3">
                  Features
                </h2>
                {details?.featureSections ? (
                  <div className="space-y-6">
                    {details.featureSections.map((section) => (
                      <div key={section.title}>
                        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                          {section.title}
                        </h3>
                        {section.description && (
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-2">
                            {section.description}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2"
                            >
                              <span className="text-primary-500 mt-0.5">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className={`text-sm flex items-start gap-2 ${
                          project.highlightFeatures?.includes(f)
                            ? 'text-primary-600 dark:text-primary-400 font-medium'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <span className="text-primary-500 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {project.tags && (
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-3">
                    Project Tags
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-3">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.live) && (
                <div className="flex flex-wrap gap-3 pt-2">
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
              )}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function ArrowLeftIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LiveIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}
