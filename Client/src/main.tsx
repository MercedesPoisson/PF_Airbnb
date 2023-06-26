import React from 'react'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import App from './App.tsx'
import './index.css'
import store from './redux/store.tsx';
import { Provider } from "react-redux"
import { Auth0Provider } from '@auth0/auth0-react'

const domain = 'dev-yura723kkk8s5a14.us.auth0.com'
const clientId = '3VrGMPPJBmJR1V5slCMSlYjZ3NsWCGct'

const currentUrl = window.location.href;


ReactDOM.render(
    <BrowserRouter>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: "https://proyectofinalairbnb.vercel.app"
    }}
    >
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      </Auth0Provider>
  </BrowserRouter>,
    
  document.getElementById('root')
);