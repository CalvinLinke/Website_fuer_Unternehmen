export function PlatzhalterHinweis() {
  return (
    <div
      role="note"
      className="flex flex-col gap-2 rounded-[var(--radius-card)] border-[1.5px] border-violet/25 bg-lavender-mist px-6 py-5 text-violet sm:flex-row sm:items-start sm:gap-4"
    >
      <span className="inline-flex w-fit shrink-0 items-center rounded-[var(--radius-pill)] bg-violet px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-cream">
        Platzhalter
      </span>
      <p className="text-[0.9375rem] leading-[1.65]">
        Die rechtlich bindenden Inhalte dieser Seite sind Beispieltexte zur Veranschaulichung und
        ersetzen keine Rechtsberatung. Vor der Veröffentlichung sollten sie durch einen Anwalt
        oder eine Anwältin geprüft und durch rechtsverbindliche Inhalte ersetzt werden — die
        Kontakt- und Stammdaten auf dieser Seite sind hingegen real.
      </p>
    </div>
  )
}
