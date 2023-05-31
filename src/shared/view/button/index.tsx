import cc from 'classcat'
import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import s from './index.module.css'

type BaseProps = ComponentProps<'button'>

export const Button = forwardRef<HTMLButtonElement, BaseProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const classes = cc([s.button, className])

    return (
      <button ref={forwardedRef} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'View.Button'
