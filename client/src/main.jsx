import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UrlContext from './contexts/UrlContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UrlContext>
      <App />
    </UrlContext>
  </StrictMode>,
)
