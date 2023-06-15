import { useState } from "react";

const ServicesCheck = (props) => {
    const [selectedServices, setSelectedServices] = useState([]);
  
    const handleServiceChange = (event) => {
      const serviceName = event.target.value;
      const isSelected = event.target.checked;
  
      if (isSelected) {
        setSelectedServices((prevSelectedServices) => [
          ...prevSelectedServices,
          serviceName,
        ]);
      } else {
        setSelectedServices((prevSelectedServices) =>
          prevSelectedServices.filter((service) => service !== serviceName)
        );
      }
    };
  
    const handleNextStep = () => {
      props.setFormData((prevFormData) => ({
        ...prevFormData,
        services: selectedServices,
      }));
      console.log("FormData:", FormData); // Ver el estado actualizado
  
      props.nextStep();
    };
  

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
                onChange={handleServiceChange} 
                 />
                <span className="ml-2">Wifi</span>
              </label>

              <label className="flex items-center">
                <input
                type="checkbox"
                id="services_televisor"
                name="Services" 
                value="Televisor"
                onChange={handleServiceChange}  
                 />
                <span className="ml-2">Televisor</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_cocina"
                name="Services" 
                value="Cocina"
                onChange={handleServiceChange} 
                 />
                <span className="ml-2">Cocina</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_lavarropas"
                name="Services" 
                value="Lavarropas"
                onChange={handleServiceChange}  
                 />
                <span className="ml-2">Lavarropas</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_aire_acondicionado"
                name="Services" 
                value="Aire acondicionado"
                onChange={handleServiceChange} 
                 />
                <span className="ml-2">Aire acondicionado</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_calefaccion"
                name="Services" 
                value="Calefaccion"
                onChange={handleServiceChange} 
                 />
                <span className="ml-2">Calefacción</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_pileta"
                name="Services" 
                value="Pileta" 
                onChange={handleServiceChange} 
                 />
                <span className="ml-2">Pileta</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_parrilla"
                name="Services" 
                value="Parrilla"
                onChange={handleServiceChange}                
                 />
                <span className="ml-2">Parrilla</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_accesibilidad"
                name="Services" 
                value="Accesibilidad"                
                onChange={handleServiceChange}  />
                <span className="ml-2">Propiedad Accesible</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_estacionamiento_libre"
                name="Services"                 
                value="Estacionamiento libre"                
                onChange={handleServiceChange}  />
                <span className="ml-2">Estacionamiento libre</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_acceso_al_lago" 
                name="Services" 
                value="Acceso al lago"                                 
                onChange={handleServiceChange}  />
                <span className="ml-2">Acceso al lago</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_acceso_a_la_playa"
                name="Services" 
                value="Acceso a la playa" 
                onChange={handleServiceChange}  />
                <span className="ml-2">Acceso a la playa</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_banera"
                name="Services" 
                value="Bañera" 
                onChange={handleServiceChange}  />
                <span className="ml-2">Bañera</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_jacuzzi"
                name="Services" 
                value="Jacuzzi" 
                onChange={handleServiceChange}  />
                <span className="ml-2">Jacuzzi</span>
              </label>

              <label className="flex items-center">
                <input 
                type="checkbox"
                id="services_mascotas"
                name="Services" 
                value="Mascotas" 
                onChange={handleServiceChange}  />
                <span className="ml-2">En esta propiedad amamos las mascotas</span>
              </label>

            </div>
          </section>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNextStep}>
            Siguiente
          </button>
        </div>
      </div>
    </div>

      
    )
}

export default ServicesCheck