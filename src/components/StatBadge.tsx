type StatBadgeProps = {
  value: string
  label: string
  surface?: 'onLight' | 'onDark'
  className?: string
}

export function StatBadge({ value, label, surface = 'onLight', className = '' }: StatBadgeProps) {
  const isOnDark = surface === 'onDark'
  const card = isOnDark ? 'border-line bg-cream text-text' : 'border-ink-line bg-ink text-text-on-ink'
  const valueColor = isOnDark ? 'text-violet' : 'text-lavender-soft'
  const labelColor = isOnDark ? 'text-text-muted' : 'text-text-on-ink-muted'

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-[var(--radius-pill)] border px-5 py-3 ${card} ${className}`}
    >
      <span className={`font-display text-[1.375rem] leading-none ${valueColor}`}>{value}</span>
      <span className={`text-[0.8125rem] leading-[1.4] ${labelColor}`}>{label}</span>
    </div>
  )
}
