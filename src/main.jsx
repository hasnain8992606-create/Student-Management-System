import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Index from './Pages/Index.jsx'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <Index/>
    // <Home/>
    <App/>
  // </StrictMode>,
)
