export function compareByDate(a: Date, b: Date) {
  const n1 = new Date(a)
  const n2 = new Date(b)

  return n2.getTime() - n1.getTime()
}
