import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n';
import { BiodataProvider } from './Context/BiodataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BiodataProvider>
        <App />
      </BiodataProvider>
    </BrowserRouter>
  </StrictMode>,
)
