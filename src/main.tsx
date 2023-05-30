import React from 'react'
import ReactDOM from 'react-dom/client'

import { Application } from './application'

const root = document.querySelector<HTMLElement>('#root')

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  )
}
