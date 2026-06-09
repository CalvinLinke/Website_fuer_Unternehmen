import { type ElementType, type ReactNode } from 'react'

type ContainerProps = {
  as?: ElementType
  children: ReactNode
  className?: string
}

export function Container({ as: Tag = 'div', children, className = '' }: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1240px] px-[clamp(1.25rem,5vw,3rem)] ${className}`}
    >
      {children}
    </Tag>
  )
}
