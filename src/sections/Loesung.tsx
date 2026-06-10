'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { StatBadge } from '@/components/StatBadge'
import { SOCIAL_PROOF } from '@/lib/constants'

const EASE = [0.16, 1, 0.3, 1] as const

const RESULTS = [
  'Mehr Anfragen von Kunden, die schon wissen, was Sie können — weil die Website das vorher klärt.',
  'Weniger Rückfragen im Erstkontakt, weil Leistungen, Ablauf und Kontaktwege eindeutig sind.',
  'Ein Auftritt, der neben der Konkurrenz nicht untergeht — sondern den ersten Eindruck setzt.',
] as const

export function Loesung() {
  return (
    <section className="relative bg-cream-deep/80 py-[clamp(4rem,9vw,7rem)]">
      <Container>
        <SectionHeading
          eyebrow="Nach dem Relaunch"
          title="Eine Website, die etwas bewirkt"
          align="center"
          className="max-w-[40ch]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mx-auto mt-6 max-w-[60ch] text-center text-[1.0625rem] leading-[1.65] text-text-muted"
        >
          Ein Relaunch lohnt sich nicht, wenn danach dieselben unklaren Inhalte nur in
          einem schöneren Layout stehen. Das habe ich öfter erlebt, als man denkt. Deshalb
          steht am Anfang nicht das Design, sondern eine Frage: Was soll ein Besucher nach
          zehn Sekunden über Ihr Unternehmen wissen?
        </motion.p>

        {/* Wunschergebnisse */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="mt-12 border-t border-line pt-10"
        >
          <ul className="grid gap-5 lg:grid-cols-3 lg:gap-8">
            {RESULTS.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
                <p className="text-[0.9375rem] leading-[1.65] text-text-muted">{point}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="mt-10 flex justify-center"
        >
          <StatBadge value={SOCIAL_PROOF.value} label={SOCIAL_PROOF.label} />
        </motion.div>
      </Container>
    </section>
  )
}
