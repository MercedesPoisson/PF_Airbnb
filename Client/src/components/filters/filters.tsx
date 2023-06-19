import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function Filters(props: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const { close } = props
  const [filters, setFilters]: any = useState({
    property_type: '',
    min_price_per_night: 0,
    max_price_per_night: 0,
    allow_pets: false
  });

  const propTypeHandler = (type: string) => {
    setFilters({
      ...filters,
      property_type: type
    })
  }

  const minMaxHandler = (type: string, e: any) => {
    let value = e.target.value
    if(type === 'Min') setFilters({
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

  const setQuery = () => {
    if(filters.property_type) searchParams.set("property_type", filters.property_type)

    if(filters.min_price_per_night) searchParams.set("min_price_per_night", `${filters.min_price_per_night}`)
    else searchParams.delete("min_price_per_night")

    if(filters.max_price_per_night) searchParams.set("max_price_per_night", `${filters.max_price_per_night}`)
    else searchParams.delete("max_price_per_night")

    if(filters.allow_pets) searchParams.set("allow_pets", "true")
    else searchParams.delete("allow_pets")

    searchParams.set("page", "0")
    navigate(`?${searchParams.toString()}`)
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
            <button className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${filters.property_type === 'House' ? 'border-red-600' : 'border-black'}`}
            value="House"
            onClick={() => propTypeHandler('House')}>
              <span className="mb-2">
                <i className="fa-solid fa-house text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Casa</span>
            </button>
          </div>
          <div className="col-span-1">
            <button className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${filters.property_type === 'Apartment' ? 'border-red-600' : 'border-black'}`}
            value="Apartment"
            onClick={() => propTypeHandler('Apartment')}>
              <span className="mb-2">
                <i className="fa-solid fa-building text-gray-600"></i>
              </span>
              <span className="text-center font-cairo">Departamento</span>
            </button>
          </div>
          <div className="col-span-1">
            <button className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${filters.property_type === 'Room' ? 'border-red-600' : 'border-black'}`}
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
            <div className="flex gap-1"><label>Min</label><input className="border border-black rounded-xl w-12" onChange={(e) => minMaxHandler('Min', e)}/></div>
            <div className="flex gap-1"><label>Max</label><input className="border border-black rounded-xl w-12" onChange={(e) => minMaxHandler('Max', e)}/></div>
          </div>
        </div>
      </section>

      <section className="font-cairo border-b pb-3">
        <h1 className="font-cairo mb-1">Habitaciones y Camas</h1>
        <div>
          <div>Dormitorios</div>
          <div className="flex items-center">
            <button className="border border-black rounded-xl focus:outline-none w-24 mr-2">cualquiera</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">1</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">2</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">3</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">4</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">5+</button>
          </div>
        </div>
        <div>
          <div>Camas</div>
          <div className="flex items-center">
            <button className="border border-black rounded-xl focus:outline-none w-24 mr-2">cualquiera</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">1</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">2</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">3</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">4</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">5+</button>
          </div>
        </div>
        <div>
          <div>Baños</div>
          <div className="flex items-center mb-3">
            <button className="border border-black rounded-xl focus:outline-none w-24 mr-2">cualquiera</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">1</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">2</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">3</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">4</button>
            <button className="border border-black rounded-xl focus:outline-none w-6 mr-2">5+</button>
          </div>
        </div>
      </section>

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

      <section className="font-cairo border-b pb-3">
        <h1 className="font-cairo">Varios</h1>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center">
            <input name="varios" type="checkbox" className="form-switch" />
            <span className="ml-2">Accesibilidad</span>
          </label>
          <label className="flex items-center">
            <input name="varios" type="checkbox" className="form-switch" />
            <span className="ml-2">Fumadores</span>
          </label>
          <label className="flex items-center">
            <input name="varios" type="checkbox" className="form-switch" checked={filters.allow_pets} onChange={() => checkboxFilters('allow_pets')}/>
            <span className="ml-2">Mascotas</span>
          </label>
        </div>
      </section>

      <div className="pt-2">
        <button className="border border-argentina rounded-md focus:outline-none w-32 font-cairo" onClick={setQuery}>Aplicar Filtros</button>
      </div>
    </div>
  );
}

export default Filters;