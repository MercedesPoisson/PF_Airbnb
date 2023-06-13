
const ServicesCheck = () => {
  
    
    return (
      <div className="grid grid-cols-2 font-cairo gap-2 w-3/4 mx-auto">
        <div>
        <div className=" text-2xl mt-8">Contale a tus huéspedes todo lo que tu propiedad tiene para ofrecer</div>
            <p className="font-cairo">Podés agregar mas servicios luego de publicar el anuncio.</p>
        </div>
        <div>
          <section >
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center">
            <input name="Servicios" value="Wifi" type="checkbox" />
            <span className="ml-2">Wifi</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Televisor" type="checkbox" />
            <span className="ml-2">Televisor</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Cocina" type="checkbox" />
            <span className="ml-2">Cocina</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Lavarropas" type="checkbox" />
            <span className="ml-2">Lavarropas</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Aire acondicionado" type="checkbox" />
            <span className="ml-2">Aire acondicionado</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Calefaccion" type="checkbox" />
            <span className="ml-2">Calefacción</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Pileta" type="checkbox" />
            <span className="ml-2">Pileta</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Parrilla" type="checkbox" />
            <span className="ml-2">Parrilla</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Estacionamiento libre" type="checkbox" />
            <span className="ml-2">Estacionamiento libre</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Acceso al lago" type="checkbox" />
            <span className="ml-2">Acceso al lago</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" value="Acceso a la playa" type="checkbox" />
            <span className="ml-2">Acceso a la playa</span>
          </label>
        </div>
      </section>
        </div>
        <div className="col-span-2 font-cairo-play flex justify-start ml-10">
        <button className="border border-argentina rounded p-1 w-32 mt-4">Siguiente</button>
      </div>
      </div>
      
    );
  };
  
  export default ServicesCheck;