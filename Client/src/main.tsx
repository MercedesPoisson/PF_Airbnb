import React from 'react'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import App from './App.tsx'
import './index.css'
import store from './redux/store.tsx';
import { Provider } from "react-redux"
import { Auth0Provider } from '@auth0/auth0-react'

const domain = 'dev-hnmu75yme6gkbvl6.us.auth0.com'
const clientId = 'CiDF3NCMSgGw2p521DbnysBwaglhJywi'

const currentUrl = window.location.href;


ReactDOM.render(
    <BrowserRouter>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: "https://backofback-production.up.railway.app/?page=0"
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