
const ServicesCheck = () => {
    
    return (
      <section className="font-cairo border-b pb-3">
        <h1 className="font-cairo">Servicios</h1>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center">
            <input name="Servicios" type="checkbox" />
            <span className="ml-2">Wifi</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" type="checkbox" />
            <span className="ml-2">Cocina</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" type="checkbox" />
            <span className="ml-2">Lavarropas</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" type="checkbox" />
            <span className="ml-2">Aire acondicionado</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" type="checkbox" />
            <span className="ml-2">Calefacción</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" type="checkbox" />
            <span className="ml-2">Televisor</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" type="checkbox" />
            <span className="ml-2">Pileta</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" type="checkbox" />
            <span className="ml-2">Estacionamiento</span>
          </label>
        </div>
      </section>
    );
  };
  
  export default ServicesCheck;