'use client'

import { motion } from 'motion/react'
import type { Testimonial } from '@/types/content'

const EASE = [0.16, 1, 0.3, 1] as const

type TestimonialCardProps = {
  testimonial: Testimonial
  index?: number
  label?: string
  staticDisplay?: boolean
}

export function TestimonialCard({
  testimonial,
  index = 0,
  label = 'Typische Rückmeldung',
  staticDisplay = false,
}: TestimonialCardProps) {
  const enterProps = staticDisplay
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.7, delay: index * 0.08, ease: EASE },
      }

  return (
    <motion.figure
      {...enterProps}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-[var(--radius-card)] card-glass p-[clamp(1.75rem,4vw,2.5rem)]"
    >
      {/* Bauplan Eckmarken */}
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-lavender/25 transition-colors duration-300 group-hover:border-lavender/55" />
      <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-lavender/25 transition-colors duration-300 group-hover:border-lavender/55" />

      <span className="inline-flex w-fit items-center rounded-[var(--radius-pill)] border border-lavender/25 bg-lavender/10 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-violet">
        {label}
      </span>
      <blockquote className="font-display mt-6 text-[1.375rem] leading-[1.4] text-text">
        „{testimonial.quote}"
      </blockquote>
      <figcaption className="mt-6 border-t border-lavender/20 pt-5">
        <p className="text-[0.9375rem] font-semibold text-text">{testimonial.attribution}</p>
        <p className="mt-1 text-[0.875rem] leading-[1.5] text-text-muted">{testimonial.context}</p>
      </figcaption>
    </motion.figure>
  )
}
