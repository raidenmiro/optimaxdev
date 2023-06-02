import cc from 'classcat'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'

import { Field } from '../field'
import { View } from '../generic'
import { Icon } from '../icon'
import s from './index.module.css'
import type { StepperA11yProps } from './use-a11y'
import { useA11y } from './use-a11y'
import { useSpinbutton } from './use-spinbutton'

export interface StepperProps extends StepperA11yProps {
  value?: number
  onIncrease?(v: number): void
  onDecrease?(v: number): void
  onSwitchToMax?(v: number): void
  onSwitchToMin?(v: number): void
  formatValue?(value: number): string
  onChangeValue?(value: number): void
  className?: string
  position?: 'start' | 'center' | 'end'
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ position = 'start', ...props }, ref) => {
    const { stepperProps, buttons } = useSpinbutton(props)
    const a11y = useA11y(props)

    const increaseProps = Object.assign(
      buttons.increaseProps,
      a11y.buttonA11yProps
    )

    const decreaseProps = Object.assign(
      buttons.decreaseProps,
      a11y.buttonA11yProps
    )

    const styles = {
      '--text-position': position
    } as CSSProperties

    return (
      <View
        ref={ref}
        style={styles}
        className={cc([props.className, s.stepper])}>
        <button
          {...decreaseProps}
          className={s.control}
          data-spin="decrease"
          aria-label="Decrease value">
          <Icon path="sprite/minus" />
        </button>
        <Field readOnly {...stepperProps} {...a11y.stepperA11yProps} />
        <button
          {...increaseProps}
          className={s.control}
          data-spin="increase"
          aria-label="Increase value">
          <Icon path="sprite/plus" />
        </button>
      </View>
    )
  }
)
