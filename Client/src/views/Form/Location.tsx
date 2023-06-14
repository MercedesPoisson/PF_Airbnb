import { useNavigate } from "react-router-dom";
import NavBar from "./navBar";

function Location() {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate(-1);
    }

    const handleNext = () => {
        navigate("/post/beds");
    }

    return (
        <div>
      <div className="sticky top-0">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto ">
        <div>
          <div className="font-cairo text-2xl ">¿Dónde queda tu propiedad?</div>
          <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>
        </div>
        <div className="items-center">
          <div className="mb-2">
            <div className="relative">
              <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Ingrese la dirección" />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
            </div>
          </div>
          <div className="mb-2">
            <div className="relative">
              <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Ingrese la localidad" />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
            </div>
          </div>
          <div>
            <div className="relative">
              <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Ingrese la provincia" />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
            </div>
          </div>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={handlePrevious}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNext} >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
  
  export default Location;
  
    //AIzaSyB-QLb5dW-MDp_UPw53W7OuQ9mHSZZPBq8

    // <div className="h-[470px]">
    //       <iframe
    //         src="https://storage.googleapis.com/maps-solutions-cpse4u0jxa/address-selection/brph/address-selection.html"
    //         width="100%"
    //         height="100%"
    //         style={{ border: 0 }}
    //         loading="lazy"
    //       ></iframe>
    //     </div>
  

// function Location() {
//     return (
//       <div className="flex items-center">
//         <div className="relative">
//           <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Ingrese la dirección" />
//           <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
//         </div>
//         <div className="relative">
//           <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Localidad" />
//           <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
//         </div>
//         <div className="relative">
//           <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Provincia" />
//           <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
//         </div>         
//       </div>
//     );
//   }
  
//   export default Location;

//   //AIzaSyB-QLb5dW-MDp_UPw53W7OuQ9mHSZZPBq8

  