import Image from 'next/image'
import Link from 'next/link'

const RATIO = 1520 / 2688

const SIZES = {
  default: { width: 220, height: Math.round(220 * RATIO) },
  compact: { width: 130, height: Math.round(130 * RATIO) },
  hero:    { width: 280, height: Math.round(280 * RATIO) },
} as const

type LogoProps = {
  variant?: keyof typeof SIZES
  priority?: boolean
  className?: string
}

export function Logo({ variant = 'default', priority, className }: LogoProps) {
  const { width, height } = SIZES[variant]

  return (
    <Link
      href="/"
      aria-label="Website für Unternehmen · zur Startseite"
      className={className}
    >
      <Image
        src="/logo.png"
        alt="Website für Unternehmen"
        width={width}
        height={height}
        priority={priority}
        unoptimized
        style={{ width, height, objectFit: 'contain' }}
      />
    </Link>
  )
}
