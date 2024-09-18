import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/uI/sonner.jsx'
import { SocketProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>

  <SocketProvider>
    <App />
    <Toaster className="bg-slate-900" closeButton />

    </SocketProvider>
  // </StrictMode>,
)
