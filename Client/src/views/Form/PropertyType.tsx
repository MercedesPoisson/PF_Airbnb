function PropertyType() {
    return (
      <div className="grid grid-cols-2 font-cairo gap-2 w-3/4 mx-auto">
        <div>
           <div className=" text-2xl mt-8">Paso 1</div>
        <div className="text-2xl">Contanos acerca de tu propiedad</div>
        <p>En este paso, te vamos a preguntar qué tipo de propiedad tenés. <br/> Cuál es la ubicación y cuántos huéspedes pueden quedarse en el alojamiento.</p>
        <div className="text-2xl mt-4">¿Cuál de estas opciones describe mejor tu propiedad?</div> 
        </div>
        
        <div className=" font-cairo mt-3">
          <div className=" mb-3">
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md focus:outline-none w-28">
              <span className="mb-2">
                <i className="fa-solid fa-house text-gray-600"></i>
              </span>
              <span className="text-center">Casa</span>
            </button>
          </div>
          <div className=" mb-3">
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md focus:outline-none w-28">
              <span className="mb-2">
                <i className="fa-solid fa-building text-gray-600"></i>
              </span>
              <span className="text-center ">Departamento</span>
            </button>
          </div>
          <div className="col-span-1">
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md focus:outline-none w-28">
              <span className="mb-2">
                <i className="fa-solid fa-bed text-gray-600"></i>
              </span>
              <span className="text-center ">Habitación</span>
            </button>
          </div>
        </div>
        <div className="col-span-2 font-cairo-play flex justify-start ml-10">
        <button className="border border-argentina rounded p-1 w-32 mt-4">Siguiente</button>
      </div>
      </div>
    );
  }
  
  export default PropertyType;