'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { FAQS } from '@/lib/content/process'
import { CTA } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

export function ProzessFAQ() {
  return (
    <section className="relative bg-cream-deep/80 py-[clamp(4.5rem,9vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Häufig gestellte Fragen"
          title="Was Unternehmen vor dem ersten Gespräch wissen wollen"
          description="Drei Fragen begegnen mir besonders oft, direkt und ehrlich beantwortet, statt schöngeredet. Dazu zwei weitere, die im Erstgespräch erfahrungsgemäß ohnehin aufkommen."
        />

        <div className="mt-12 flex flex-col divide-y divide-line border-y border-line lg:max-w-[54rem]">
          {FAQS.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: EASE }}
              className="group py-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.0625rem] font-semibold leading-[1.4] text-text marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden
                  className="mt-[0.125em] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-cream text-[1rem] leading-none text-violet transition-transform duration-300 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[60ch] text-[0.9375rem] leading-[1.65] text-text-muted">{faq.answer}</p>
            </motion.details>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
        >
          <p className="max-w-[44ch] text-[1rem] leading-[1.6] text-text-muted">
            Etwas anderes lässt Ihnen keine Ruhe? Das lässt sich am besten in einem kurzen, unverbindlichen Gespräch klären, nicht über ein FAQ.
          </p>
          <Button href={CTA.href} size="md" className="shrink-0">
            {CTA.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
