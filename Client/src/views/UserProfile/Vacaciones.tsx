import { useState } from "react";
import { useSelector } from "react-redux";
import Rating from "../../components/Rating/Rating";

const Vacaciones = () => {
  const user = useSelector((state: any) => state.user);
  const [selectedRentId, setSelectedRentId]: any = useState(null);

  const handleRatingClick = (rentId: any) => {
    setSelectedRentId(rentId);
  };

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedRentId(null);
  }

  return (
    <div>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mt-10 font-cairo">
        <strong className="text-gray-700 uppercase font-bold">
          Mis Viajes
        </strong>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>Reserva</th>
                <th>Desde - Hasta</th>
                <th>Precio</th>
                <th>Direccion</th>
                <th>Localidad</th>
                <th>Provincia</th>
                <th>Propiedad</th>
                <th>Contacto</th>
                <th>Estado</th>
                <th>Conta tu experiencia</th>
              </tr>
            </thead>
            <tbody>
              {user.Rents &&
                user.Rents.map((rent: any, index: number) => {
                  const isSelected = selectedRentId === rent.rent_id;
                  const enableRating = rent.review_status === false;
                  const contact = `https://api.whatsapp.com/send?phone=${rent.Property.User.number}`
                  return (
                    <tr key={rent.id} className="text-center">
                      <td>#{index + 1}</td>
                      <td>
                        {rent.start_date} - {rent.end_date}
                      </td>
                      <td>${rent.amount}</td>
                      <td>{rent.Property.address}</td>
                      <td>{rent.Property.location}</td>
                      <td>{rent.Property.province}</td>
                      <td>{rent.Property.title}</td>
                      <td><a href={contact}>Contacta con el Propietario</a></td>
                      <td>
                        {rent.active
                          ? "Tu viaje esta por empezar"
                          : "Califica tu experiencia"}
                      </td>
                      <td>
                        {rent.review_status ? (
                          "Gracias por tu valoración"
                        ) : (
                          <div className="relative">
                            <button
                              className={`border border-red-500 px-4 rounded-md rating-button ${
                                isSelected ? "selected" : ""
                              }`}
                              onClick={() => {
                                handleRatingClick(rent.rent_id);
                                openModal();
                              }}
                              disabled={!enableRating}
                            >
                              Clickea aquí
                            </button>
                            {isSelected && (
                              <Rating
                                isOpen={isOpen}
                                setIsOpen={closeModal}
                                id_property={rent.id_property}
                                id_user={user.id_user}
                                rent_id={rent.rent_id}
                              />
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vacaciones;
