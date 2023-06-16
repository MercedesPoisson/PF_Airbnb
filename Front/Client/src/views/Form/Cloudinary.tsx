import NavBar from "./navBar";
import { useNavigate } from "react-router-dom";

const Cloudinary = () => {
  const navigate = useNavigate();

    const handlePrevious = () => {
        navigate(-1);
    }

    const handleNext = () => {
        navigate("/post/title"); // lo deje aca, tengo que cambiar a la siguiente que seria el titulo
    }

    return (
      <div>
      <div className="sticky top-0">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Paso 2</div>
          <div className="text-2xl">Agregá algunas fotos de tu propiedad</div>
          <p>Para comenzar vas a necesitar 3 fotos. Podés agregar otras más adelante.</p>
        </div>
        <div>
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la primer imagen" />
            <button className="border border-black rounded p-1 w-32">Buscar</button>
          </div>
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la segunda imagen" />
            <button className="border border-black rounded p-1 w-32">Buscar</button>
          </div>
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la tercer imagen" />
            <button className="border border-black rounded p-1 w-32">Buscar</button>
          </div>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={handlePrevious}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNext}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
  
  export default Cloudinary;