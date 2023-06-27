import { useState } from 'react'
import { useSelector } from "react-redux";
import UserNavBar from "./UserNavBar";
import Modal from 'react-modal'
import Rating from "../../components/Rating/Rating";



const Vacaciones = () => {
  const user = useSelector((state: any) => state.user);
  const properties = useSelector((state: any) => state.properties);
  
  const [ratingIsOpen, setRatingIsOpen] = useState(false);


  

  return (
    <div>
      <UserNavBar />
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mt-20">
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

                  return (
                    <tr key={rent.id} className="text-center">
                      <td >#{index + 1}</td>
                      <td>{rent.start_date} - {rent.end_date}</td>
                      <td>${rent.amount}</td>
                      <td>{rent.Property.address}</td>
                      <td>{rent.Property.location}</td>
                      <td>{rent.Property.province}</td>
                      <td>{rent.Property.title}</td>
                      <td>{rent.active ? "Tu viaje esta por empezar" : "Califica tu experiencia"}</td>
                      <td>
                        {user?.Ratings?.find((rating: any) => rating.id_property === rent.Property.id_property) 
                        ? 'Gracias por tu valoración' 
                        : <button onClick={() => setRatingIsOpen(true)} className="border border-red-500 px-4 rounded-md">Clickea aqui</button>}
                        <Modal
                        isOpen={ratingIsOpen}
                        onRequestClose={() => setRatingIsOpen(false)}
                        contentLabel="Contanos tu experiencia"
                        ><Rating id_property={rent.Property.id_property} id_user={user.id_user} onRequestClose={() => setRatingIsOpen(false)}/>
                        </Modal>
                      </td>
                    </tr>
                  );
                
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default Vacaciones;