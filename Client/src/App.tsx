import './App.css'
import { Route, Routes, Outlet } from "react-router-dom";
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
import Layout from "./views/DashBoard/shared/Layout";
import Users from './views/DashBoard/Users';
import Properties from './views/DashBoard/Properties';
import DashAdmin from './views/DashBoard/DashAdmin';
import DashRent from './views/DashBoard/DashRent';
import DashBoard from './views/DashBoard/Dashboard';
import Favoritos from "./views/UserProfile/favoritos";
import Rent from './views/UserProfile/Rent';
import Vacaciones from './views/UserProfile/Vacaciones';
import Proyecto from './views/MiniProyecto/Proyecto';
import Privacidad from './components/Footer/Privacidad';
import Terminos from './components/Footer/Terminos';
import LayoutUser from './views/UserProfile/LayoutUser';
import Mensajes from './views/UserProfile/mensajes';
import Project from './views/MiniProyecto/Project';
import AllReviews from "./views/UserProfile/AllReviews"
import Pro from './views/MiniProyecto/Pro';
// import DashLogin from './views/DashBoard/DashLogin';


function App() {
  
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedad/:id" element={<Details />} />
        <Route path="/formulario" element={<Form/>} />
        <Route path="/ayuda" element={<Team />} />
        <Route path='/chat' element={<Mensajes />} />


        <Route path="usuario/*" element={<LayoutUser />}>
          <Route index element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="anuncios" element={<MisAnuncios />} />
          <Route path="anuncio/:id" element={<Anuncio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="reservas" element={<Rent />} />
          <Route path="reviews" element={<AllReviews />} />
          <Route path="viajes" element={<Vacaciones />} />
          </Route>        
        
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/project" element={<Project />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />


        <Route path="/dashboard/*" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="users" element={<Users />} />
          <Route path="properties" element={<Properties />} />
          <Route path="admin" element={<DashAdmin />} />
          <Route path="rent" element={<DashRent />} />
        </Route>
        <Route path="/dashboard/login" element={<div>aca va un login </div> } />
        

      </Routes>  
      <AutoRender/>
    </div>
  );
}

export default App;

