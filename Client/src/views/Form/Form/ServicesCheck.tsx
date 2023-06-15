const ServicesCheck = (props) => {
    return (
        <div>
            <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Contale a tus huéspedes todo lo que tu propiedad tiene para ofrecer</div>
          <p className="font-cairo">Podés agregar más servicios luego de publicar el anuncio.</p>
        </div>
        <div>
          <section>
            <div className="grid grid-cols-1 gap-2">
              <label className="flex items-center">
                <input
                type="checkbox"
                id="services_wifi"
                name="Services" 
                value="Wifi"
                onChange={props.handleInputChange} 
                 />
                <span className="ml-2">Wifi</span>
              </label>

              <label className="flex items-center">
                <input
                type="checkbox"
                id="services_televisor"
                name="Services" 
                value="Televisor"
                onChange={props.handleInputChange} 
                 />
                <span className="ml-2">Televisor</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_cocina"
                name="Services" 
                value="Cocina"
                onChange={props.handleInputChange} 
                 />
                <span className="ml-2">Cocina</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_lavarropas"
                name="Services" 
                value="Lavarropas"
                onChange={props.handleInputChange} 
                 />
                <span className="ml-2">Lavarropas</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_aire_acondicionado"
                name="Services" 
                value="Aire acondicionado"
                onChange={props.handleInputChange} 
                 />
                <span className="ml-2">Aire acondicionado</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_calefaccion"
                name="Services" 
                value="Calefaccion"
                onChange={props.handleInputChange}
                 />
                <span className="ml-2">Calefacción</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_pileta"
                name="Services" 
                value="Pileta" 
                onChange={props.handleInputChange}
                 />
                <span className="ml-2">Pileta</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_parrilla"
                name="Services" 
                value="Parrilla"
                onChange={props.handleInputChange}                
                 />
                <span className="ml-2">Parrilla</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_accesibilidad"
                name="Services" 
                value="Accesibilidad"                
                onChange={props.handleInputChange} />
                <span className="ml-2">Propiedad Accesible</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_estacionamiento_libre"
                name="Services"                 
                value="Estacionamiento libre"                
                onChange={props.handleInputChange} />
                <span className="ml-2">Estacionamiento libre</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_acceso_al_lago" 
                name="Services" 
                value="Acceso al lago"                                 
                onChange={props.handleInputChange} />
                <span className="ml-2">Acceso al lago</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_acceso_a_la_playa"
                name="Services" 
                value="Acceso a la playa" 
                onChange={props.handleInputChange} />
                <span className="ml-2">Acceso a la playa</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_banera"
                name="Services" 
                value="Bañera" 
                onChange={props.handleInputChange} />
                <span className="ml-2">Bañera</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_jacuzzi"
                name="Services" 
                value="Jacuzzi" 
                onChange={props.handleInputChange} />
                <span className="ml-2">Jacuzzi</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_mascotas"
                name="Services" 
                value="Mascotas" 
                onChange={props.handleInputChange} />
                <span className="ml-2">En esta propiedad amamos las mascotas</span>
              </label>
            </div>
          </section>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={props.nextStep}>
            Siguiente
          </button>
        </div>
      </div>
    </div>

      
    )
}

export default ServicesCheck;