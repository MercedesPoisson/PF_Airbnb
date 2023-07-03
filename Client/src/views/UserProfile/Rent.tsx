
const Rent = () => {
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
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>#{}</td>
                <td>{} - {}</td>
                <td>${}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rent;
