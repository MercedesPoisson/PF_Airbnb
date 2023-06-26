import { useSelector } from "react-redux";
import UserNavBar from "./UserNavBar";

const Vacaciones = () => {
  const user = useSelector((state: any) => state.user);
  const properties = useSelector((state: any) => state.properties);
  const userProperties = properties && properties.filter((property: any) => property.id_user === user.id_user);

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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {user.Rents && user.Rents.map((rent: any, index:number) => {
                const property = properties.find((p: any) => p.Rents && p.Rents.find((r: any) => r.id === rent.id));

                if (property) {
                  return (
                    <tr key={rent.id} className="text-center">
                      <td >#{index + 1}</td>
                      <td>{rent.start_date} - {rent.end_date}</td>
                      <td>${rent.amount}</td>
                      <td>{property.address}</td>
                      <td>{property.location}</td>
                      <td>{property.province}</td>
                      <td>{property.title}</td>
                      <td>{rent.active ? "Tu vieja esta por empezar" : "Califica tu experiencia"}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Vacaciones;