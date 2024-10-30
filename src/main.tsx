import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from './pages/Register'
import './assets/styles/App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Register />
  </StrictMode>,
)
