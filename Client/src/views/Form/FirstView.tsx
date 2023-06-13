function Intro() {
    return (
      <div>
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
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
              <button className="border border-argentina rounded p-1 w-32">Siguiente</button>
            </div>
      </div>
    );
  }
  
  export default Intro;