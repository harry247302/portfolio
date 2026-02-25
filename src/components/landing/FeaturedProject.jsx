import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const project = {
  title: 'Kamal CRM',
  subtitle: 'Real Estate Management System',
  description: 'Full-featured CRM for real estate with lead lifecycle management, role-based auth, call log tracking, and REST APIs for mobile and web.',
  tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
}

export default function FeaturedProject() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-12"
        >
          <p className="text-primary-500 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Featured Project
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
            Latest work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="relative p-8 md:p-10 rounded-3xl bg-white/90 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-xl shadow-slate-200/40 dark:shadow-black/30 backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Featured
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1">
              {project.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-5">
              {project.subtitle}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm transition-colors"
            >
              View Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
