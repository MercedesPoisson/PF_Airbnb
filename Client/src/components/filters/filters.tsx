import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function Filters(props: any) {
  const location = useLocation();
  const navigate = useNavigate();

  const { close } = props
  const [filters, setFilters]: any = useState({
    property_type: '',
    min_price_per_night: 0,
    max_price_per_night: 0,
    allow_pets: false,
    accessibility: false,
    rooms_number: 0,
    beds_number: 0,
    bathrooms_number: 0,
    services: []
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (filters.property_type) searchParams.set("property_type", filters.property_type);
    if (filters.min_price_per_night) searchParams.set("min_price_per_night", `${filters.min_price_per_night}`);
    else searchParams.delete("min_price_per_night");
    if (filters.max_price_per_night) searchParams.set("max_price_per_night", `${filters.max_price_per_night}`);
    else searchParams.delete("max_price_per_night");
    if (filters.allow_pets) searchParams.set("allow_pets", "true");
    else searchParams.delete("allow_pets");
    if (filters.accessibility) searchParams.set("accessibility", "true");
    else searchParams.delete("accessibility");
    if (filters.services) filters.services.forEach((element: any) => {
      searchParams.append("services", `${element}`);
    });
    else searchParams.delete("services");
    if (filters.bathrooms_number) searchParams.set("bathrooms_number", `${filters.bathrooms_number}`);
    else searchParams.delete("bathrooms_number");
    if (filters.beds_number) searchParams.set("beds_number", `${filters.beds_number}`);
    else searchParams.delete("beds_number");
    if (filters.rooms_number) searchParams.set("rooms_number", `${filters.rooms_number}`);
    else searchParams.delete("rooms_number");
    searchParams.set("page", "0");
    navigate(`?${searchParams.toString()}`);
  }, [filters]);

  const cleanFilter = () => {
    setFilters({
      property_type: '',
      min_price_per_night: 0,
      max_price_per_night: 0,
      allow_pets: false,
      accessibility: false,
      rooms_number: 0,
      beds_number: 0,
      bathrooms_number: 0,
      services: []
    })
    navigate('?page=0')
  }

  const propTypeHandler = (type: string) => {
    setFilters({
      ...filters,
      property_type: type
    })
  }

  const minMaxHandler = (type: string, e: any) => {
    let value = e.target.value
    if (type === 'Min') setFilters({
      ...filters,
      min_price_per_night: value
    })
    else setFilters({
      ...filters,
      max_price_per_night: value
    })
  }

  const checkboxFilters = (action: string) => {
    setFilters({
      ...filters,
      [action]: (!filters[action])
    })
  }

  const servicesHandler = (event: any) => {
    const value = event.target.value
    if (filters.services.includes(value)) {
      setFilters({
        ...filters,
        services: filters.services.filter((service: any) => service != value)
      })
    }
    else {
      setFilters({
        ...filters,
        services: [...filters.services, value]
      })
    }
  }

  const numberHandler = (event: any) => {
    const value = event.target.value
    const name = event.target.name
    setFilters({
      ...filters,
      [name]: value
    })
  }

  return (
    <div className="bg-white p-2">
      <div className="grid grid-cols-3 border-b pb-1 ">
        <button className="col-span-1 flex items-center justify-start" onClick={close}>
          <i className="fa-solid fa-xmark text-argentina "></i>
        </button>
        <h1 className="col-span-2 font-cairo-play mb-3">Filtros Avanzados</h1>
      </div>

      <section className="border-b pb-3 ">
       <h1 className="font-cairo mb-2">Tipo de Propiedad</h1>
        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-1 mb-3">
            <button className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${filters.property_type === 'House' ? 'border-red-600' : 'border'}`}
              value="House"
              onClick={() => propTypeHandler('House')}>
              <span className="mb-2">
                <i className="fa-solid fa-house text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Casa</span>
            </button>
          </div>
          <div className="col-span-1">
            <button className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${filters.property_type === 'Apartment' ? 'border-red-600' : 'border'}`}
              value="Apartment"
              onClick={() => propTypeHandler('Apartment')}>
              <span className="mb-2">
                <i className="fa-solid fa-building text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Departamento</span>
            </button>
          </div>
          <div className="col-span-1">
            <button className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${filters.property_type === 'Room' ? 'border-red-600' : 'border'}`}
              value="Room"
              onClick={() => propTypeHandler('Room')}>
              <span className="mb-2">
                <i className="fa-solid fa-bed text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Habitación</span>
            </button>
          </div>
        </div>
      </section>

      <section className="border-b pb-3">
        <div className="flex flex-col mb-3">
          <h1 className="font-cairo mb-1">Rango de Precios</h1>
          <div className="flex items-center justify-left gap-4">
            <div className="flex gap-1"><label>Min</label><input className="border rounded-xl w-16" onChange={(e) => minMaxHandler('Min', e)} /></div>
            <div className="flex gap-1"><label>Max</label><input className="border rounded-xl w-16" onChange={(e) => minMaxHandler('Max', e)} /></div>
          </div>
        </div>
      </section>

      <section className="font-cairo border-b pb-3">
        <h1 className="font-cairo mb-1">Habitaciones y Camas</h1>
        <div>
          <div>Dormitorios</div>
          <div className="flex items-center">
            <button className={`border rounded-xl focus:outline-none w-24 mr-2 ${filters.rooms_number === '' ? 'border-red-600' : 'border'}`} onClick={(event) => numberHandler(event)} name="rooms_number">cualquiera</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.rooms_number === '1' ? 'border-red-600' : 'border'}`} onClick={(event) => numberHandler(event)} name="rooms_number" value={1}>1</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.rooms_number === '2' ? 'border-red-600' : 'border'}`} onClick={(event) => numberHandler(event)} name="rooms_number" value={2}>2</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.rooms_number === '3' ? 'border-red-600' : 'border'}`} onClick={(event) => numberHandler(event)} name="rooms_number" value={3}>3</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.rooms_number === '4' ? 'border-red-600' : 'border'}`} onClick={(event) => numberHandler(event)} name="rooms_number" value={4}>4</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.rooms_number === '10' ? 'border-red-600' : 'border'}`} onClick={(event) => numberHandler(event)} name="rooms_number" value={10}>5+</button>
          </div>
        </div>
        <div>
          <div>Camas</div>
          <div className="flex items-center">
            <button className={`border rounded-xl focus:outline-none w-24 mr-2 ${filters.beds_number === '' ? 'border-red-600' : 'border'}`} name="beds_number" onClick={(event) => numberHandler(event)}>cualquiera</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.beds_number === '1' ? 'border-red-600' : 'border'}`} name="beds_number" onClick={(event) => numberHandler(event)} value={1}>1</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.beds_number === '2' ? 'border-red-600' : 'border'}`} name="beds_number" onClick={(event) => numberHandler(event)} value={2}>2</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.beds_number === '3' ? 'border-red-600' : 'border'}`} name="beds_number" onClick={(event) => numberHandler(event)} value={3}>3</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.beds_number === '4' ? 'border-red-600' : 'border'}`} name="beds_number" onClick={(event) => numberHandler(event)} value={4}>4</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.beds_number === '10' ? 'border-red-600' : 'border'}`} name="beds_number" onClick={(event) => numberHandler(event)} value={10}>5+</button>
          </div>
        </div>
        <div>
          <div>Baños</div>
          <div className="flex items-center mb-3">
            <button className={`border rounded-xl focus:outline-none w-24 mr-2 ${filters.bathrooms_number === '' ? 'border-red-600' : 'border'}`} name="bathrooms_number" onClick={(event) => numberHandler(event)}>cualquiera</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.bathrooms_number === '1' ? 'border-red-600' : 'border'}`} name="bathrooms_number" onClick={(event) => numberHandler(event)} value={1}>1</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.bathrooms_number === '2' ? 'border-red-600' : 'border'}`} name="bathrooms_number" onClick={(event) => numberHandler(event)} value={2}>2</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.bathrooms_number === '3' ? 'border-red-600' : 'border'}`} name="bathrooms_number" onClick={(event) => numberHandler(event)} value={3}>3</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.bathrooms_number === '4' ? 'border-red-600' : 'border'}`} name="bathrooms_number" onClick={(event) => numberHandler(event)} value={4}>4</button>
            <button className={`border rounded-xl focus:outline-none w-6 mr-2 ${filters.bathrooms_number === '10' ? 'border-red-600' : 'border'}`} name="bathrooms_number" onClick={(event) => numberHandler(event)} value={10}>5+</button>
          </div>
        </div>
      </section>

      <section className="font-cairo border-b pb-3">
        <h1 className="font-cairo">Servicios</h1>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center">
            <input name="Servicios" onChange={(event) => servicesHandler(event)} type="checkbox" value="Wifi" />
            <span className="ml-2">Wifi</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" onChange={(event) => servicesHandler(event)} type="checkbox" value="Cocina" />
            <span className="ml-2">Cocina</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" onChange={(event) => servicesHandler(event)} type="checkbox" value="Lavarropas" />
            <span className="ml-2">Lavarropas</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" onChange={(event) => servicesHandler(event)} type="checkbox" value="Aire acondicionado" />
            <span className="ml-2">Aire acondicionado</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" onChange={(event) => servicesHandler(event)} type="checkbox" value="Calefacción" />
            <span className="ml-2">Calefacción</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" onChange={(event) => servicesHandler(event)} type="checkbox" value="Televisor" />
            <span className="ml-2">Televisor</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" onChange={(event) => servicesHandler(event)} type="checkbox" value="Pileta" />
            <span className="ml-2">Pileta</span>
          </label>
          <label className="flex items-center">
            <input name="Servicios" onChange={(event) => servicesHandler(event)} type="checkbox" value="Estacionamiento libre" />
            <span className="ml-2">Estacionamiento</span>
          </label>
        </div>
      </section>

      <section className="font-cairo border-b pb-3">
        <h1 className="font-cairo">Varios</h1>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center">
            <input name="varios" type="checkbox" className="form-switch" checked={filters.accessibility} onChange={() => checkboxFilters('accessibility')} />
            <span className="ml-2">Accesibilidad</span>
          </label>
          <label className="flex items-center">
            <input name="varios" type="checkbox" className="form-switch" checked={filters.allow_pets} onChange={() => checkboxFilters('allow_pets')} />
            <span className="ml-2">Mascotas</span>
          </label>
        </div>
      </section>
      <br/>
      <div className="pt-2 flex justify-center">
        <button className="border border-argentina rounded-md focus:outline-none w-32 font-cairo ml-4" onClick={() => cleanFilter()} >Limpiar</button>
      </div>
    </div>
  );
}

export default Filters;