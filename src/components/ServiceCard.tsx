'use client'

import { motion } from 'motion/react'
import type { Service } from '@/types/content'

const EASE = [0.16, 1, 0.3, 1] as const

type ServiceCardProps = {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
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
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-lavender/25 transition-colors duration-300 group-hover:border-lavender/55" />
      <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-lavender/25 transition-colors duration-300 group-hover:border-lavender/55" />

      <span aria-hidden className="font-display text-[3.25rem] leading-none text-violet/10">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="font-display mt-4 text-[1.625rem] leading-[1.2] text-text">{service.title}</h3>
      <p className="mt-3 text-[1.0625rem] font-medium leading-[1.5] text-violet">{service.summary}</p>
      <p className="mt-3 text-[1.0625rem] leading-[1.65] text-text-muted">{service.description}</p>
      <ul className="mt-6 flex flex-col gap-3 border-t border-lavender/20 pt-6">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-[1.55] text-text">
            <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
