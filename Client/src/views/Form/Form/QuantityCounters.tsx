import { useState } from "react";

const QuantityCounter = (props) => {
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

  const handleDecrement = (category:string) => {
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "ocupantes") {
      setOcupantes(parseInt(value));
    } else if (name === "dormitorios") {
      setDormitorios(parseInt(value));
    } else if (name === "camas") {
      setCamas(parseInt(value));
    } else if (name === "banos") {
      setBanos(parseInt(value));
    }
  };

  const handleSave = () => {
    props.handleInputChange({
      target: {
        name: "max_guests",
        value: ocupantes,
      },
    });
    props.handleInputChange({
      target: {
        name: "rooms_number",
        value: dormitorios,
      },
    });
    props.handleInputChange({
      target: {
        name: "beds_number",
        value: camas,
      },
    });
    props.handleInputChange({
      target: {
        name: "bathrooms_number",
        value: banos,
      },
    });
  };

  const handleNext = () => {
    handleSave(); // Llama a la función handleSave antes de pasar al siguiente paso
    props.nextStep();
  };


  return (
    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <h2 className="text-2xl">Agregá algunos datos básicos sobre tu propiedad</h2>
          <p>Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="ocupantes">Ocupantes</label>
            <i
              className="fa-solid fa-minus border rounded-full mx-1"
              onClick={() => handleDecrement("ocupantes")}
            ></i>
            <input
              type="number"
              id="ocupantes"
              name="ocupantes"
              value={ocupantes}
              onChange={handleInputChange}
            />
            <i
              className="fa-solid fa-plus border rounded-full mx-1"
              onClick={() => handleIncrement("ocupantes")}
            ></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="dormitorios">Dormitorios</label>
            <i
              className="fa-solid fa-minus border rounded-full mx-1"
              onClick={() => handleDecrement("dormitorios")}
            ></i>
            <input
              type="number"
              id="dormitorios"
              name="dormitorios"
              value={dormitorios}
              onChange={handleInputChange}
            />
            <i
              className="fa-solid fa-plus border rounded-full mx-1"
              onClick={() => handleIncrement("dormitorios")}
            ></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="camas">Camas</label>
            <i
              className="fa-solid fa-minus border rounded-full mx-1"
              onClick={() => handleDecrement("camas")}
            ></i>
            <input type="number" id="camas" name="camas" value={camas} onChange={handleInputChange} />
            <i
              className="fa-solid fa-plus border rounded-full mx-1"
              onClick={() => handleIncrement("camas")}
            ></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="banos">Baños</label>
            <i
              className="fa-solid fa-minus border rounded-full mx-1"
              onClick={() => handleDecrement("banos")}
            ></i>
            <input type="number" id="banos" name="banos" value={banos} onChange={handleInputChange} />
            <i
              className="fa-solid fa-plus border rounded-full mx-1"
              onClick={() => handleIncrement("banos")}
            ></i>
          </div>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
        <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>
          Anterior
        </button>
        <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNext}>
          Siguiente
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default QuantityCounter;