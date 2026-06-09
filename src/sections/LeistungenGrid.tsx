'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { SERVICES } from '@/lib/content/services'

const EASE = [0.16, 1, 0.3, 1] as const

export function LeistungenGrid() {
  return (
    <section className="relative bg-transparent pb-[clamp(5rem,10vw,8rem)]">
      <Container>
        <div className="flex flex-col gap-[clamp(5rem,10vw,8rem)]">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1

            const textBlock = (
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: 0.05, ease: EASE }}
                className="flex flex-col justify-center"
              >
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-violet/50">
                  Leistung {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display mt-4 text-[clamp(1.875rem,4vw,2.75rem)] leading-[1.1] text-text">
                  {service.title}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.7] text-text-muted">
                  {service.description}
                </p>
              </motion.div>
            )

            const glassBlock = (
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
                className="group relative rounded-[var(--radius-card)] card-glass p-[clamp(1.75rem,4vw,2.5rem)]"
              >
                {/* Bauplan-Eckmarken */}
                <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-lavender/25 transition-colors duration-300 group-hover:border-lavender/55" />
                <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-lavender/25 transition-colors duration-300 group-hover:border-lavender/55" />

                <p className="text-[1.0625rem] font-medium leading-[1.55] text-violet">
                  {service.summary}
                </p>
                <ul className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span aria-hidden className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
                      <span className="text-[0.9375rem] leading-[1.6] text-text">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )

            return (
              <article key={service.slug} className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                {isReversed ? (
                  <>
                    <div className="order-2 lg:order-1">{glassBlock}</div>
                    <div className="order-1 lg:order-2">{textBlock}</div>
                  </>
                ) : (
                  <>
                    <div>{textBlock}</div>
                    <div>{glassBlock}</div>
                  </>
                )}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
