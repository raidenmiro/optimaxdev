import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

import config from './config'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  define: config,
  plugins: [react(), tsConfigPaths()]
})
