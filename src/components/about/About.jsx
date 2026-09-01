import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const highlights = [
  'CRM Systems',
  'Role-based Authentication',
  'REST APIs',
  'Docker deployment',
  'VPS hosting',
]

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '3+', label: 'Team Collaborations' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="About Me" title="Building software that scales" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a Full Stack Web Developer based in Delhi, India, focused on building robust web applications and APIs. I work across the stack — from React frontends and Node/Express backends to MongoDB/PostgreSQL databases and Docker-based deployments.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in CRM systems, role-based access control, and scalable REST APIs. I've shipped projects with Docker, CI/CD pipelines, and VPS hosting, and I enjoy turning complex requirements into clean, maintainable code.
            </p>
            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1.5 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 text-sm font-medium"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-glass dark:shadow-glass-dark backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
