import cc from 'classcat'
import { forwardRef } from 'react'

import { Field } from '../field'
import { View } from '../generic'
import { Icon } from '../icon'
import s from './index.module.css'
import type { StepperA11yProps } from './use-a11y'
import { useA11y } from './use-a11y'
import { useSpinbutton } from './use-spinbutton'

export interface StepperProps extends StepperA11yProps {
  onIncrease?(v: number): void
  onDecrease?(v: number): void
  onSwitchToMax?(v: number): void
  onSwitchToMin?(v: number): void
  formatValue?(value: number): string
  className?: string
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (props, ref) => {
    const { stepperProps, buttons } = useSpinbutton(props)
    const a11y = useA11y(props)

    return (
      <View ref={ref} className={cc([props.className, s.stepper])}>
        <button
          className={s.control}
          data-spin="decrease"
          aria-label="Decrease value"
          {...buttons.decreaseProps}>
          <Icon path="sprite/minus" />
        </button>
        <Field readOnly {...stepperProps} {...a11y.stepperA11yProps} />
        <button
          className={s.control}
          data-spin="increase"
          aria-label="Increase value"
          {...buttons.increaseProps}>
          <Icon path="sprite/plus" />
        </button>
      </View>
    )
  }
)
