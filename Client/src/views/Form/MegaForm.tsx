import NavBar from "./navBar";
import ScrollToTopButton from "../../components/scrollButton/ScrollToTopButton";
import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { PostProperty, Property } from '../../redux/actions';

const MegaForm = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

//-------Seccion Tipos de Propiedades --------
    type PropertyType = {
        casa: boolean;
        departamento: boolean;
        habitacion: boolean;
    }

  const [propertyType, setPropertyType] = useState({
    casa: false,
    departamento: false,
    habitacion: false
  });

  const handlePropertyTypeSelect = (type: keyof PropertyType, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPropertyType({
      casa: false,
      departamento: false,
      habitacion: false,
      [type]: true
    });
  };
//-------seccion Cantidades -------
  const [ocupantes, setOcupantes] = useState(1);
  const [dormitorios, setDormitorios] = useState(1);
  const [camas, setCamas] = useState(1);
  const [banos, setBanos] = useState(1);

  const handleIncrement = (category: string) => {
    switch (category) {
      case "ocupantes":
        if (ocupantes < 10) {
          setOcupantes(ocupantes + 1);
        }
        break;
      case "dormitorios":
        if (dormitorios < 10) {
          setDormitorios(dormitorios + 1);
        }
        break;
      case "camas":
        if (camas < 10) {
          setCamas(camas + 1);
        }
        break;
      case "banos":
        if (banos < 10) {
          setBanos(banos + 1);
        }
        break;
      default:
        break;
    }
  };

  const handleDecrement = (category: string) => {
    switch (category) {
      case "ocupantes":
        if (ocupantes > 1) {
          setOcupantes(ocupantes - 1);
        }
        break;
      case "dormitorios":
        if (dormitorios > 1) {
          setDormitorios(dormitorios - 1);
        }
        break;
      case "camas":
        if (camas > 1) {
          setCamas(camas - 1);
        }
        break;
      case "banos":
        if (banos > 1) {
          setBanos(banos - 1);
        }
        break;
      default:
        break;
    }
  };


