import './App.css'
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";
import Form from "../src/views/Form/Form/Form"
import AutoRender from './views/autoRender/autoRender';
import Details from './components/detail/CardDetail';
import Account from "./views/UserProfile/Account";


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedad/:id" element={<Details />} />
        <Route path="/formulario" element={<Form/>} />
        <Route path="/usuario/perfil" element={<Account />} />             
      </Routes>  
      <AutoRender/>
    </div>
  );
}

export default App;

