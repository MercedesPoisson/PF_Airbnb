function PropertyType() {
    return (
      <div>
        <div className="font-cairo text-2xl mt-8">Paso 1</div>
        <div className="font-cairo text-2xl">Contanos acerca de tu propiedad</div>
        <p>En este paso, te vamos a preguntar qué tipo de propiedad tenés y si los huéspedes van a reservar el alojamiento entero o solo una habitación. Hacenos saber la ubicación y cuántos huéspedes pueden quedarse en el alojamiento.</p>
        <div className="font-cairo text-2xl mt-8">¿Cuál de estas opciones describe mejor tu propiedad?</div>
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
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
              <button className="border border-argentina rounded p-1 w-32">Siguiente</button>
            </div>
      </div>
    );
  }
  
  export default PropertyType;