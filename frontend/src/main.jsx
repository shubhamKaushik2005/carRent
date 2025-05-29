import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './views/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Products/> */}
  </StrictMode>,
)
