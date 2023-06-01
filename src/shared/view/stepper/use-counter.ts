import { useCallback, useState } from 'react'

import { floatFix } from '~/shared/lib/arithmetic'

import type { StepperProps } from '.'

type Config = Pick<StepperProps, 'max' | 'min' | 'step'> & {
  value?: number
}

export function useCounter({ min, max, step, value }: Config) {
  const [counter, setCounter] = useState(() => value ?? min)

  const next = useCallback(() => {
    setCounter((prev) => floatFix(Math.min(prev + step, max)))
  }, [max, step])

  const prev = useCallback(() => {
    setCounter((prev) => floatFix(Math.max(prev - step, min)))
  }, [min, step])

  const toMax = useCallback(() => {
    setCounter(max)
  }, [max])

  const toMin = useCallback(() => {
    setCounter(min)
  }, [min])

  return {
    counter,
    handlers: {
      next,
      prev,
      toMin,
      toMax
    }
  }
}
