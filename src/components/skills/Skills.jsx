import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const categories = [
  {
    title: 'Frontend',
    items: ['JavaScript', 'React.js', 'Redux', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'CI/CD', 'Nginx', 'PM2'],
  },
  {
    title: 'Deployment',
    items: ['VPS', 'AWS EC2', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Skills" title="Technologies I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: catIndex * 0.08 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-glass dark:shadow-glass-dark backdrop-blur-sm hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-600 dark:text-slate-400 text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
