import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'National Marketing Project Incorporated',
    period: 'Nov 2024 – Present',
    points: [
      'SEO optimized web apps',
      'Admin dashboard',
      'Docker deployment',
      'CI/CD pipelines',
      'Performance optimization',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Aimpex Innovation Private Limited',
    period: 'Oct 2023 – Nov 2024',
    points: [
      'Six-phase CRM',
      'Role-based access control',
      'Franchise panels',
      'Commission management',
      'VPS deployment',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Experience" title="Where I've worked" />

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="relative pl-14 pb-16 last:pb-0"
            >
              <div className="absolute left-3 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 shadow-md top-6" />
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-glass dark:shadow-glass-dark backdrop-blur-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">
                  {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm"
                    >
                      <span className="text-primary-500 mt-1.5 shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
