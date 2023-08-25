import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='bg-zinc-50 text-lg'>
      <App />
    </main>
  </React.StrictMode>,
)
