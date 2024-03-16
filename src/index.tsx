import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Budget'
import App2 from '../src/App2'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
)
