import React from 'react'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom';
import App from './App.tsx'
import './index.css'
import store from './redux/store.tsx';
import { Provider } from "react-redux"
import { Auth0Provider } from '@auth0/auth0-react'
import io from "socket.io-client";

const domain = 'dev-yura723kkk8s5a14.us.auth0.com'
const clientId = '3VrGMPPJBmJR1V5slCMSlYjZ3NsWCGct'

const socket = io("http://localhost:3001"); //esta es la conexion en si con el back - aca podemos escuchar y enviar eventos
socket.on("connect", () => {
  console.log("conectado al servidor socket");
  
})

ReactDOM.render(
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: "http://localhost:5173/?page=0"
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