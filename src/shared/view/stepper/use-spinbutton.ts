import type { PointerEvent } from 'react'
import { useCallback, useEffect, useMemo, useRef } from 'react'

import type { StepperProps } from '.'
import { useCounter } from './use-counter'

export function useSpinbutton({
  onIncrease,
  onDecrease,
  onSwitchToMax,
  onSwitchToMin,
  formatValue = (v: number) => String(v),
  ...range
}: StepperProps) {
  const { counter, handlers } = useCounter(range)

  const pinchTimer = useRef<number>()
  const inputRef = useRef<HTMLInputElement>(null)

  const stepChange = useMemo(() => {
    return {
      ArrowUp() {
        handlers.next()
        onIncrease?.(counter)
      },
      ArrowDown() {
        handlers.prev()
        onDecrease?.(counter)
      },
      Home() {
        handlers.toMin()
        onSwitchToMin?.(counter)
      },
      End() {
        handlers.toMax()
        onSwitchToMax?.(counter)
      }
    }
  }, [counter, handlers, onDecrease, onIncrease, onSwitchToMax, onSwitchToMin])

  // sync with counter state
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute('aria-valuenow', String(counter))
    }
  }, [counter])

  useEffect(() => {
    const timer = pinchTimer.current
    const ref = inputRef.current

    if (!ref) return

    const listener = (e: KeyboardEvent) => {
      if (isSpecial(e)) return

      if (e.key in stepChange) {
        e.preventDefault()
        // safe cast
        const onceCallback = stepChange[e.key as keyof typeof stepChange]
        onceCallback()
      }
    }

    ref.addEventListener('keydown', listener)
    return () => {
      ref.removeEventListener('keydown', listener)
      clearTimeout(timer)
    }
  }, [stepChange])

  const onIncreaseValue = useCallback(
    (delay: number) => {
      clearTimeout(pinchTimer.current)

      onButtonPressed(inputRef.current!)
      handlers.next()
      onIncrease?.(counter)

      pinchTimer.current = setTimeout(() => {
        onIncreaseValue(40)
      }, delay)
    },
    [counter, handlers, onIncrease]
  )

  const onDecreaseValue = useCallback(
    (delay: number) => {
      clearTimeout(pinchTimer.current)

      onButtonPressed(inputRef.current!)
      handlers.prev()
      onDecrease?.(counter)

      pinchTimer.current = setTimeout(() => {
        onDecreaseValue(40)
      }, delay)
    },
    [counter, handlers, onDecrease]
  )

  return {
    stepperProps: {
      ref: inputRef,
      value: formatValue(counter)
    },
    buttons: {
      increaseProps: {
        onPointerDown: (e: PointerEvent) => {
          e.preventDefault()

          if (holdingSupports(e)) {
            onIncreaseValue(400)
          }
        },
        onPointerUp: () => {
          clearTimeout(pinchTimer.current)
        },
        onPointerLeave: () => {
          clearTimeout(pinchTimer.current)
        }
      },
      decreaseProps: {
        onPointerDown: (e: PointerEvent) => {
          e.preventDefault()

          if (holdingSupports(e)) {
            onDecreaseValue(400)
          }
        },
        onPointerUp: () => {
          clearTimeout(pinchTimer.current)
        },
        onPointerLeave: () => {
          clearTimeout(pinchTimer.current)
        }
      }
    }
  }
}

function isSpecial(e: KeyboardEvent) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey
}

function onButtonPressed(input: HTMLInputElement) {
  if (document.activeElement !== input) {
    input.focus()
  }
}

function holdingSupports(e: PointerEvent) {
  return e.isPrimary
}
