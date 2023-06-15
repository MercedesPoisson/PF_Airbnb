import  { useState } from "react"

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.handleInputChange(event); // Llamar a la función handleInputChange del componente Form
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

    return (
        <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Agregá algunos datos básicos sobre tu propiedad</div>
          <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="ocupantes">Ocupantes</label>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("ocupantes")}></i>
            <input
              type="number"
              id="ocupantes"
              name="ocupantes"
              value={ocupantes}
              onChange={handleInputChange}
            />
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("ocupantes")}></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="dormitorios">Dormitorios</label>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("dormitorios")}></i>
            <input
              type="number"
              id="dormitorios"
              name="dormitorios"
              value={dormitorios}
              onChange={handleInputChange}
            />
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("dormitorios")}></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="camas">Camas</label>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("camas")}></i>
            <input type="number" id="camas" name="camas" value={camas} onChange={handleInputChange} />
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("camas")}></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="banos">Baños</label>
            <i className="fa-solid fa-minus border rounded-full mx-1" onClick={() => handleDecrement("banos")}></i>
            <input type="number" id="banos" name="banos" value={banos} onChange={handleInputChange} />
            <i className="fa-solid fa-plus border rounded-full mx-1" onClick={() => handleIncrement("banos")}></i>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 w-3/4 mx-auto">
        <button className="btn" onClick={props.previousStep}>
          Atrás
        </button>
        <button className="btn btn-primary" onClick={props.nextStep}>
          Siguiente
        </button>
      </div>
    </div>

    )
}

export default QuantityCounter;