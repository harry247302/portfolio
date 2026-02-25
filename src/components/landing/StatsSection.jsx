import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 55, damping: 28 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      setDisplay(Math.round(v))
    })
    return () => unsub()
  }, [spring])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 2, suffix: '', label: 'CRM & LMS Domains' },
]

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-500 dark:text-primary-400 mb-2 tabular-nums">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
