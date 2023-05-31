export interface StepperA11yProps {
  step: number
  max: number
  min: number
}

// @see https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/
export function useA11y({ step, max, min }: StepperA11yProps) {
  return {
    buttonA11yProps: {
      tabIndex: -1
    },
    stepperA11yProps: {
      step,
      'type': 'text',
      'inputMode': 'numeric',
      'role': 'spinbutton',
      'aria-valuemax': max,
      'aria-valuemin': min,
      'autoComplete': 'off'
    } as const
  }
}
