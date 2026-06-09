import Link from 'next/link'
import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'onDark'
type Size = 'sm' | 'md'

const baseClasses =
  'relative group inline-flex items-center justify-center gap-2 rounded-none font-semibold text-[0.9375rem] tracking-[0.01em] transition-[background-color,color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet'

const sizeClasses: Record<Size, string> = {
  sm: 'px-7 py-[0.875rem]',
  md: 'px-9 py-[1.125rem]',
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-violet text-cream shadow-[var(--shadow-button)] hover:bg-lavender hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]',
  secondary:
    'border-[1.5px] border-text bg-transparent text-text hover:bg-lavender-mist hover:-translate-y-0.5',
  onDark: 'bg-cream text-ink hover:bg-lavender-soft hover:-translate-y-0.5',
}

type ButtonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
  target?: string
  rel?: string
  'aria-label'?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  type = 'button',
  onClick,
  disabled,
  target,
  rel,
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'pointer-events-none opacity-50' : ''
  } ${className}`

  const corners = (
    <>
      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-3 w-3 origin-top-left scale-0 border-l border-t border-current opacity-0 transition-[transform,opacity] duration-200 group-hover:scale-100 group-hover:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-3 w-3 origin-top-right scale-0 border-r border-t border-current opacity-0 transition-[transform,opacity] duration-200 group-hover:scale-100 group-hover:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 origin-bottom-left scale-0 border-b border-l border-current opacity-0 transition-[transform,opacity] duration-200 group-hover:scale-100 group-hover:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 origin-bottom-right scale-0 border-b border-r border-current opacity-0 transition-[transform,opacity] duration-200 group-hover:scale-100 group-hover:opacity-100" />
    </>
  )

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes} {...rest}>
        {corners}
        <span className="relative z-10">{children}</span>
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {corners}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
