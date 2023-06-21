import './App.css'
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";
import Form from "../src/views/Form/Form/Form"
import AutoRender from './views/autoRender/autoRender';
import Details from './components/detail/CardDetail';
import Account from "./views/UserProfile/Account";
import Team from './views/Team/Team';
import Profile from './views/UserProfile/Profile';
import Anuncio from './views/UserProfile/Anuncio';
import MisAnuncios from './views/UserProfile/MisAnuncios';


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedad/:id" element={<Details />} />
        <Route path="/formulario" element={<Form/>} />
        <Route path="/usuario/perfil" element={<Account />} />
        <Route path="/ayuda" element={<Team />} />
        <Route path="/usuario/profile" element={<Profile />} />
        <Route path="/usuario/anuncios" element={<MisAnuncios />} />
        <Route path="/usuario/anuncio/:id" element={<Anuncio />} />            
      </Routes>  
      <AutoRender/>
    </div>
  );
}

export default App;

