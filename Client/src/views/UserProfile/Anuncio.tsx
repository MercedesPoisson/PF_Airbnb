// import UserNavBar from "./UserNavBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getPropertyDetail from "../../redux/actions/getPropertyDetail";
import updateProperty from "../../redux/actions/updateProperty";
import updatePropertyStatus from "../../redux/actions/updatePropertStatus";
import getProperties from "../../redux/actions/getProperties";
import Review from "../../components/Rating/Review";
import Report from "../../components/detail/Report";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "react-modal";

const propertyTypeMapping = {
  House: "House",
  Apartment: "Apartment",
  Room: "Room",
};

interface Service {
  service_id: string;
  name: string;
  icon: string;
}

const Anuncio = () => {
  const property = useSelector((state: any) => state.detail);
  const services: Service[] = useSelector((state: any) => state.services);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isAuthenticated,
    isLoading: auth0IsLoading,
    loginWithRedirect,
  } = useAuth0();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!auth0IsLoading && isAuthenticated && user && property) {
      if (user.id_user === property.id_user) {
        setIsAuthorized(true);
      }
    }
  }, [auth0IsLoading, isAuthenticated, user, property]);

  const translatedPropertyType = propertyTypeMapping[property?.property_type];

  useEffect(() => {
    const dispatchfunction = async () => {
      await dispatch(getPropertyDetail(id));
    };
    dispatchfunction();
  }, [dispatch, id]);

  const [property_id, setPropId] = useState(property.property_id);
  const [user_id, setUserId] = useState(property.user_id);
  const [title, setTitle] = useState(property.title || "");
  const [address, setAddress] = useState(property.address || "");
  const [description, setDescription] = useState(property.description || "");
  const [type, setType] = useState(translatedPropertyType);
  const [guests, setGuests] = useState(property.max_guests || 1);
  const [rooms, setRooms] = useState(property.rooms_number || 1);
  const [beds, setBeds] = useState(property.beds_number || 1);
  const [bath, setBath] = useState(property.bathrooms_number || 1);
  const [price, setPrice] = useState(property.price_per_night || 1);
  const [servicios, setServicios] = useState(
    property.Services?.map((service: any) => service.name) || ""
  );
  const [startDate, setStartDate] = useState(property.start_date || "");
  const [endDate, setEndDate] = useState(property.end_date || "");
  const [images, setImages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [allow_pets, setAllowPets] = useState(property.allow_pets);
  const [weeklyDiscount, setWeeklyDiscount] = useState(
    property.weekly_discount || 1
  );
  const [monthlyDiscount, setMonthlyDiscount] = useState(
    property.monthly_discount || 1
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  function reportReview(ratingId) {
    //para abrir el modal de review
    setSelectedRating(ratingId);
    setIsOpen(true);
  }
  function closeModal() {
    setSelectedRating(null);
    setIsOpen(false);
  }

  console.log(weeklyDiscount);
  console.log(monthlyDiscount);
  console.log(allow_pets);

  const handleServiceChange = async (e) => {
    const selectedServiceId = e.target.value;
    const isChecked = e.target.checked;

    const updatedServicios = isChecked
      ? [...servicios, selectedServiceId]
      : servicios.filter((serviceId) => serviceId !== selectedServiceId);

    await setServicios(updatedServicios);
  };

  const handleEditClick = async () => {
    await dispatch(getProperties());
    await setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const updatedProperty = {
      id_property: property?.id_property,
      id_user: property?.id_user,
      title: title || property.title,
      property_type: type || property.property_type,
      description: description || property.description,
      price_per_night: price || property.price_per_night,
      rooms_number: rooms || property.rooms_number,
      bathrooms_number: bath || property.bathroms_number,
      beds_number: beds || property.beds_number,
      max_guests: guests || property.max_guests,
      allow_pets: allow_pets,
      weekly_discount: weeklyDiscount,
      monthly_discount: monthlyDiscount,
      services:
        servicios || property.Services?.map((service: any) => service.name),
    };

    await dispatch(updateProperty(updatedProperty));
    await dispatch(getPropertyDetail(id));
    setIsEditing(false);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState(null);

  const handleDelete = (property) => {
    setPropertyToDelete(property);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setPropertyToDelete(null);
  };

  const handleConfirmDelete = async (property) => {
    await dispatch(updatePropertyStatus(property));
    handleCloseDeleteModal();
    navigate("/usuario/anuncios#");
  };

  useEffect(() => {
    setPropId(property.property_id);
    setUserId(property.user_id);
    setTitle(property.title || "");
    setAddress(property.address || "");
    setDescription(property.description || "");
    setType(translatedPropertyType);
    setGuests(property.max_guests || 1);
    setRooms(property.rooms_number || 1);
    setBeds(property.beds_number || 1);
    setBath(property.bathrooms_number || 1);
    setPrice(property.price_per_night || 1);
    setServicios(property.Services?.map((service: any) => service.name) || "");
    setStartDate(property.start_date || "");
    setEndDate(property.end_date || "");
    setImages([]);
    setIsEditing(false);
    setAllowPets(property.allow_pets);
    setWeeklyDiscount(property.weekly_discount || 1);
    setMonthlyDiscount(property.monthly_discount || 1);
  }, [property]);

  const chunk = (arr: any, size: any) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <div>
      {/* <UserNavBar /> */}
      {isAuthorized ? (
        <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto mt-10">
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
              <i
                onClick={() => handleDelete(property)}
                className="fa-solid fa-eraser text-argentina"
              ></i>
            </p>
            <Modal
              isOpen={showDeleteModal}
              style={{
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                },
              }}
            >
              <h2>¿Estás seguro que deseas borrar esta propiedad?</h2>
              <button
                onClick={() => handleConfirmDelete(propertyToDelete)}
                className="border border-argentina px-4 rounded-md mr-2 mt-2"
              >
                Borrar
              </button>
              <button
                onClick={handleCloseDeleteModal}
                className="border border-argentina px-4 rounded-md mt-2"
              >
                Volver
              </button>
            </Modal>
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
              <span onClick={() => setIsEditing(true)}>{property.address}</span>
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
                <span onClick={() => setIsEditing(true)}>
                  {property.description}
                </span>
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
              Cantidad de Huespedes:
              {isEditing ? (
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
              Cantidad Dormitorios:
              {isEditing ? (
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
              Cantidad de Camas:
              {isEditing ? (
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
              Cantidad de Baños:
              {isEditing ? (
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
              Precio por Noche: ${" "}
              {isEditing ? (
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
              {isEditing
                ? services.map((service) => (
                    <div key={service.service_id} className="flex items-center">
                      <label>
                        <input
                          type="checkbox"
                          value={service.name}
                          defaultChecked={
                            servicios && servicios.includes(service.name)
                          }
                          onClick={handleServiceChange}
                        />
                        <i className={`${service.icon} mr-2 ml-3`}></i>
                        <span>{service.name}</span>
                      </label>
                    </div>
                  ))
                : property.Services &&
                  property.Services.map((service: any, index: number) => (
                    <div key={index} className="flex items-center">
                      <i className={`${service.icon} mr-2`}></i>
                      <span>{service.name}</span>
                    </div>
                  ))}
            </div>

            {isEditing && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={allow_pets}
                  onChange={() => setAllowPets(!allow_pets)}
                  className="mr-2"
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
              Esta propiedad se encuentra disponible desde:{" "}
              {property.start_date} hasta {property.end_date}
            </h3>

            {(property.weekly_discount || property.monthly_discount) &&
              !isEditing && (
                <h4 className="font-bold font-cairo-play">
                  Esta propiedad ofrece descuentos!
                </h4>
              )}

            {isEditing && (
              <div className="flex items-center">
                <label>
                  <input
                    type="checkbox"
                    checked={weeklyDiscount}
                    onChange={() => setWeeklyDiscount(!weeklyDiscount)}
                    className=" mr-2"
                  />
                  Ofrece descuentos semanales
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={monthlyDiscount}
                    onChange={() => setMonthlyDiscount(!monthlyDiscount)}
                    className="ml-2 mr-2"
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
                  alt={`Property Image ${index}`}
                />
              ))}
          </div>

          <div className="flex gap-4 ">
            {isEditing ? (
              <>
                <button
                  className="bg-argentina text-white py-2 px-4 rounded"
                  onClick={handleSaveClick}
                >
                  Guardar Cambios
                </button>
                <button
                  className="bg-argentina text-white py-2 px-4 rounded"
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                className="bg-argentina text-white py-2 px-4 rounded"
                onClick={handleEditClick}
              >
                Editar
              </button>
            )}
          </div>
          <div>
            {property.Ratings &&
              property.Ratings.length > 0 &&
              chunk(property.Ratings, 2).map((group, index) => (
                <div key={index} className="flex mb-4 mt-5">
                  {group.map((rating: any, i: number) => (
                    <div key={i} className="relative">
                      <Review rating={rating} />
                      {!rating.is_active && ( // Verificar si el rating no ha sido reportado
                        <button
                          onClick={() => reportReview(rating.rating_id)}
                          className="text-argentina absolute -top-1 right-0"
                        >
                          Reportar
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ))}
          </div>
          <Report
            isOpen={isOpen && selectedRating !== null}
            setIsOpen={closeModal}
            SelectedRating={selectedRating}
          />
        </div>
      ) : (
        <div>No tienes permisos para modificar esta propiedad</div>
      )}
    </div>
  );
};

export default Anuncio;
