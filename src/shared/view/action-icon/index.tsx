import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import { Icon } from '../icon'
import s from './index.module.css'

export interface ActionIconProps {
  path: ComponentProps<typeof Icon>['path']
  onPress?(): void
}

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ path, onPress }, forwardedRef) => {
    return (
      <button ref={forwardedRef} onClick={onPress} className={s.button}>
        <Icon path={path} />
      </button>
    )
  }
)
