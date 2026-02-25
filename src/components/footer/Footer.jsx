import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {year} Shadab Shaikh. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
