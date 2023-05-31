/**
 * This function prevent float arithmetic with `0.9999999`
 */
export function floatStringify(value: number): number {
  return Math.round(Number.parseFloat((value * 10 ** 2).toFixed(2))) / 10 ** 2
}

export function clamp(value: number, max: number, min: number) {
  return Math.max(min, Math.min(max, value))
}
