import React from 'react'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import App from './App.tsx'
import './index.css'
// import store from './redux/store.tsx';
// import { Provider } from "react-redux"

ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
    
  document.getElementById('root')
);
