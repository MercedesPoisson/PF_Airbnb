import React from "react";
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Homepage from './Home';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' exact Component={Login}/>
      <Route path='/home' exact Component={Homepage}/>
    </Routes>
    </>
  )
}

export default App
