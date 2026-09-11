import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Form from './form.jsx'
import Expressions from './Expressions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
    <Expressions />
  </StrictMode>,
)
