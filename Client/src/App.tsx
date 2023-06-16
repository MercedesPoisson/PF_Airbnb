import './App.css'
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";
import Form from "../src/views/Form/Form/Form"
import AutoRender from './views/autoRender/autoRender';
// import Detail from "./views/detail/detail";

import Details from './views/detail/detail';


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedad/:idProperty" element={<Details />} />
        <Route path="/formulario" element={<Form/>} />             
      </Routes>  
      <AutoRender/>
    </div>
  );
}

export default App;

