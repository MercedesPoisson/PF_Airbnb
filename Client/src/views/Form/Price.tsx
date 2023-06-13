import { useState, ChangeEvent } from "react";

const Price = () => {
  const [price, setPrice] = useState(1000);

  const handleIncrement = () => {
    if (price < 5000) {
      setPrice((prevPrice) => prevPrice + 1);
    }
  };

  const handleDecrement = () => {
    if (price > 1) {
      setPrice((prevPrice) => prevPrice - 1);
    }
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value, 10);
    if (!isNaN(newPrice) && newPrice >= 1 && newPrice <= 5000) {
      setPrice(newPrice);
    }
  };

  return (
    <div className="font-cairo">
      <div className="flex items-center mr-10">
        <i className="fa-solid fa-minus border rounded-full mx-1" onClick={handleDecrement}></i>
        <input type="number" value={price} onChange={handlePriceChange} className="w-20 text-center" />
        <i className="fa-solid fa-plus border rounded-full mx-1" onClick={handleIncrement}></i>
      </div>
      <p >Precio x Noche</p>
      <p>Ingresa un valor entre 1 y 5000</p>
      <p>los precios en esta instancia no incluyen impuestos</p>
      <p>mas informacion de como calcular tu precio</p>
    </div>
  );
};

export default Price;