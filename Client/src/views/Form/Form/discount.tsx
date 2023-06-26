import { useState } from "react";

const Discount = (props) => {
  const { formData, setFormData } = props;
  const [weeklyDiscount, setWeeklyDiscount] = useState(formData.weekly_discount);
  const [monthlyDiscount, setMonthlyDiscount] = useState(formData.monthly_discount);

  const handleWeeklyDiscountChange = (event) => {
    setWeeklyDiscount(event.target.checked);
  };

  const handleMonthlyDiscountChange = (event) => {
    setMonthlyDiscount(event.target.checked);
  };

  const handleNextStep = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      weekly_discount: weeklyDiscount,
      monthly_discount: monthlyDiscount,
    }));
    props.nextStep();
  };

  return (
    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Ofrece descuentos</div>
          <p>
            Hacé que tu alojamiento se destaque para conseguir reservas más rápido y obtener tus primeras evaluaciones.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <label className="flex items-center justify-center bg-transparent border border-black rounded-md w-96 mb-2 p-2">
            <input
              type="checkbox"
              checked={weeklyDiscount}
              onChange={handleWeeklyDiscountChange}
              className="mr-2"
            />
            <span className="text-center">10% de descuento semanal</span>
            <p>Válido para estadías de 7 noches o más.</p>
          </label>
          <label className="flex items-center justify-center bg-transparent border border-black rounded-md w-96 mb-2 p-2">
            <input
              type="checkbox"
              checked={monthlyDiscount}
              onChange={handleMonthlyDiscountChange}
              className="mr-2"
            />
            <span className="text-center">20% de descuento mensual</span>
            <p>Válido para estadías de 28 noches o más.</p>
          </label>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNextStep}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;