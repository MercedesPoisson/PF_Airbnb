// import { useState } from "react";

const PropertyType = (props) => {
  const handlePropertyTypeChange = (event) => {
    const { value } = event.target;
    props.handleInputChange(event);
    props.setSelectedPropertyType(value);
  };

  return (
    <div>
      <div className="grid grid-cols-2 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Paso 1</div>
          <div className="text-2xl">Contanos acerca de tu propiedad</div>
          <p>
            En este paso, te vamos a preguntar qué tipo de propiedad tenés.
            <br /> Cuál es la ubicación y cuántos huéspedes pueden quedarse en
            el alojamiento.
          </p>
          <div className="text-2xl mt-4">
            ¿Cuál de estas opciones describe mejor tu propiedad?
          </div>
          <div>
            <div>
          <label htmlFor="property_Type_casa">
            <input
              type="checkbox"
              id="property_type_casa"
              name="property_type"
              value="House"
              checked={props.selectedPropertyType === "House"}
              onChange={handlePropertyTypeChange}
            />
            Casa
          </label>
        </div>
        <div>
          <label htmlFor="property_Type_departamento">
            <input
              type="checkbox"
              id="property_type_departamento"
              name="property_type"
              value="Apartment"
              checked={props.selectedPropertyType === "Apartment"}
              onChange={handlePropertyTypeChange}
            />
            Departamento
          </label>
        </div>
        <div>
          <label htmlFor="property_Type_habitacion">
            <input
              type="checkbox"
              id="property_type_habitacion"
              name="property_type"
              value="Room"
              checked={props.selectedPropertyType === "Room"}
              onChange={handlePropertyTypeChange}
            />
            Habitación
          </label>
        </div>
        </div>
        </div>
        
        
        <div className="col-span-2 font-cairo-play flex justify-start ml-10">
          <button
            className="border border-argentina rounded p-1 w-32 mt-4 mr-2"
            onClick={props.previousStep}
          >
            Anterior
          </button>
          <button
            className="border border-argentina rounded p-1 w-32 mt-4"
            onClick={props.nextStep}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;