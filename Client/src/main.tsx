import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Router>
  
)

// import { Provider } from "react-redux";
// import store from '../src/redux/store';