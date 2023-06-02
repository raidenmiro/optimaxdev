import cc from 'classcat'
import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import { useControllableState } from '~/shared/lib/hooks/use-controllable-state'

import { Icon } from '../icon'
import s from './index.module.css'

type BaseProps = ComponentProps<'input'>

export interface CheckboxProps extends BaseProps {
  checked?: boolean
  onValueChanged?(checked: boolean): void
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked = false, onValueChanged, ...props }, forwardedRef) => {
    const [checkedValue, setChecked] = useControllableState({
      onChange: onValueChanged,
      defaultValue: checked
    })

    const handlePressed = () => {
      setChecked((checked) => !checked)
    }

    return (
      <span className={s.checkbox}>
        <button
          role="checkbox"
          aria-checked={checkedValue}
          className={s.button}
          value={checkedValue ? 'on' : 'off'}
          onClick={handlePressed}>
          {checkedValue && <Icon path="sprite/check" />}
        </button>
        <input
          {...props}
          type="checkbox"
          ref={forwardedRef}
          tabIndex={-1}
          aria-hidden="true"
          className={cc([s.input, className])}
        />
      </span>
    )
  }
)
