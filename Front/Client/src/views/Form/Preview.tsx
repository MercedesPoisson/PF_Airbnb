import NavBar from "./navBar"
import { useNavigate } from "react-router-dom";

function Preview() {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate(-1);
    }
    return(
        <div>
      <div className="sticky top-0">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="font-cairo text-2xl">Revisá tu anuncio</div>
          <p className="font-cairo">Así es como lo van a ver tus huéspedes</p>
        </div>
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={handlePrevious}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4">Finalizar</button>
        </div>
      </div>
    </div>
  );
}
export default Preview