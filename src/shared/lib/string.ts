export function trimByPattern(s: string, template: string) {
  let l = 0,
    r = s.length - 1

  while (l <= r) {
    const head = s[l]
    const tail = s[r]

    if (head === template) {
      l++
    }

    if (tail === template) {
      r--
    }

    if (head !== template && tail !== template) {
      return s.slice(l, r + 1)
    }
  }

  return s
}
