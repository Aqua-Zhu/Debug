import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/style.scss'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import Shop from './pages/shop.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
