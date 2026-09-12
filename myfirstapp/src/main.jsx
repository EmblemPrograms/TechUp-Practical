import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Form from './form.jsx'
// import Expressions from './Expressions.jsx'
// import Calc from './Calc.jsx'
// import Header from './components/header'
// import Sidebar from './components/sidebar'
// import Maincontent from './components/maincontent'
// import Footer from './components/footer'
import App from './pages/Com.jsx'
import StudentCard from './pages/Studentcard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
