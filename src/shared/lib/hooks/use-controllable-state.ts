import { useCallback, useEffect, useRef, useState } from 'react'

import { useCallbackRef } from './use-stable-ref'

export function useControllableState<T>(config: {
  value?: T
  onChange: (value: T) => void
  defaultValue: T
}) {
  const { value, onChange, defaultValue } = config

  const [uncontrolledState, setUncontrolledState] = useUncontrolledState(
    defaultValue,
    onChange
  )

  const isControlled = typeof value === 'undefined'
  const stateValue = isControlled ? uncontrolledState : value
  const handleChange = useCallbackRef(onChange)

  const setNext = useCallback(
    (next: T) => {
      if (isControlled) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const setter = next as (value: any) => T
        const value = typeof next === 'function' ? setter(stateValue) : next
        if (value !== stateValue) handleChange(value as T)
      } else {
        setUncontrolledState(next as T)
      }
    },
    [handleChange, isControlled, setUncontrolledState, stateValue]
  )

  return [stateValue, setNext] as const
}

function useUncontrolledState<T>(
  initValue: T,
  onChange: (value: T) => unknown
) {
  const [uncontrolledState, setNext] = useState(initValue)
  const prevValue = useRef(uncontrolledState)
  const subscribeOnChange = useCallbackRef(onChange)

  useEffect(() => {
    if (prevValue.current !== uncontrolledState) {
      subscribeOnChange(uncontrolledState)
      prevValue.current = uncontrolledState
    }
  }, [subscribeOnChange, uncontrolledState])

  return [uncontrolledState, setNext] as const
}
