import { storage } from '../storage'

const MEDIA_DARK = '(prefers-color-scheme: dark)'
const SAVE_KEY = 'ui-theme'

enum ColorScheme {
  Light = 'light',
  Dark = 'dark'
}

export const colorScheme = {
  get() {
    const cached = storage.get<ColorScheme>(SAVE_KEY)

    if (!cached) {
      const isDark = window.matchMedia(MEDIA_DARK).matches
      return isDark ? ColorScheme.Dark : ColorScheme.Light
    }

    return cached
  },
  set(next: ColorScheme) {
    document.documentElement.style.setProperty('--color-scheme', next)
  },
  systemPrefers() {
    const listener = (e: MediaQueryListEvent) => {
      const isDark = e.matches
      colorScheme.set(isDark ? ColorScheme.Dark : ColorScheme.Light)
    }

    window.matchMedia(MEDIA_DARK).addEventListener('change', listener)
  }
}
