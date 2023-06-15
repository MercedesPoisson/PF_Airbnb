import { useState } from "react"

const Price = (props) => {
  const { formData, setFormData, nextStep, previousStep } = props;
  const [price, setPrice] = useState(formData.price_per_night);

  const handleIncrement = () => {
    if (price < 5000) {
      setPrice((prevPrice) => prevPrice + 1);
      setFormData((prevFormData) => ({
        ...prevFormData,
        price_per_night: price + 1,
      }));
    }
  };

  const handleDecrement = () => {
    if (price > 1) {
      setPrice((prevPrice) => prevPrice - 1);
      setFormData((prevFormData) => ({
        ...prevFormData,
        price_per_night: price - 1,
      }));
    }
  };

  const handlePriceChange = (event) => {
    const newPrice = parseInt(event.target.value, 10);
    if (!isNaN(newPrice) && newPrice >= 1 && newPrice <= 5000) {
      setPrice(newPrice);
      setFormData((prevFormData) => ({
        ...prevFormData,
        price_per_night: newPrice,
      }));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">
            <h1>Paso 3</h1>
            <h1>Fijá el precio por noche</h1>
            <p className="text-sm">Podés modificarlo cuando quieras</p>
          </div>
          <div>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={handleDecrement}></i>
            <input
              type="number"
              value={price}
              onChange={handlePriceChange}
              className="w-20 text-center"
            />
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={handleIncrement}></i>
          </div>
          <p>Precio x Noche</p>
          <p>Ingresa un valor entre 1 y 5000</p>
          <p>Los precios en esta instancia no incluyen impuestos</p>
          <p>Más información sobre cómo calcular tu precio</p>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={previousStep}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={nextStep}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;