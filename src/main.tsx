import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Application } from './application'

const root = document.querySelector<HTMLElement>('#root')

if (root) {
  serverRunner().then(() =>
    ReactDOM.createRoot(root).render(
      <StrictMode>
        <Application />
      </StrictMode>
    )
  )
}

async function serverRunner() {
  const { worker } = await import('./shared/api/mocks/handlers')
  worker.start()
}
