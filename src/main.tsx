import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './Router' // Se cambio 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter /> {/* Se le cambio el app normal por este, ya que se uso el React Router */}
  </StrictMode>,
)
