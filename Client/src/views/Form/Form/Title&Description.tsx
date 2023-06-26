import Validation from "./Validation";
import { useState } from "react";

interface TitleDescritionProps {
  formData : {
    title: string;
    description: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    title: string;
    description: string;
  }>>;
  nextStep: () => void;
  previousStep: () => void;
}
 
const TitleAndDescription = (props: TitleDescritionProps) => {
  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    props.setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }))
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  const { name, value } = event.target;
  props.setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: "",
  }))
};

const validateForm = () => {
  const { title, description } = props.formData;
  const errors = {};

  if (!title) {
    errors.title = "Tenés que crear un título";
  } else if (title.length > 300) {
    errors.title = "El título no puede exceder los 300 caracteres";
  } 

  if (!description) {
    errors.description = "Tenés que crear una descripción";
  } else if (description.length > 1200) {
    errors.description = "La descripción no puede exceder los 1200 caracteres";
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
            <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Agregá un título y una descripción a tu propiedad</div>
          <p>No te preocupes si no te gustan, podes cambiarlo más adelante</p>
          <input 
          className="pl-8 w-3/4 h-10 border rounded-md mb-2" 
          type="text" 
          placeholder="Ingresa un título" 
          maxLength={300}
          name="title"
          onChange={handleInputChange}
          value={props.formData.title} />
          <i className="fa-regular fa-circle-question ml-2 cursor-pointer" title="ejemplo: Full Studio para 2 - Villa Crespo"></i>
        </div>
        
        <div>
          <textarea 
          className="pl-8 w-3/4 h-20 border rounded-md mb-2" 
          placeholder="¿Qué hace que tu propiedad sea especial? ¡Contanos!" 
          maxLength={1200} 
          name="description"
          onChange={handleTextAreaChange}
          value={props.formData.description}></textarea>
          <i className="fa-regular fa-circle-question ml-2 cursor-pointer" title="ejemplo: Es un monoambiente super amplio y luminoso. Totalmente equipado. Tiene una separación que genera otro ambiente. Tal cual como se ve en las fotos. Está ubicado en Av Estado Israel a metros de Av. Córdoba, zona que está rodeada de cervecerías, centro culturales, outlet de ropa y mucho cosas mas."></i>
  
        </div>
        <Validation error={errors.title} />
        <Validation error={errors.description} />
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>Anterior</button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNextClick}>Siguiente</button>
        </div>
      </div>
    </div>
        </div>
    )
}
export default TitleAndDescription