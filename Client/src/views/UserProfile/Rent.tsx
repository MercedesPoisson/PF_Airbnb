import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Rent = () => {
  const user = useSelector((state: any) => state.user);
  const [properties, setProperties] = useState([]);

  const reservedProperties =
    properties &&
    properties.filter((property: any) => property.id_user === user.id_user);

  const currentDate = new Date();

  return (
    <div className="flex justify-center items-start mt-10">
      <div className="px-4 pt-3 pb-4 rounded-sm flex-1 font-cairo w-full max-w-4xl">
        <div className="text-white uppercase font-bold bg-tercero w-full h-10">
          Mis Propiedades Reservadas
        </div>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <table className="w-full max-w4xl text-gray-700 mx-auto">
            <thead>
              <tr>
                <th>Reserva</th>
                <th>Desde - Hasta</th>
                <th>Precio</th>
                <th>
                  <div>Numero de</div>
                  <div>Huéspedes</div>
                </th>
                <th>Estado del Pago</th>
                <th>Estado</th>
                <th>Valoración</th>
                <th>Contacto</th>
              </tr>
            </thead>
            <tbody className="leading-loose">
              {user.properties &&
                user.properties.map((property: any) => {
                  if (property.rents && property.rents.length > 0) {
                    return property.rents.map((rent: any, index: number) => {
                      const isActive =
                        rent.active && new Date(rent.end_date) >= currentDate;
                      const contact = `https://api.whatsapp.com/send?phone=${property?.User?.number}`;
                      return (
                        <tr key={rent.rent_id} className="text-center border-b">
                          <td>#{index + 1}</td>
                          <td>
                            <div>{rent.start_date}</div>
                            <div>{rent.end_date}</div>
                          </td>
                          <td>${rent.amount}</td>
                          <td>{rent.guests_number}</td>
                          <td>
                            {rent.payment_status
                              ? "Pagado"
                              : "Pendiente de pago"}
                          </td>
                          <td>{isActive ? "Activo" : "Inactivo"}</td>
                          <td>
                            <Link
                              to={`/usuario/reviews/${rent.id_property}`}
                            >
                              <i className="fa-solid fa-magnifying-glass text-tercero"></i>
                            </Link>
                          </td>
                          <td>
                            <a href={contact}>
                              <i className="fa-brands fa-whatsapp text-tercero text-3xl"></i>
                            </a>
                          </td>
                        </tr>
                      );
                    });
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