function Discount() {
    return (
        <div>
            <div className="font-cairo text-2xl mt-8">Ofrece descuentos</div>
            <p className="font-cairo">hacé que tu alojamiento se destaque para conseguir reservas más rápido y obtener tus primeras evaluaciones.</p>
        <div className="flex justify-center">
          <div className="gap-1">
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-4">
              <span className="text-center font-cairo">20% Promocion para anuncios nuevos</span>
              <p>Ofrecé un 20% de descunto en tus primeras 3 reservas.</p>
            </button>
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-4 ">
              <span className="text-center font-cairo">10% de descuento semanal</span>
              <p>valido para estadías de 7 noches o más.</p>
            </button>
            <button className="flex flex-col items-center justify-center bg-transparent border border-black rounded-md w-96 mb-4 ">
              <span className="text-center font-cairo">20% de descuento mensual</span>
              <p>valido para estadías de 28 noches o más.</p>
            </button>
          </div>
        </div>
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
              <button className="border border-argentina rounded p-1 w-32">Siguiente</button>
            </div>
        </div>
      
    );
  }
  
  export default Discount;