import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-primary-500/10 to-primary-600/5 dark:from-primary-500/15 dark:to-primary-600/10 border border-primary-200/80 dark:border-primary-800/50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(14,165,233,0.08),transparent)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(14,165,233,0.12),transparent)]" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Let's build something together
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto mb-8">
              Have a project in mind? I'm open to new opportunities and freelance work. Get in touch and we can discuss your next product or feature.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold shadow-lg shadow-primary-500/25 transition-all hover:shadow-primary-500/40"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
