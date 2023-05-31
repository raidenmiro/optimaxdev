import { useCallback, useEffect, useMemo, useRef } from 'react'

import type { StepperProps } from '.'
import { useCounter } from './use-count'

export function useSpinbutton({
  onIncrease,
  onDecrease,
  onSwitchToMax,
  onSwitchToMin,
  max,
  min,
  step
}: StepperProps) {
  const { counter, handlers } = useCounter({ max, min, step })

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

  useEffect(() => {
    const timer = pinchTimer.current
    const ref = inputRef.current

    if (!ref) return

    const listener = (e: KeyboardEvent) => {
      if (isSpecial(e)) return

      const hotkeys = Object.keys(stepChange)

      if (e.key in hotkeys) {
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
      onIncrease?.(counter)

      pinchTimer.current = setTimeout(() => {
        onIncreaseValue(40)
      }, delay)
    },
    [counter, onIncrease]
  )

  const onDecreaseValue = useCallback(
    (delay: number) => {
      clearTimeout(pinchTimer.current)

      onButtonPressed(inputRef.current!)
      onDecrease?.(counter)

      pinchTimer.current = setTimeout(() => {
        onDecreaseValue(40)
      }, delay)
    },
    [counter, onDecrease]
  )

  return {
    stepperProps: {
      ref: inputRef,
      value: counter
    },
    buttons: {
      increaseProps: {
        onPressStart: (e: PointerEvent) => {
          if (holdingSupports(e)) {
            onIncreaseValue(400)
          }
        },
        onPressEnd: () => {
          clearTimeout(pinchTimer.current)
        }
      },
      decreaseProps: {
        onPressStart: (e: PointerEvent) => {
          if (holdingSupports(e)) {
            onDecreaseValue(400)
          }
        },
        onPressEnd: () => {
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
