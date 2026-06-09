'use client'

import { motion } from 'motion/react'
import type { CaseStudy } from '@/types/content'

const EASE = [0.16, 1, 0.3, 1] as const

type CaseStudyCardProps = {
  study: CaseStudy
  index?: number
}

export function CaseStudyCard({ study, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-[var(--radius-card)] card-glass p-[clamp(1.75rem,4vw,2.5rem)]"
    >
      {/* Bauplan Eckmarken */}
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-lavender/20 transition-colors duration-300 group-hover:border-lavender/40" />
      <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-lavender/20 transition-colors duration-300 group-hover:border-lavender/40" />

      <span className="inline-flex w-fit items-center rounded-[var(--radius-pill)] border border-lavender/25 bg-lavender/10 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-violet">
        Anonymisiertes Beispiel
      </span>
      <h3 className="font-display mt-5 text-[1.5rem] leading-[1.25] text-text">{study.archetype}</h3>
      <p className="mt-3 text-[1.0625rem] leading-[1.6] text-text-muted">{study.context}</p>
      <dl className="mt-6 grid gap-5 border-t border-lavender/20 pt-6 sm:grid-cols-2">
        <div>
          <dt className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-violet">
            Ausgangslage
          </dt>
          <dd className="mt-2 text-[0.9375rem] leading-[1.55] text-text">{study.challenge}</dd>
        </div>
        <div>
          <dt className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-violet">Ergebnis</dt>
          <dd className="mt-2 text-[0.9375rem] leading-[1.55] text-text">{study.outcome}</dd>
        </div>
      </dl>
      <p className="font-display mt-6 text-[1.625rem] leading-[1.2] text-lavender">{study.metric}</p>
    </motion.article>
  )
}
