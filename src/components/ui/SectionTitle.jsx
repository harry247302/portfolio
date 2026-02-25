import { motion } from 'framer-motion'

export default function SectionTitle({ subtitle, title, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 md:mb-16 ${className}`}
    >
      {subtitle && (
        <span className="text-primary-500 dark:text-primary-400 font-medium text-sm uppercase tracking-wider block mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100">
        {title}
      </h2>
    </motion.div>
  )
}
