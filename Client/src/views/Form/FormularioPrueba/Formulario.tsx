import { useState } from "react";
import DatosUsuario from "./DatosUsuario";
import DireccionUsuario from "./DireccionUsuario";
import Confirmar from "./Confirmar";

const Formulario = () => {
  const [valores, setValores] = useState({
    paso: 1,
    usuario: "",
    nombre: "",
    apellido: "",
    calle: "",
    colonia: "",
    ciudad: "",
    estado: ""
  });

  const siguientePaso = () => {
    setValores((prevValores) => ({
      ...prevValores,
      paso: prevValores.paso + 1
    }));
  
    console.log("Datos a enviar a la base de datos:", valores);
    // Aquí puedes realizar la lógica para enviar los datos a la base de datos
  };

  const anteriorPaso = () => {
    setValores((prevValores) => ({
      ...prevValores,
      paso: prevValores.paso - 1
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValores((prevValores) => ({
      ...prevValores,
      [name]: value
    }));
  };

  switch (valores.paso) {
    case 1:
      return (
        <DatosUsuario
          handleInputChange={handleInputChange}
          siguientePaso={siguientePaso}
          valores={valores}
        />
      );
    case 2:
      return (
        <DireccionUsuario
          handleInputChange={handleInputChange}
          siguientePaso={siguientePaso}
          anteriorPaso={anteriorPaso}
          valores={valores}
        />
      );
    case 3:
      return (
        <Confirmar
          anteriorPaso={anteriorPaso}
          siguientePaso={siguientePaso}
          valores={valores}
        />
      );
    case 4:
      return (
        <div>
          <h1>Éxito</h1>
        </div>
      );
    default:
      return <div>Error</div>;
  }
};

export default Formulario;