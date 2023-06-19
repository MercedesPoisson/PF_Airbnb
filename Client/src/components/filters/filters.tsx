import { useState } from "react";

function Filters(props: any) {
  const { close } = props
  const [range, setRange] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(event.target.value));
  };

  return (
    <div>
      <div className="grid grid-cols-3 border-b pb-1">
        <button className="col-span-1 flex items-center justify-start" onClick={close}>
          <i className="fa-solid fa-xmark text-argentina "></i> 
        </button>
        <h1 className="col-span-2 font-cairo-play mb-3">Filtros Avanzados</h1>
      </div>

      <section className="border-b pb-3">
        <h1 className="font-cairo mb-2">Tipo de Propiedad</h1>
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
      </section>

      <section className="border-b pb-3">
        <div className="flex flex-col mb-3">
          <h1 className="font-cairo mb-1">Rango de Precios</h1>
          <div className="flex items-center justify-center">
            <input
              type="range"
              min="1"
              max="10000"
              value={range}
              onChange={handleChange}
              className="w-80 h-2 rounded-md"
            />
            <output className="ml-3">{range}</output>
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
            <input name="varios" type="checkbox" className="form-switch" />
            <span className="ml-2">Mascotas</span>
          </label>
        </div>
      </section>

      <div className="pt-2">
        <button className="border border-argentina rounded-md focus:outline-none w-32 font-cairo">Aplicar Filtros</button>
      </div>
    </div>
  );
}

export default Filters;