import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web applications with React frontends, Node/Express backends, and scalable APIs. Clean architecture and maintainable code.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    link: '/projects',
  },
  {
    title: 'Authentication & Role Systems',
    description: 'Secure RBAC, JWT-based auth, and franchise/admin panels. Role-based access control that scales with your product.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    link: '/skills',
  },
  {
    title: 'DevOps & Deployment',
    description: 'Docker, CI/CD pipelines, Nginx, PM2, and VPS hosting. From local to production with reliability and performance in mind.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    link: '/experience',
  },
]

export default function WhatIDo() {
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
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
            End-to-end development that ships
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={card.link}
                className="block h-full p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-lg shadow-slate-200/30 dark:shadow-black/20 backdrop-blur-xl hover:border-primary-200 dark:hover:border-primary-800/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
