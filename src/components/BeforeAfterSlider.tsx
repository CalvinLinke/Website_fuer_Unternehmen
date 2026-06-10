'use client'

import Image from 'next/image'
import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }, [])

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    updatePosition(event.clientX)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return
    updatePosition(event.clientX)
  }

  return (
    <div className="mt-6 overflow-hidden rounded-[var(--radius-card)] border border-line">
      {/* Browser-Rahmen */}
      <div className="flex items-center gap-1.5 border-b border-line bg-cream-deep px-3 py-2">
        <span aria-hidden className="h-2 w-2 rounded-full bg-line" />
        <span aria-hidden className="h-2 w-2 rounded-full bg-line" />
        <span aria-hidden className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 font-mono text-[0.625rem] text-text-muted">vorher–nachher.beispiel</span>
      </div>

      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        className="relative aspect-[16/9] touch-none select-none"
      >
        <Image
          src="/alt.png"
          alt="Beispiel einer überarbeiteten Website, klar strukturiert"
          fill
          unoptimized
          className="object-cover object-top"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image
            src="/neu.png"
            alt="Beispiel einer veralteten Website, dicht und unübersichtlich"
            fill
            unoptimized
            className="object-cover object-top"
          />
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-sm bg-[#3b4a5a]/80 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-white">
          Vorher
        </span>
        <span className="absolute right-3 top-3 rounded-sm bg-cream/80 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-violet">
          Nachher
        </span>

        {/* Schieberegler */}
        <div className="absolute inset-y-0 w-px cursor-ew-resize bg-violet" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet bg-cream">
            <span className="font-mono text-[0.625rem] text-violet">↔</span>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Vergleich vorher/nachher verschieben"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  )
}
