import { motion } from 'framer-motion'

const items = [
  { label: 'Experience', value: '2+ Years' },
  { label: 'Current Role', value: 'Full Stack Developer' },
  { label: 'Current CTC', value: '₹3.12 LPA' },
  { label: 'Status', value: 'Open to new opportunities' },
]

export default function ProfessionalSnapshot() {
  return (
    <section
      aria-label="Professional snapshot"
      className="py-16 md:py-20 bg-slate-100/60 dark:bg-slate-800/30 border-t border-slate-200/80 dark:border-slate-700/50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-sm backdrop-blur-sm p-6 md:p-8"
        >
          <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-6 text-center">
            Professional Snapshot
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {items.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {label}
                </dt>
                <dd className="text-slate-800 dark:text-slate-200 font-medium">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
