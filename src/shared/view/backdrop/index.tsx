import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import s from './index.module.css'

type BaseProps = ComponentProps<'picture'>

export const Backdrop = forwardRef<HTMLPictureElement, BaseProps>(
  (props, forwardedRef) => {
    return (
      <picture className={s.backdrop} ref={forwardedRef} {...props}>
        <img src="/backdrop.webp" alt="backdrop" />
      </picture>
    )
  }
)
Backdrop.displayName = 'View.Backdrop'
