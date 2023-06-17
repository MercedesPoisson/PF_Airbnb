import { useState } from "react";

const Pets = (props) => {
  const [acceptsPets, setAcceptsPets] = useState(false);

  const handlePetsChange = (event) => {
    setAcceptsPets(event.target.checked);
  };

  const handleNextStep = () => {
    props.setFormData((prevState) => ({
      ...prevState,
      acceptsPets: acceptsPets
    }));
    props.nextStep();
  };

  return (
    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">¿Aceptás mascotas?</div>
          <p>
            Marcá el casillero si las mascotas son bienvenidas en tu propiedad
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <label className="flex items-center justify-center bg-transparent border border-black rounded-md w-96 mb-2 p-2">
            <input
              type="checkbox"
              checked={acceptsPets}
              onChange={handlePetsChange}
              className="mr-2"
            />
            Mi propiedad es apta para mascotas
            <i className="fa-solid fa-paw ml-2 text-argentina"></i>
          </label>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button
            className="border border-argentina rounded p-1 w-32 mt-4 mr-2"
            onClick={props.previousStep}
          >
            Anterior
          </button>
          <button
            className="border border-argentina rounded p-1 w-32 mt-4"
            onClick={handleNextStep}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pets;