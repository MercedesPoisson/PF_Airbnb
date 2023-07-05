import { useState } from "react";
import { useSelector } from "react-redux";

const Transacciones = () => {
  const user = useSelector((state: any) => state.user);
  const properties = useSelector((state: any) => state.properties);
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
                <th>Factura</th>
                <th>Fecha</th>
                <th>Dinero Disponible</th>
                <th>Precio Noche</th>
                <th>#noches</th>
                <th>Aplica descuento</th>
                <th>Total</th>
                <th>Ver Factura</th>
              </tr>
            </thead>
            <tbody className="leading-loose">
              {properties.map((property: any) => {
                if (property.rents && property.rents.length > 0) {
                  return property.rents.map((rent: any, index: number) => {
                    const isActive =
                      rent.active && new Date(rent.end_date) >= currentDate;
                    const noches = rent.amount / property.price_per_night;
                    const aplicaDescuento =
                      property.weekly_discount || property.monthly_discount;

                    return (
                      <tr key={rent.rent_id} className="text-center border-b">
                        <td>#{index + 1}</td>
                        <td>{rent.creation_date}</td>
                        <td>{rent.start_date}</td>
                        <td>{noches}</td>
                        <td>{aplicaDescuento ? "SI" : "NO"}</td>
                        <td>{rent.amount}</td>
                        <td>Contenido de la celda</td>
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

export default Transacciones;