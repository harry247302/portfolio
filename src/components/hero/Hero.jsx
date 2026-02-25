import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const techBadges = ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'Tailwind', 'Express', 'Redux']

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.08),transparent)]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.p
            variants={item}
            className="text-primary-600 dark:text-primary-400 font-medium"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-slate-100 tracking-tight"
          >
            Shadab Shaikh
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium"
          >
            Full Stack Developer | React | Node | DevOps
          </motion.p>
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg"
          >
            I build scalable web applications with modern stacks. From CRM systems and REST APIs to Docker deployments and VPS hosting — I turn ideas into production-ready software.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/projects">
              <Button variant="primary" size="lg">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Me
              </Button>
            </Link>
            <Button
              as="a"
              href="/resume.pdf"
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex justify-center gap-4 pt-2"
          >
            <a
              href="https://github.com/harry247302"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:border-primary-300 dark:hover:border-primary-600 transition-colors shadow-glass dark:shadow-glass-dark backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shadab-shaikh-816b762bb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:text-primary-500 hover:border-primary-300 dark:hover:border-primary-600 transition-colors shadow-glass dark:shadow-glass-dark backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="pt-12 flex flex-wrap justify-center gap-3"
          >
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium shadow-glass dark:shadow-glass-dark backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
