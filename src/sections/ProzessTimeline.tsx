'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Container } from '@/components/Container'
import { PROCESS_STEPS } from '@/lib/content/process'
import type { ProcessStep } from '@/types/content'

const EASE = [0.16, 1, 0.3, 1] as const

export function ProzessTimeline() {
  const [activeStep, setActiveStep] = useState<ProcessStep | null>(null)

  function handleStepClick(step: ProcessStep) {
    setActiveStep(prev => prev?.number === step.number ? null : step)
  }

  const activeIndex = activeStep
    ? PROCESS_STEPS.findIndex(s => s.number === activeStep.number)
    : -1

  return (
    <section className="relative bg-transparent pb-[clamp(4rem,8vw,7rem)]">
      <Container>
        {/* Scrollable wrapper — always one row */}
        <div className="overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
          <div className="relative min-w-[640px]">

            {/* Animated connecting line */}
            <motion.div
              className="absolute left-[10%] right-[10%] top-[1.75rem] h-px bg-gradient-to-r from-violet via-lavender to-lavender/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.3, delay: 0.2, ease: EASE }}
              style={{ transformOrigin: 'left' }}
            />

            {/* Step buttons */}
            <div className="grid grid-cols-5">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = activeStep?.number === step.number
                return (
                  <motion.button
                    key={step.number}
                    type="button"
                    onClick={() => handleStepClick(step)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.15 + index * 0.07, ease: EASE }}
                    className="group flex flex-col items-center gap-3 px-2 pb-1 pt-0 text-center"
                  >
                    {/* Dot on the line */}
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-250 ${
                        isActive
                          ? 'border-violet bg-violet shadow-[0_0_0_4px_rgba(79,19,117,0.15)]'
                          : 'border-lavender/40 bg-cream/90 group-hover:border-lavender group-hover:bg-cream'
                      }`}
                    >
                      <span
                        className={`font-mono text-[0.875rem] font-medium tracking-[0.1em] transition-colors duration-250 ${
                          isActive ? 'text-cream' : 'text-violet/70 group-hover:text-violet'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className={`font-display block text-[0.9375rem] leading-[1.25] transition-colors duration-200 ${
                          isActive ? 'text-violet' : 'text-text group-hover:text-violet'
                        }`}
                      >
                        {step.title}
                      </span>
                      <span className="font-mono block text-[0.5rem] uppercase tracking-[0.16em] text-violet/40">
                        Phase {step.number}
                      </span>
                      <span
                        className={`mt-1 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[0.75rem] font-semibold tracking-[0.04em] transition-all duration-200 ${
                          isActive
                            ? 'border-violet bg-violet text-cream'
                            : 'border-violet/30 bg-cream text-violet group-hover:border-violet group-hover:bg-violet/10'
                        }`}
                      >
                        {isActive ? '▲ Schließen' : 'Details ↓'}
                      </span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {activeStep && (
            <motion.div
              key={activeStep.number}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.32, ease: EASE }}
              className="mt-4"
            >
              {/* Pointer arrow aligned to active step */}
              <div
                className="flex"
                style={{ paddingLeft: `calc(${activeIndex * 20 + 10}% - 0.375rem)` }}
              >
                <span
                  aria-hidden
                  className="block h-0 w-0 border-b-[6px] border-l-[6px] border-r-[6px] border-b-white/[0.18] border-l-transparent border-r-transparent"
                />
              </div>

              <div className="card-glass rounded-[var(--radius-card)] p-[clamp(1.5rem,4vw,2.5rem)]">
                <div className="grid gap-8 lg:grid-cols-[auto_1fr]">

                  {/* Step number — large watermark */}
                  <div className="hidden select-none lg:block">
                    <span className="font-display text-[5rem] leading-none text-violet/12">
                      {activeStep.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-violet/50">
                        Phase {activeStep.number}
                      </span>
                      <span className="h-px w-6 bg-lavender/30" />
                    </div>
                    <h3 className="font-display text-[1.5rem] leading-[1.2] text-text">
                      {activeStep.title}
                    </h3>
                    <p className="mt-3 text-[1.0625rem] leading-[1.65] text-text-muted">
                      {activeStep.description}
                    </p>
                    <p className="mt-4 border-t border-white/10 pt-4 text-[0.9375rem] leading-[1.65] text-text-muted">
                      {activeStep.detail}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
