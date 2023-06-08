import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'


const domain = 'dev-jzkx46ueue770ok4.us.auth0.com';
const clientId = 'VWX2PxmZc7plrbfQ4mYnmsNID6t5PbV9';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Auth0Provider 
    domain={domain} 
    clientId={clientId} 
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/home'
    }}
  >
    <App/>
  </Auth0Provider>
  </BrowserRouter>,
)
