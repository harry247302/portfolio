const techs = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Redux',
  'Tailwind CSS',
  'Docker',
  'CI/CD',
  'Nginx',
  'PM2',
  'AWS EC2',
  'Vercel',
  'JavaScript',
  'REST APIs',
]

const duplicate = [...techs, ...techs]

export default function TechStackStrip() {
  return (
    <section
      aria-label="Tech stack"
      className="py-8 md:py-10 border-y border-slate-200/80 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden"
    >
      <div className="flex animate-scroll-strip whitespace-nowrap gap-10 md:gap-14">
        {duplicate.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base shrink-0"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
