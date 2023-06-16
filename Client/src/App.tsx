import './App.css'
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Home from "../../Client/src/views/Home/home";
import Form from "../../Client/src/views/Form/Form";
import FirstView from "../../Client/src/views/Form/FirstView";
import PropertyType from '../../Client/src/views/Form/PropertyType';
import Location from '../../Client/src/views/Form/Location';
import QuantityCounter from './views/Form/QuantityCounter';
import ServicesCheck from './views/Form/ServicesCheck';
import Cloudinary from './views/Form/Cloudinary';
import Title from './views/Form/TitleAndDescription';
import Price from './views/Form/Price';
import Discount from './views/Form/Discount';
import Preview from './views/Form/Preview';
import FormFormik from './views/Form/FormFormik';
import MegaForm from './views/Form/MegaForm';
import Formulario from './views/Form/FormularioPrueba/Formulario';
import Formu from "../src/views/Form/Form/Form"
import AutoRender from './views/autoRender/autoRender';
import Details from './views/detail/detail';


function App() {
  console.log("esto se ve?");
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idProperty" element={<Details />} />
        <Route path="/post" element={<Form/>} />
        <Route path="/post/first" element={<FirstView />} />
        <Route path="/post/types" element={<PropertyType />} />
        <Route path="/post/location" element={<Location />} />
        <Route path="/post/beds" element={<QuantityCounter/>} />
        <Route path="/post/services" element={<ServicesCheck/>} />
        <Route path="/post/pictures" element={<Cloudinary/>} />
        <Route path="/post/title" element={<Title/>} />
        <Route path="/post/price" element={<Price/>} />
        <Route path="/post/discount" element={<Discount/>} />
        <Route path="/post/preview" element={<Preview/>} />
        <Route path="/postFormik" element={<FormFormik />} />
        <Route path="/megaform" element={<MegaForm />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/postformulario" element={<Formu />} />
        {/* <Route path="/property/:id" element={<Detail/>} */}
        
      </Routes>  
      <AutoRender/>
    </div>
  );
}

export default App;

