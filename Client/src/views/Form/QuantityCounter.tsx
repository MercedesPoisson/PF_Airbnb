import { useState } from "react";

const QuantityCounter = () => {
  const [ocupantes, setOcupantes] = useState(1);
  const [dormitorios, setDormitorios] = useState(1);
  const [camas, setCamas] = useState(1);
  const [banos, setBanos] = useState(1);

  const handleIncrement = (category: string) => {
    switch (category) {
      case "ocupantes":
        if (ocupantes < 10) {
          setOcupantes(ocupantes + 1);
        }
        break;
      case "dormitorios":
        if (dormitorios < 10) {
          setDormitorios(dormitorios + 1);
        }
        break;
      case "camas":
        if (camas < 10) {
          setCamas(camas + 1);
        }
        break;
      case "banos":
        if (banos < 10) {
          setBanos(banos + 1);
        }
        break;
      default:
        break;
    }
  };

  const handleDecrement = (category: string) => {
    switch (category) {
      case "ocupantes":
        if (ocupantes > 1) {
          setOcupantes(ocupantes - 1);
        }
        break;
      case "dormitorios":
        if (dormitorios > 1) {
          setDormitorios(dormitorios - 1);
        }
        break;
      case "camas":
        if (camas > 1) {
          setCamas(camas - 1);
        }
        break;
      case "banos":
        if (banos > 1) {
          setBanos(banos - 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-2 font-cairo gap-2 w-3/4 mx-auto mt-20">
      <div>
        <div className="text-2xl">Agregá algunos datos básicos sobre tu propiedad</div>
        <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>
      </div>
      <div>
        <div className="flex items-center mr-10">
          <p>Ocupantes</p>
          <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("ocupantes")}></i>
          <p>{ocupantes}</p>
          <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("ocupantes")}></i>
        </div>
        <div className="flex items-center mr-10">
          <p>Dormitorios</p>
          <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("dormitorios")}></i>
          <p>{dormitorios}</p>
          <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("dormitorios")}></i>
        </div>
        <div className="flex items-center mr-10">
          <p>Camas</p>
          <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("camas")}></i>
          <p>{camas}</p>
          <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("camas")}></i>
        </div>
        <div className="flex items-center">
          <p>Baños</p>
          <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("banos")}></i>
          <p>{banos}</p>
          <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("banos")}></i>
        </div>
      </div>
      <div className="col-span-2 font-cairo-play flex justify-start ml-10">
        <button className="border border-argentina rounded p-1 w-32 mt-4">Siguiente</button>
      </div>
    </div>
  );
};

export default QuantityCounter;