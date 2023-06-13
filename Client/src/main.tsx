import React from 'react'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import App from './App.tsx'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// import { Provider } from "react-redux";
// import store from '../src/redux/store';