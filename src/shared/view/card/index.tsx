import cc from 'classcat'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'

import s from './index.module.css'

export interface CardProps {
  children: ReactNode
  className?: string
}

const Body = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className }, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={cc([className, s.card])}>
        {children}
      </div>
    )
  }
)

export const Card = {
  Body
}
