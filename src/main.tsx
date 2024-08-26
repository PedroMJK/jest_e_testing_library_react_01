import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import App02 from './teste02/App02.tsx'
import App03 from './teste03/App03.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App02 />
    <App03 />
  </StrictMode>,
)
