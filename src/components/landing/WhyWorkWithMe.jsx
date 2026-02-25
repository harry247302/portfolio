import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Ship on time',
    description: 'Clear communication and scope. I deliver production-ready features with realistic timelines.',
  },
  {
    title: 'Production mindset',
    description: 'From auth and validation to error handling and deployment — built for real users and scale.',
  },
  {
    title: 'Full stack ownership',
    description: 'One person across frontend, backend, database, and DevOps. Fewer handoffs, faster iteration.',
  },
  {
    title: 'Maintainable code',
    description: 'Clean structure, consistent patterns, and documentation so your team can take over or extend easily.',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-14"
        >
          <p className="text-primary-500 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Why Work With Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
            Reliable, end-to-end execution
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
