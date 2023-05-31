import { useCallback, useState } from 'react'

import type { StepperProps } from '.'

type Config = Pick<StepperProps, 'max' | 'min' | 'step'>

export function useCounter({ min, max, step }: Config) {
  const [counter, setCounter] = useState(min)

  const next = useCallback(() => {
    setCounter((prev) => Math.min(prev + step, max))
  }, [max, step])

  const prev = useCallback(() => {
    setCounter((prev) => Math.max(prev - step, min))
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