const [formData, setFormData] = useState({
    id_property: 0,
    title: '',
    province: '',
    location: '',
    address: '',
    property_type: 'House',
    description: '',
    price_per_night: 0,
    images: [],
    rating: 0,
    ratings_amount: 0,
    availability: [],
    is_active: false,
    rooms_number: 0,
    beds_number: 0,
    max_guests: 0,
    allow_pets: false,
    weekly_discount: false,
    monthly_discount: false,
    min_nights: 0,
    beds_type: [],
    bathrooms_number: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //---------Seccion Precio ---------
  const [price, setPrice] = useState(1000);

  const handleInc = () => {
    if (price < 5000) {
      setPrice((prevPrice) => prevPrice + 1);
    }
  };

  const handleDec = () => {
    if (price > 1) {
      setPrice((prevPrice) => prevPrice - 1);
    }
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value, 10);
    if (!isNaN(newPrice) && newPrice >= 1 && newPrice <= 5000) {
      setPrice(newPrice);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const property: Property = {
        id_property: formData.id_property,
        title: formData.title,
        province: formData.province,
        location: formData.location,
        address: formData.address,
        property_type: formData.property_type,
        description: formData.description,
        price_per_night: formData.price_per_night,
        images: formData.images,
        rating: formData.rating,
        ratings_amount: formData.ratings_amount,
        availability: formData.availability,
        is_active: formData.is_active,
        rooms_number: formData.rooms_number,
        beds_number: formData.beds_number,
        max_guests: formData.max_guests,
        allow_pets: formData.allow_pets,
        weekly_discount: formData.weekly_discount,
        monthly_discount: formData.monthly_discount,
        min_nights: formData.min_nights,
        beds_type: formData.beds_type,
        bathrooms_number: formData.bathrooms_number,
      };
      dispatch(PostProperty(
        property.id_property,
        property.title,
        property.province,
        property.location,
        property.address,
        property.property_type,
        property.description,
        property.price_per_night,
        property.images,
        property.rating,
        property.ratings_amount,
        property.availability,
        property.is_active,
        property.rooms_number,
        property.beds_number,
        property.max_guests,
        property.allow_pets,
        property.weekly_discount,
        property.monthly_discount,
        property.min_nights,
        property.beds_type,
        property.bathrooms_number
      ));

      alert("La propiedad se ha creado correctamente")
      console.log("Datos enviados:", property);

      setFormData({
      id_property: 0,
      title: '',
      province: '',
      location: '',
      address: '',
      property_type: 'House',
      description: '',
      price_per_night: 0,
      images: [],
      rating: 0,
      ratings_amount: 0,
      availability: [],
      is_active: false,
      rooms_number: 0,
      beds_number: 0,
      max_guests: 0,
      allow_pets: false,
      weekly_discount: false,
      monthly_discount: false,
      min_nights: 0,
      beds_type: [],
      bathrooms_number: 0,
    });
  };

  return (
    <div>
      <div className="sticky top-0">
        <NavBar />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-3/4 mx-auto">
          <div className="font-cairo-play text-2xl text-left mb-8">
            Te ayudamos en todo el recorrido para publicar <br />
            tu propiedad fácilmente.
          </div>
          <div className="flex flex-col justify-center">
            <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left">
              <span className="font-cairo">1) Contanos acerca de tu propiedad</span>
              <p>Compartí datos básicos, como la ubicación y huéspedes pueden quedarse en el lugar.</p>
            </button>
            <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left">
              <span className="font-cairo">2) Hacé que se destaque</span>
              <p>Agregá al menos 5 fotos más el título y la descripción.</p>
            </button>
            <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left">
              <span className="font-cairo">3) Terminá todo y publicá el anuncio</span>
              <p>Establecé un precio inicial y publicá tu anuncio.</p>
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
            <div>
              <div className="text-2xl">Paso 1</div>
              <div className="text-2xl">Contanos acerca de tu propiedad</div>
              <p>
                En este paso, te vamos a preguntar qué tipo de propiedad tenés. <br />
                Cuál es la ubicación y cuántos huéspedes pueden quedarse en el alojamiento.
              </p>
              <div className="text-2xl mt-3">¿Cuál de estas opciones describe mejor tu propiedad?</div>
            </div>

            <div className="grid grid-cols-3font-cairo mt-3">
              <div className="col-span-1 mb-3">
              <button
                  className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${
                    propertyType.casa === true ? "border-argentina" : "border-black"
                  }`}
                  onClick={(event) => handlePropertyTypeSelect("casa", event)}
                >
                  <span className="mb-2">
                    <i className="fa-solid fa-house text-gray-600"></i>
                  </span>
                  <span className="text-center">Casa</span>
                </button>
              </div>
              <div className="mb-3 col-span-1">
              <button
                  className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${
                    propertyType.departamento === true? "border-argentina" : "border-black"
                  }`}
                  onClick={(event) => handlePropertyTypeSelect("departamento", event)}
                >
                  <span className="mb-2">
                    <i className="fa-solid fa-building text-gray-600"></i>
                  </span>
                  <span className="text-center">Departamento</span>
                </button>
              </div>
              <div className="col-span-1">
              <button
                  className={`flex flex-col items-center justify-center bg-transparent border rounded-md focus:outline-none w-28 ${
                    propertyType.habitacion === true ? "border-argentina" : "border-black"
                  }`}
                  onClick={(event) => handlePropertyTypeSelect("habitacion", event)}
                >
                  <span className="mb-2">
                    <i className="fa-solid fa-bed text-gray-600"></i>
                  </span>
                  <span className="text-center">Habitación</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto mt-3">
            <div>
              <div className="font-cairo text-2xl">¿Dónde queda tu propiedad?</div>
              <p className="font-cairo">
                Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.
              </p>
            </div>
            <div className="items-center">
              <div className="mb-2">
                <div className="relative">
                  <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Ingrese la dirección" />
                  <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
                </div>
              </div>
              <div className="mb-2">
                <div className="relative">
                  <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Ingrese la localidad" />
                  <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input className="pl-8 w-96 h-10 border rounded-md" type="text" placeholder="Ingrese la provincia"  />
                  <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto mt-3">
        <div>
          <div className="text-2xl">Agregá algunos datos básicos sobre tu propiedad</div>
          <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <p >Ocupantes</p>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("ocupantes")}></i>
            <p >{ocupantes}</p>
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("ocupantes")}></i>
          </div>
          <div className="flex items-center mb-2">
            <p >Dormitorios</p>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("dormitorios")}></i>
            <p>{dormitorios}</p>
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("dormitorios")}></i>
          </div>
          <div className="flex items-center mb-2">
            <p>Camas</p>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("camas")}></i>
            <p>{camas}</p>
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("camas")}></i>
          </div>
          <div className="flex items-center mb-2">
            <p >Baños</p>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("banos")}></i>
            <p >{banos}</p>
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("banos")}></i>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto mt-3">
        <div>
          <div className="text-2xl">Contale a tus huéspedes todo lo que tu propiedad tiene para ofrecer</div>
          <p className="font-cairo">Podés agregar más servicios luego de publicar el anuncio.</p>
        </div>
        <div>
          <section>
            <div className="grid grid-cols-1 gap-2">
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
                <input name="Servicios" value="Acceso al lago" type="checkbox" />
                <span className="ml-2">Propiedad Accesible</span>
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
              <label className="flex items-center">
                <input name="Servicios" value="Acceso a la playa" type="checkbox" />
                <span className="ml-2">En esta propiedad amamos las mascotas</span>
              </label>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto mt-3">
        <div>
          <div className="text-2xl">Paso 2</div>
          <div className="text-2xl">Agregá algunas fotos de tu propiedad</div>
          <p>Para comenzar vas a necesitar 3 fotos. Podés agregar otras más adelante.</p>
        </div>
        <div>
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la primer imagen"  />
            <button className="border border-black rounded p-1 w-32">Buscar</button>
          </div>
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la segunda imagen"/>
            <button className="border border-black rounded p-1 w-32">Buscar</button>
          </div>
          <div className="relative">
            <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la tercer imagen" />
            <button className="border border-black rounded p-1 w-32">Buscar</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto mt-3">
        <div>
          <div className="text-2xl">Agregá un título y una descripción a tu propiedad</div>
          <p>No te preocupes si no te gustan, podes cambiarlo más adelante</p>
          <input className="pl-8 w-3/4 h-10 border rounded-md mb-2" type="text" placeholder="Ingresa un título" maxLength={200} />
        </div>
        <div>
          <textarea className="pl-8 w-3/4 h-20 border rounded-md mb-2" placeholder="¿Qué hace que tu propiedad sea especial? ¡Contanos!" maxLength={600} ></textarea>
        </div>
      </div>
    </div>

    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">
            <h1>Paso 3</h1>
            <h1>Fijá el precio por noche</h1>
            <p className="text-sm">Podés modificarlo cuando quieras</p>
          </div>
          <div>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={handleDec}></i>
            <input type="number" value={price} onChange={handlePriceChange} className="w-20 text-center" />
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={handleInc}></i>
          </div>
          <p>Precio x Noche</p>
          <p>Ingresa un valor entre 1 y 5000</p>
          <p>Los precios en esta instancia no incluyen impuestos</p>
          <p>Más información sobre cómo calcular tu precio</p>
        </div>
      </div>
    </div>

    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto mt-3">
        <div>
          <div className="text-2xl">Ofrece descuentos</div>
          <p>
            Hacé que tu alojamiento se destaque para conseguir reservas más rápido y obtener tus primeras evaluaciones.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-2">
            <span className="text-center">20% Promoción para anuncios nuevos</span>
            <p>Ofrecé un 20% de descuento en tus primeras 3 reservas.</p>
          </button>
          <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-2">
            <span className="text-center">10% de descuento semanal</span>
            <p>Válido para estadías de 7 noches o más.</p>
          </button>
          <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-2">
            <span className="text-center">20% de descuento mensual</span>
            <p>Válido para estadías de 28 noches o más.</p>
          </button>
        </div>
      </div>
    </div>

    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto mt-3">
        <div>
          <div className="font-cairo text-2xl">Revisá tu anuncio</div>
          <p className="font-cairo">Así es como lo van a ver tus huéspedes</p>
        </div>
      </div>
    </div>
    <button className="border border-argentina rounded p-1 w-32" type="submit">submit</button>
      </form>

     
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default MegaForm;