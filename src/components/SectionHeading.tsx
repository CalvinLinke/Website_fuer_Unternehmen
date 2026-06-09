'use client'

import { motion } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as const

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const eyebrowColor = tone === 'dark' ? 'text-lavender-soft' : 'text-violet'
  const titleColor = tone === 'dark' ? 'text-text-on-ink' : 'text-text'
  const descriptionColor = tone === 'dark' ? 'text-text-on-ink-muted' : 'text-text-muted'
  const alignClasses = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-[44ch] flex-col ${alignClasses} ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`text-[0.8125rem] font-semibold uppercase tracking-[0.14em] ${eyebrowColor}`}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className={`font-display mt-4 text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.1] ${titleColor}`}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className={`mt-5 text-[1.0625rem] leading-[1.65] ${descriptionColor}`}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}
