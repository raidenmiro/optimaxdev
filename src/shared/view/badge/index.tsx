import type { ReactNode } from 'react'
import { forwardRef } from 'react'

import s from './index.module.css'

export interface BadgeProps {
  startIcon?: ReactNode
  label: string
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ label, startIcon, ...props }, ref) => {
    return (
      <span ref={ref} className={s.badge} {...props}>
        {startIcon && <span>{startIcon}</span>}
        {label}
      </span>
    )
  }
)
Badge.displayName = 'View.Badge'
