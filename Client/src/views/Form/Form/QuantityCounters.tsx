import { useState, useEffect } from "react";

const QuantityCounter = (props) => {
  const storedFormData = localStorage.getItem('locationFormData');
  const initialFormData = storedFormData ? JSON.parse(storedFormData) : {};

  const [ocupantes, setOcupantes] = useState(initialFormData.max_guests || 1);
  const [dormitorios, setDormitorios] = useState(initialFormData.rooms_number || 1);
  const [camas, setCamas] = useState(initialFormData.beds_number || 1);
  const [banos, setBanos] = useState(initialFormData.bathrooms_number || 1);

useEffect(() => {
      localStorage.setItem(
        "locationFormData",
        JSON.stringify({
          ...props.formData,
          max_guests: ocupantes,
          rooms_number: dormitorios,
          beds_number: camas,
          bathrooms_number: banos
        })
      );
      console.log("FormData salvada:", props.formData);
    }, [ocupantes, dormitorios, camas, banos]);
    
  useEffect(() => {
    const storedFormData = localStorage.getItem('locationFormData');
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      setOcupantes(parsedFormData.max_guests || 1);
      setDormitorios(parsedFormData.rooms_number || 1);
      setCamas(parsedFormData.beds_number || 1);
      setBanos(parsedFormData.bathrooms_number || 1);
      console.log(parsedFormData);
    }
  }, []);

  const handleIncrement = (category: string) => {
    switch (category) {
      case "ocupantes":
        if (ocupantes < 10) {
          const newOcupantes = ocupantes + 1;
          setOcupantes(newOcupantes);
          localStorage.setItem(
            "locationFormData",
            JSON.stringify({ ...props.formData, max_guests: newOcupantes })
          );
        }
        break;
      case "dormitorios":
        if (dormitorios < 10) {
          const newDormitorios = dormitorios + 1;
          setDormitorios(newDormitorios);
          localStorage.setItem(
            "locationFormData",
            JSON.stringify({ ...props.formData, rooms_number: newDormitorios })
          );
        }
        break;
      case "camas":
        if (camas < 10) {
          const newCamas = camas + 1;
          setCamas(newCamas);
          localStorage.setItem(
            "locationFormData",
            JSON.stringify({ ...props.formData, beds_number: newCamas })
          );
        }
        break;
      case "banos":
        if (banos < 10) {
          const newBanos = banos + 1;
          setBanos(newBanos);
          localStorage.setItem(
            "locationFormData",
            JSON.stringify({ ...props.formData, bathrooms_number: newBanos })
          );
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
          const newOcupantes = ocupantes - 1;
          setOcupantes(newOcupantes);
          localStorage.setItem(
            "locationFormData",
            JSON.stringify({ ...props.formData, max_guests: newOcupantes })
          );
        }
        break;
      case "dormitorios":
        if (dormitorios > 1) {
          const newDormitorios = dormitorios - 1;
          setDormitorios(newDormitorios);
          localStorage.setItem(
            "locationFormData",
            JSON.stringify({ ...props.formData, rooms_number: newDormitorios })
          );
        }
        break;
      case "camas":
        if (camas > 1) {
          const newCamas = camas - 1;
          setCamas(newCamas);
          localStorage.setItem(
            "locationFormData",
            JSON.stringify({ ...props.formData, beds_number: newCamas })
          );
        }
        break;
      case "banos":
        if (banos > 1) {
          const newBanos = banos - 1;
          setBanos(newBanos);
          localStorage.setItem(
            "locationFormData",
            JSON.stringify({ ...props.formData, bathrooms_number: newBanos })
          );
        }
        break;
      default:
        break;
    }
  };
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "ocupantes") {
      const newOcupantes = parseInt(value);
      setOcupantes(newOcupantes);
    } else if (name === "dormitorios") {
      const newDormitorios = parseInt(value);
      setDormitorios(newDormitorios);
    } else if (name === "camas") {
      const newCamas = parseInt(value);
      setCamas(newCamas);
    } else if (name === "banos") {
      const newBanos = parseInt(value);
      setBanos(newBanos);
    }
  }
  
    

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
    console.log("Data to be passed to the next step:", {
      max_guests: ocupantes,
      rooms_number: dormitorios,
      beds_number: camas,
      bathrooms_number: banos
    });
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
            <label htmlFor="ocupantes">Huéspedes</label>
            <i
              className="fa-solid fa-minus border rounded-full ml-3"
              onClick={() => handleDecrement("ocupantes")}
            ></i>
            <input
              type="number"
              id="ocupantes"
              name="ocupantes"
              value={ocupantes}
              onChange={handleInputChange}
              className="border rounded-sm p-1 w-24 text-center"
            />
            <i
              className="fa-solid fa-plus border rounded-full mr-3"
              onClick={() => handleIncrement("ocupantes")}
            ></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="dormitorios">Dormitorios</label>
            <i
              className="fa-solid fa-minus border rounded-full ml-3"
              onClick={() => handleDecrement("dormitorios")}
            ></i>
            <input
              type="number"
              id="dormitorios"
              name="dormitorios"
              value={dormitorios}
              onChange={handleInputChange}
              className="border rounded-sm p-1 w-24 text-center"
            />
            <i
              className="fa-solid fa-plus border rounded-full mr-3"
              onClick={() => handleIncrement("dormitorios")}
            ></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="camas">Camas</label>
            <i
              className="fa-solid fa-minus border rounded-full ml-3"
              onClick={() => handleDecrement("camas")}
            ></i>
            <input 
            type="number" 
            id="camas" 
            name="camas" 
            value={camas} 
            onChange={handleInputChange}
            className="border rounded-sm p-1 w-24 text-center" />
            <i
              className="fa-solid fa-plus border rounded-full mr-3"
              onClick={() => handleIncrement("camas")}
            ></i>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="banos">Baños</label>
            <i
              className="fa-solid fa-minus border rounded-full ml-3"
              onClick={() => handleDecrement("banos")}
            ></i>
            <input 
            type="number" 
            id="banos" 
            name="banos" 
            value={banos} 
            onChange={handleInputChange} 
            className="border rounded-sm p-1 w-24 text-center"/>
            
            <i
              className="fa-solid fa-plus border rounded-full ml-3"
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