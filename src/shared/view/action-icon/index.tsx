import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import { Icon } from '../icon'
import s from './index.module.css'

export interface ActionIconProps {
  path: ComponentProps<typeof Icon>['path']
}

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ path }, forwardedRef) => {
    return (
      <button ref={forwardedRef} className={s.button}>
        <Icon path={path} />
      </button>
    )
  }
)
