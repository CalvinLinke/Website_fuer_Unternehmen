'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Container } from '@/components/Container'

const EASE = [0.16, 1, 0.3, 1] as const

export function LeistungenProcess() {
  return (
    <section className="relative bg-cream-deep/80 py-[clamp(3.5rem,7vw,5.5rem)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-line bg-cream p-[clamp(1.75rem,4vw,2.75rem)] sm:flex-row sm:items-center sm:justify-between sm:gap-10"
        >
          <div className="max-w-[40ch]">
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet">
              Neugierig auf den Ablauf?
            </span>
            <p className="mt-3 text-[1.0625rem] leading-[1.65] text-text">
              Diese drei Leistungen sind die Bausteine — der Ablaufplan zeigt, wie sie konkret ineinandergreifen: vom ersten Gespräch bis zum Launch, Schritt für Schritt erklärt.
            </p>
          </div>
          <Link
            href="/prozess"
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-[0.9375rem] font-semibold text-violet transition-colors duration-200 hover:text-lavender"
          >
            Den Ablauf im Detail ansehen
            <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
