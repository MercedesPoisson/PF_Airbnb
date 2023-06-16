import './App.css'
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";
import Formulario from './views/Form/FormularioPrueba/Formulario';
import Form from "../src/views/Form/Form/Form"
import AutoRender from './views/autoRender/autoRender';


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Form/>} />
        <Route path="/formulario" element={<Formulario />} />       
        {/* <Route path="/property/:id" element={<Detail/>} */}        
      </Routes>  
      <AutoRender/>
    </div>
  );
}

export default App;

