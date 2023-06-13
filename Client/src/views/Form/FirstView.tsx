import { useNavigate } from "react-router-dom";

function Intro() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/post/types")
    }


  return (
    <div className="grid grid-cols-2 gap-2 w-3/4 mx-auto">
      <div className="font-cairo-play text-2xl text-left ">
        Te ayudamos en todo el recorrido para publicar <br />tu propiedad fácilmente.
      </div>
      <div className="flex justify-center">
        <div>
          <button className="bg-transparent border-none rounded-md focus:outline-none w-3/4 mb-4 text-left">
            <span className="font-cairo">1) Contanos acerca de tu propiedad</span>
            <p>Compartí datos básicos, como la ubicación y huéspedes pueden quedarse en el lugar.</p>
          </button>
          <button className="bg-transparent border-none rounded-md focus:outline-none w-80 mb-4 text-left">
            <span className="font-cairo">2) Hacé que se destaque</span>
            <p>Agregá al menos 5 fotos más el título y la descripción.</p>
          </button>
          <button className="bg-transparent border-none rounded-md focus:outline-none w-80 mb-4 text-left">
            <span className="font-cairo">3) Terminá todo y publicá el anuncio</span>
            <p>Establecé un precio inicial y publicá tu anuncio.</p>
          </button>
        </div>
      </div>
      <div className="col-span-2 font-cairo-play flex justify-start ml-10">
        <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}

export default Intro;