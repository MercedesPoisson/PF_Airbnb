import Validation from "./Validation";
import { useState } from "react";

interface LocationProps {
  formData: {
    province: string;
    location: string;
    address: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    province: string;
    location: string;
    address: string;
  }>>;
  nextStep: () => void;
  previousStep: () => void;
}
const Location = (props: LocationProps) => {
  const [errors, setErrors] = useState({
    province: "",
    location: "",
    address: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    props.setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", 
    }));
  };

  const validateForm = () => {
    const { province, location, address } = props.formData;
    const errors = {};

    if (!province) {
      errors.province = "La provincia es requerida";
    }

    if (!location) {
      errors.location = "La localidad es requerida";
    }

    if (!address) {
      errors.address = "La dirección es requerida";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextClick = () => {
    const isValid = validateForm();
    if (isValid) {
      props.nextStep();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto ">
        <div>
          <div className="font-cairo text-2xl">¿Dónde queda tu propiedad?</div>
          <p className="font-cairo">
            Solo vamos a compartir tu dirección exacta una vez confirmada la
            reserva.
          </p>
        </div>
        <div className="items-center">
          <div className="mb-2">
            <div className="relative">
              <input
                className="pl-8 w-96 h-10 border rounded-md"
                type="text"
                placeholder="Ingrese la provincia"
                name="province"
                onChange={handleInputChange}
                value={props.formData.province}
              />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
              <i className="fa-regular fa-circle-question ml-2 cursor-pointer" title="Por ejemplo: Buenos Aires"></i>
            </div>
          </div>
          <div className="mb-2">
            <div className="relative">
              <input
                className="pl-8 w-96 h-10 border rounded-md"
                type="text"
                placeholder="Ingrese la localidad"
                name="location"
                onChange={handleInputChange}
                value={props.formData.location}
              />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
              <i className="fa-regular fa-circle-question ml-2 cursor-pointer" title="Por ejemplo: Palermo"></i>
            </div>
          </div>
          <div className="mb-2">
            <div className="relative">
              <input
                className="pl-8 w-96 h-10 border rounded-md"
                type="text"
                placeholder="Ingrese la dirección"
                name="address"
                onChange={handleInputChange}
                value={props.formData.address}
              />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
              <i className="fa-regular fa-circle-question ml-2 cursor-pointer"  title="Por ejemplo: Avenida SiempreViva 742"></i>
            </div>
          </div>
          <div><Validation error={errors.province} /></div>
          <div><Validation error={errors.location} /></div>
          <div><Validation error={errors.address} /></div>
                    
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
            onClick={handleNextClick}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;