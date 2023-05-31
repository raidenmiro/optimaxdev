import type { MutableRefObject } from 'react'
import { useLayoutEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T
): T {
  const ref: MutableRefObject<{
    stableFn: T
    callback: T
  }> = useRef({
    stableFn: ((...args) => ref.current.callback(...args)) as T,
    callback
  })

  useLayoutEffect(() => {
    ref.current.callback = callback
  })

  return ref.current.stableFn
}
