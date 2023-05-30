const IS_SUPPORT_LS = typeof localStorage !== 'undefined'

export const storage = {
  get<Done>(key: string): Done | null {
    if (!IS_SUPPORT_LS) return null

    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : value
  },
  set(key: string, data: unknown) {
    if (!IS_SUPPORT_LS) return
    localStorage.setItem(key, JSON.stringify(data))
  },
  subscribe(cb: (e: StorageEvent) => void) {
    if (IS_SUPPORT_LS && typeof addEventListener !== 'undefined') {
      addEventListener('storage', cb)
    }

    return () => {
      if (typeof removeEventListener !== 'undefined') {
        removeEventListener('storage', cb)
      }
    }
  }
}
