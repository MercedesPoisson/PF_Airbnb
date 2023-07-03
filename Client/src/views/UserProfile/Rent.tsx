import { useState } from "react";
import { useSelector } from "react-redux";

const Rent = () => {
  const user = useSelector((state: any) => state.user);
  const [properties, setProperties] = useState([]);

  const reservedProperties =
    properties &&
    properties.filter((property: any) => property.id_user === user.id_user);

  return (
    <div>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mt-10 font-cairo">
        <strong className="text-gray-700 uppercase font-bold">
          Mis Propiedades Reservadas
        </strong>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>Reserva</th>
                <th>Desde - Hasta</th>
                <th>Precio</th>
                <th>Numero de Huéspedes</th>
                <th>Estado del Pago</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {user.properties &&
                user.properties.map((property: any) => {
                  if (property.rents && property.rents.length > 0) {
                    return property.rents.map((rent: any, index: number) => (
                      <tr key={rent.rent_id} className="text-center">
                        <td>#{index + 1}</td>
                        <td>{rent.start_date} - {rent.end_date}</td>
                        <td>${rent.amount}</td>
                        <td>{rent.guests_number}</td>
                        <td>{rent.payment_status ? "Pagado" : "Pendiente de pago"}</td>
                        <td>{rent.active ? "Activo" : "Inactivo"}</td>
                      </tr>
                    ));
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rent;