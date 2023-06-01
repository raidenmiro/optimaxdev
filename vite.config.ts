import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), tsConfigPaths()]
})
