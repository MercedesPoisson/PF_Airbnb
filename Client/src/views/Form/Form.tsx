// import { useDispatch } from "react-redux"
import QuantityCounter from "./QuantityCounter";
import ServicesCheck from "./ServicesCheck";
import Cloudinary from "./Cloudinary";
import Price from "./Price";
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton";
import Location from "./Location";
import Intro from "./FirstView";
import PropertyType from "./PropertyType";

const Form = () => {

    // const dispatch = useDispatch();

    return (
      <div>
        <div className="sticky top-0">
          <div className="grid grid-cols-2 gap-3 h-16 mb-1 bg-white">
            <div className="col-span-1 flex items-center justify-start">
              <div className="flex items-center">
                <i className="fa fa-sun text-argentina ml-4 text-2xl"></i>
                <span className="ml-1 text-argentina font-comfortaa text-lg">argentina</span>
              </div>
            </div>
            <div className="col-span-1 font-cairo-play flex items-center justify-end mr-10">
              <button className="border border-argentina rounded p-1 w-32">Guardar y Salir</button>
            </div>
          </div>
        </div>
        <Intro />
        <PropertyType />
        
        <div className="font-cairo text-2xl mt-8">¿Dónde queda tu propiedad?</div>
        <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>        
        <div className="h-[470px]">
            <Location />
        </div>
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
              <button className="border border-argentina rounded p-1 w-32">Siguiente</button>
            </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Agregá algunos datos básicos sobre tu propiedad</div>
            <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>
            <QuantityCounter />
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Contale a tus huéspedes todo lo que tu propiedad tiene para ofrecer</div>
            <p className="font-cairo">Podés agregar mas servicios luego de publicar el anuncio.</p>
            <ServicesCheck />
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Paso 2</div>
            <div className="font-cairo text-2xl ">Agregá algunas fotos de tu propiedad</div>
            <p className="font-cairo">Para comenzar vas a necesitar 3 fotos. Podés agregar otras más adelante.</p>
            <Cloudinary />
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Ponéle un título a tu propiedad</div>
            <p className="font-cairo">No te preocupes si no te gusta, podes cambiarlo más adelante</p>
            <input className="pl-8 w-2/4 h-10 border rounded-md mb-2" type="text" placeholder="Max 200 caracteres" maxLength={200} />
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Creá una descripcion</div>
            <p className="font-cairo">Contanos que hace que tu espacio sea un lugar especial</p>
            <textarea className="pl-8 w-2/4 h-20 border rounded-md mb-2" placeholder="Max 600 caracteres" maxLength={600}></textarea>
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Paso 3</div>
            <div className="font-cairo text-2xl ">Fijá el precio por noche</div>
            <p className="font-cairo">Podés modificarlo cuando quieras</p>
            <Price />
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Revisá tu anuncio</div>
            <p className="font-cairo">Así es como van a verlo tus huéspedes</p>
        </div>
        
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
              <button className="border border-argentina rounded p-1 w-32">Finalizar</button>
            </div>
            <div>
             <ScrollToTopButton />   
            </div>
        
      </div>
    );
  };
  
  export default Form;