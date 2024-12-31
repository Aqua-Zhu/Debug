import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/style.scss'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import Shop from './pages/shop.jsx'
{/* 動態設置 basename */ }
const basename = process.env.NODE_ENV === 'production' ? '/Debug/' : '/';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 傳參數 */}
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
