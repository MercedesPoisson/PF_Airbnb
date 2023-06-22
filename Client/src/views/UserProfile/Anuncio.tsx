import UserNavBar from "./UserNavBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPropertyDetail from "../../redux/actions/getPropertyDetail";

const propertyTypeMapping = {
  House: "Casa",
  Apartment: "Departamento",
  Room: "Habitación"
};

interface Service {
    service_id: string;
    name: string;
    icon: string;
  }

const Anuncio = () => {
    const property = useSelector((state: any) => state.detail);
    const services: Service[] = useSelector((state: any) => state.services);
    const dispatch = useDispatch();
    const { id } = useParams();

    const translatedPropertyType = propertyTypeMapping[property?.property_type];
    
    useEffect(() => {
        console.log(id);
        dispatch(getPropertyDetail(id));
      }, [dispatch, id]);

      const [title, setTitle] = useState(property.title);
      const [inputTitle, setInputTitle] = useState(property.title);
      const [address, setAddress] = useState(property.address);
    //   const [location, setLocation] = useState(property.location);
    //   const [province, setProvince] = useState(property.province);
      const [description, setDescription] = useState(property.description);
      const [type, setType] = useState(translatedPropertyType);
      const [guests, setGuests] = useState(property.max_guests);
      const [rooms, setRooms] = useState(property.rooms_number);
      const [beds, setBeds] = useState(property.beds_number);
      const [bath, setBath] = useState(property.bathrooms_number);
      const [price, setPrice] = useState(property.price_per_night);
      const [servicios, setServicios] = useState(property.services);
      const [pets, setPets] = useState(property.allow_pets);
      const [startDate, setStartDate] = useState(property.start_date);
      const [endDate, setEndDate] = useState(property.end_date);
      const [weeklyDisc, setWeeklyDisc] = useState(property.weekly_discount);
      const [monthlyDisc, setMonthlyDisc] = useState(property.monthly_discount);
      const [images, setImages] = useState(property.images);
      const [isEditing, setIsEditing] = useState(false);
      const [propertyState, setPropertyState] = useState(property);
      const [isCheckboxVisible, setIsCheckboxVisible] = useState(property.allow_pets);
      const [weeklyDiscount, setWeeklyDiscount] = useState(property.weekly_discount);
      const [monthlyDiscount, setMonthlyDiscount] = useState(property.monthly_discount);
      
      const handleServiceChange = (e) => {
        const selectedServiceId = e.target.value;
        const updatedServicios = servicios.includes(selectedServiceId)
          ? servicios.filter((service_Id) => service_Id !== selectedServiceId)
          : [...servicios, selectedServiceId];
        setServicios(updatedServicios);
      };

      const handleEditClick = () => {
        setIsEditing(true);
        setIsPetsAllowed(property.allow_pets || false);
        setIsCheckboxVisible(true);
        setWeeklyDiscount(property.weekly_discount);
        setMonthlyDiscount(property.monthly_discount);
      };
      
      const handleSaveClick = () => {
        setIsEditing(false);
        // Aquí puedes guardar los cambios realizados, incluido el valor de `allowPets`
      };

  return (
    <div>
      <UserNavBar />
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Revisá y editá tu anuncio</div>
          <p>
            Desde acá podés editar tu propiedad
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsEditing(true)}
            ></i>
          </p>
          <p>
            Hacé click acá si querés borrar tu propiedad{" "}
            <i className="fa-solid fa-eraser text-argentina"></i>
          </p>
        </div>
        <div>
        <h1 className="font-bold font-cairo-play flex ">
           <p className="mr-2">Título:</p>
        {isEditing ? (
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border w-w350"
            />
        ) : (
            <span onClick={() => setIsEditing(true)}>{property.title}</span>
        )}
        </h1>

        <h1 className="flex ">
            <p className="mr-2">Dirección:</p> 
        {isEditing ? (
            <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border w-w350"
            />
        ) : (
            <span onClick={() => setIsEditing(true)}>{property.address}</span>
        )}
        </h1>

          <h5>{property.location}</h5>
          <h5>{property.province}</h5>
          
          <h3 className="flex ">
          <p className="mr-2">Descripción:</p>
          {isEditing ? (
            <textarea
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border w-w350 h-36"
            />
        ) : (
            <span onClick={() => setIsEditing(true)}>{property.description}</span>
        )}

          </h3>

          <h3>
  Tipo de Propiedad:
  {isEditing ? (
    <>
      <label className="mr-2">
        <input
          type="checkbox"
          value="House"
          checked={type === "House"}
          onChange={() => setType("House")}
          className="mr-2 ml-2"
        />
        Casa
      </label>
      <label>
        <input
          type="checkbox"
          value="Apartment"
          checked={type === "Apartment"}
          onChange={() => setType("Apartment")}
          className="mr-2 ml-2"
        />
        Departamento
      </label>
      <label>
        <input
          type="checkbox"
          value="Room"
          checked={type === "Room"}
          onChange={() => setType("Room")}
          className="mr-2 ml-2"
        />
        Habitación
      </label>
    </>
  ) : (
    translatedPropertyType
  )}
</h3>

          <h2>
            Cantidad de Huespedes: {isEditing ? (
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="border w-16"
              />
            ) : (
              property.max_guests
            )}
          </h2>

          <h2>
            Cantidad Dormitorios: {isEditing ? (
              <input
                type="number"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="border w-16"
              />
            ) : (
              property.rooms_number
            )}
          </h2>

          <h2>
            Cantidad de Camas: {isEditing ? (
              <input
                type="number"
                value={beds}
                onChange={(e) => setBeds(Number(e.target.value))}
                className="border w-16"
              />
            ) : (
              property.beds_number
            )}
          </h2>

          <h2>
            Cantidad de Baños: {isEditing ? (
              <input
                type="number"
                value={bath}
                onChange={(e) => setBath(Number(e.target.value))}
                className="border w-16"
              />
            ) : (
              property.bathrooms_number
            )}
          </h2>

          <h4 className="font-bold">
            Precio por Noche: $ {isEditing ? (
            <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border w-16"
            />
            ) : (
                property.price_per_night
            )}
            </h4>

            <div className="grid grid-cols-3 gap-4 mb-2 mt-2">
                <p>Servicios Incluidos:</p>
            {isEditing ? (
                services.map((service) => (
                <div key={service.service_id} className="flex items-center">
                    <label>
                    <input
                        type="checkbox"
                        value={service.service_id}
                        checked={servicios && servicios.includes(service.service_id)}
                        onChange={(e) => handleServiceChange(e.target.value)}
                    />
                    <i className={`${service.icon} mr-2 ml-3`}></i>
                    <span>{service.name}</span>
                    </label>
                </div>
                ))
            ) : (
                property.Services && property.Services.map((service, index) => (
                <div key={index} className="flex items-center">
                    <i className={`${service.icon} mr-2`}></i>
                    <span>{service.name}</span>
                </div>
                ))
            )}
            </div>

            {/* <h3>
  Tipo de Propiedad:
  {isEditing ? (
    <>
      <label className="mr-2">
        <input
          type="checkbox"
          value="House"
          checked={type === "House"}
          onChange={() => setType("House")}
          className="mr-2 ml-2"
        />
  ) : (
    translatedPropertyType
  )}
</h3> */}
          {isEditing && (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={propertyState.allow_pets}
      onChange={() => setPropertyState({ ...propertyState, allow_pets: !propertyState.allow_pets })}
    />
    <h3 className="font-semibold">
      Podes venir a disfrutar con tu mascota{" "}
      <i className="fa-solid fa-paw ml-2 text-argentina"></i>
    </h3>
  </div>
)}

{!isEditing && property.allow_pets && (
  <h3 className="font-semibold">
    Podes venir a disfrutar con tu mascota{" "}
    <i className="fa-solid fa-paw ml-2 text-argentina"></i>
  </h3>
)}


          <h3>
            Esta propiedad se encuentra disponible desde: {property.start_date} hasta {property.end_date}
          </h3>

          
          {(property.weekly_discount || property.monthly_discount) && !isEditing && (
        <h4 className="font-bold font-cairo-play">Esta propiedad ofrece descuentos!</h4>
      )}

      {isEditing && (
        <div className="flex items-center">
          <label>
            <input
              type="checkbox"
              checked={weeklyDiscount}
              onChange={() => setWeeklyDiscount(!weeklyDiscount)}
            />
            Ofrece descuentos semanales
          </label>
          <label>
            <input
              type="checkbox"
              checked={monthlyDiscount}
              onChange={() => setMonthlyDiscount(!monthlyDiscount)}
            />
            Ofrece descuentos mensuales
          </label>
        </div>
      )}
          
        </div>


        <div className="flex space-x-4">
          {property.images &&
            property.images.map((imageUrl: string, index: number) => (
              <img
                className="h-60"
                key={index}
                src={imageUrl}
                alt={`Image ${index}`}
              />
            ))}
        </div>
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={() => {
            setTitle(inputTitle);
            setIsEditing(false);
        }}>
            Guardar
          </button>
          {/* <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={property.handlePost}>Finalizar</button> */}
        </div>
      </div>
    </div>
  );
};

export default Anuncio;