'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/Container'

const EASE = [0.16, 1, 0.3, 1] as const

const OBSERVATIONS = [
  {
    quote: 'Unsere Homepage ist von 2016 und sieht man ihr auch an.',
    note: 'Eine Aussage, die ich in Erstgesprächen so oder ähnlich regelmäßig höre, meist mit einem entschuldigenden Lächeln dazu.',
  },
  {
    quote: 'Ehrlich gesagt schauen wir da selbst kaum noch rein.',
    note: 'Wenn das eigene Team eine Seite meidet, meidet sie die Kundschaft erst recht.',
  },
  {
    quote: 'Ein Interessent meinte neulich, er hätte uns online gar nicht gefunden.',
    note: 'Kein Einzelfall: oft der Moment, in dem aus einem vagen Gefühl ein konkretes Problem wird.',
  },
]

export function Problem() {
  return (
    <section className="relative bg-transparent py-[clamp(3rem,6vw,5rem)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative lg:sticky lg:top-32 lg:self-start">
            {/* Großes Anführungszeichen als Wasserzeichen */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-4 -top-8 select-none font-display text-[13rem] leading-none text-violet/5"
            >
              „
            </span>

            <span className="relative text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-violet">
              Der Ausgangspunkt
            </span>
            <h2 className="font-display relative mt-4 max-w-[18ch] text-[clamp(1.625rem,3.2vw,2.5rem)] leading-[1.1] text-text">
              Was ich in Erstgesprächen immer wieder höre
            </h2>
            <p className="relative mt-5 max-w-[46ch] text-[1.0625rem] leading-[1.65] text-text-muted">
              Drei Sätze, die in unterschiedlicher Form fast jedes Gespräch begleiten und ziemlich genau zeigen, woran es online tatsächlich hakt.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {OBSERVATIONS.map((item, index) => (
              <motion.div
                key={item.quote}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
                className="rounded-r-[var(--radius-card)] border-l-2 border-lavender/35 bg-white/[0.055] py-4 pl-5 pr-4 [backdrop-filter:blur(22px)_saturate(160%)] sm:pl-6"
              >
                <p className="text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-[1.45] text-text">
                  „{item.quote}"
                </p>
                <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.6] text-text-muted">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
