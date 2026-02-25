import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white border-primary-500 shadow-lg shadow-primary-500/25',
  secondary: 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600',
  outline: 'bg-transparent hover:bg-primary-500/10 text-primary-600 dark:text-primary-400 border-2 border-primary-500',
  ghost: 'bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 backdrop-blur-sm',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  onClick,
  className = '',
  ...props
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
  }

  const classes = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ${variants[variant]} ${sizeClasses[size]} ${className}`

  const Component = as === 'a' ? motion.a : motion.button

  const compProps = as === 'a'
    ? { href, target: href?.startsWith('http') ? '_blank' : undefined, rel: href?.startsWith('http') ? 'noopener noreferrer' : undefined }
    : { onClick, type: 'button' }

  return (
    <Component
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...compProps}
      {...props}
    >
      {children}
    </Component>
  )
}
