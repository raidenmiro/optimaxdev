import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './configure-test.js'
  },
  plugins: [tsConfigPaths()]
})
