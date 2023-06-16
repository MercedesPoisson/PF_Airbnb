const FirstView = (props) => {

    return (
        <div>
            <div className="w-3/4 mx-auto">
    <div className="font-cairo-play text-2xl text-left mb-8">
      Te ayudamos en todo el recorrido para publicar <br />tu propiedad fácilmente.
    </div>
    <div className="flex flex-col justify-center">
      <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left">
        <span className="font-cairo">1) Contanos acerca de tu propiedad</span>
        <p>Compartí datos básicos, como la ubicación y huéspedes pueden quedarse en el lugar.</p>
      </button>
      <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left">
        <span className="font-cairo">2) Hacé que se destaque</span>
        <p>Agregá al menos 3 fotos más el título y la descripción.</p>
      </button>
      <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left">
        <span className="font-cairo">3) Terminá todo y publicá el anuncio</span>
        <p>Establecé un precio inicial y publicá tu anuncio.</p>
      </button>
    </div>
    <div className="font-cairo-play flex justify-start mt-4">
      <button className="border border-argentina rounded p-1 w-32" onClick={props.nextStep}>
        Siguiente
      </button>
    </div>
  </div>

        </div>
    )
}

export default FirstView;