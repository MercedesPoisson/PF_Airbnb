// import { useDispatch } from "react-redux"
import QuantityCounter from "./QuantityCounter";
import ServicesCheck from "./ServicesCheck";
import Cloudinary from "./Cloudinary";
import Price from "./Price";

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
        <div className="font-cairo-play text-2xl text-center mb-6">Te ayudamos en todo el recorrido para publicar tu propiedad fácilmente.</div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-1">
            <button className="flex flex-col items-center justify-center bg-transparent border-none rounded-md focus:outline-none w-80 shadow-sm mr-20">
              <span className="text-center font-cairo">1) Contanos acerca de tu propiedad</span>
              <p>Compartí datos básicos, como la ubicación y huéspedes pueden quedarse en el lugar.</p>
            </button>
            <button className="flex flex-col items-center justify-center bg-transparent border-none rounded-md focus:outline-none w-80 shadow-sm">
              <span className="text-center font-cairo">2) Hacé que se destaque</span>
              <p>Agregá al menos 5 fotos más el título y la descripción.</p>
            </button>
            <button className="flex flex-col items-center justify-center bg-transparent border-none rounded-md focus:outline-none w-80 shadow-sm">
              <span className="text-center font-cairo">3) Terminá todo y publicá el anuncio</span>
              <p>Establecé un precio inicial y publicá tu anuncio.</p>
            </button>
          </div>
        </div>
        <div className="font-cairo text-2xl mt-8">Paso 1</div>
        <div className="font-cairo text-2xl">Contanos acerca de tu propiedad</div>
        <p>En este paso, te vamos a preguntar qué tipo de propiedad tenés y si los huéspedes van a reservar el alojamiento entero o solo una habitación. Hacenos saber la ubicación y cuántos huéspedes pueden quedarse en el alojamiento.</p>
        <div className="font-cairo text-2xl mt-8">¿Cuál de estas opciones describe mejor tu espacio?</div>
        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-1 mb-3">
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md focus:outline-none w-28">
              <span className="mb-2">
                <i className="fa-solid fa-house text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Casa</span>
            </button>
          </div>
          <div className="col-span-1">
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md focus:outline-none w-28">
              <span className="mb-2">
                <i className="fa-solid fa-building text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Departamento</span>
            </button>
          </div>
          <div className="col-span-1">
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md focus:outline-none w-28">
              <span className="mb-2">
                <i className="fa-solid fa-bed text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Habitación</span>
            </button>
          </div>
        </div>
        <div className="font-cairo text-2xl mt-8">¿Dónde queda tu espacio?</div>
        <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>        
        <div className="flex items-center">
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Ingrese la dirección" />
            <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
          </div>
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Localidad" />
            <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
          </div>
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Provincia" />
            <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
          </div>         
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Agregá algunos datos básicos sobre tu espacio</div>
            <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>
            <QuantityCounter />
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Contale a tus huéspedes todo lo que tu espacio tiene para ofrecer</div>
            <p className="font-cairo">Podés agregar mas servicios luego de publicar el anuncio.</p>
            <ServicesCheck />
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Paso 2</div>
            <div className="font-cairo text-2xl ">Agregá algunas fotos de tu espacio</div>
            <p className="font-cairo">Para comenzar vas a necesitar 3 fotos. Podés agregar otras más adelante.</p>
            <Cloudinary />
        </div>
        <div>
            <div className="font-cairo text-2xl mt-8">Ponéle un título a tu espacio</div>
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
        
      </div>
    );
  };
  
  export default Form;