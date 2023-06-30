import { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
// import UserNavBar from "./UserNavBar";
import Rating from "../../components/Rating/Rating";

const Vacaciones = () => {
  const user = useSelector((state: any) => state.user);
  const [selectedPropertyIds, setSelectedPropertyIds]: any = useState({});
  

  const handleRatingClick = (propertyId: any) => {
    const rent = user.Rents.find((rent: any) => rent.id_property === propertyId);
    if (rent && rent.review_status === false) {
      setSelectedPropertyIds((prevSelectedPropertyIds: any) => ({
        ...prevSelectedPropertyIds,
        [propertyId]: !prevSelectedPropertyIds[propertyId]
      }));
    }
  };

  const [ isOpen, setIsOpen ] = useState(false);

  function openModal() {
   setIsOpen(true);
  } 

 
  return (
    <div>
      {/* <UserNavBar /> */}
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mt-20 font-cairo">
        <strong className="text-gray-700 uppercase font-bold">Mis Viajes</strong>
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
                <th>Estado</th>
                <th>Conta tu experiencia</th>
              </tr>
            </thead>
            <tbody>
            {user.Rents && user.Rents.map((rent: any, index:number) => {
            const isSelected = selectedPropertyIds[rent.id_property];
            const enableRating = rent.review_status === false;

                return (
                  <tr key={rent.id} className="text-center">
                    <td>#{index + 1}</td>
                    <td>{rent.start_date} - {rent.end_date}</td>
                    <td>${rent.amount}</td>
                    <td>{rent.Property.address}</td>
                    <td>{rent.Property.location}</td>
                    <td>{rent.Property.province}</td>
                    <td>{rent.Property.title}</td>
                    <td>{rent.active ? "Tu viaje esta por empezar" : "Califica tu experiencia"}</td>
                    <td>
                    {user?.Ratings?.find((rating: any) => rating.id_property === rent.id_property) 
                      ? 'Gracias por tu valoración' 
                      : (
                        <div className='relative'>
                          <button
                            className={`border border-red-500 px-4 rounded-md rating-button ${isSelected ? 'selected' : ''}`}
                            onClick={() => 
                              {handleRatingClick(rent.id_property);
                              openModal()}                        
                            }
                            
                            disabled={!enableRating}
                          >
                            Clickea aquí
                          </button>
                          {isSelected && <Rating isOpen={isOpen} setIsOpen={setIsOpen} id_property={rent.id_property} id_user={user.id_user} rent_id={rent.rent_id} />}
                        </div>
                      )
                    }
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
}

export default Vacaciones;
