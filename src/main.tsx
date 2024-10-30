import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from './pages/Register'
import './assets/styles/App.css'
import ProgressBar from './components/organisms/ProgressBar'
import { steps } from './utils/steps'
import TitlePage from './components/atoms/TitlePage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TitlePage />
    <ProgressBar steps={steps} />
    <Register />
  </StrictMode>,
)
