'use client'

import { motion } from 'motion/react'
import type { ProcessStep as ProcessStepData } from '@/types/content'

const EASE = [0.16, 1, 0.3, 1] as const

type ProcessStepProps = {
  step: ProcessStepData
  index?: number
  className?: string
}

export function ProcessStep({ step, index = 0, className = '' }: ProcessStepProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
      className={`relative overflow-hidden rounded-[var(--radius-card)] card-glass p-8 ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-2 select-none font-mono text-[6rem] font-bold leading-none text-lavender/10"
      >
        {step.number}
      </span>
      <span className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-violet/60">
        Phase {step.number}
      </span>
      <h3 className="font-display mt-3 text-[1.375rem] leading-[1.25] text-text">{step.title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-[1.65] text-text-muted">{step.description}</p>
    </motion.article>
  )
}
