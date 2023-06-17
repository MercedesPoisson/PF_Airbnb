import { useState } from "react";

const Cloudinary = (props) => {
  const [errors, setErrors] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });

  const handleInputChange = (event) => {
    const { name, files } = event.target;
    if (name === "image1" || name === "image2" || name === "image3" || name === "image4" || name === "image5") {
      const imagesArray = Array.from(files).map((file) => file);
      props.setFormData((prevFormData) => ({
        ...prevFormData,
        images: prevFormData.images ? [...prevFormData.images, ...imagesArray] : imagesArray,
      }));
    }
  };

  const handleNextStep = () => {
    const { images } = props.formData;
    let newErrors = {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
    };

    if (images.length < 5) {
      if (!images[0]) {
        newErrors.image1 = "Esta imagen es requerida";
      }
      if (!images[1]) {
        newErrors.image2 = "Esta imagen es requerida";
      }
      if (!images[2]) {
        newErrors.image3 = "Esta imagen es requerida";
      }
      if (!images[3]) {
        newErrors.image4 = "Esta imagen es requerida";
      }
      if (!images[4]) {
        newErrors.image5 = "Esta imagen es requerida";
      }
      setErrors(newErrors);
    } else {
      props.nextStep();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Paso 2</div>
          <div className="text-2xl">Agregá algunas fotos de tu propiedad</div>
          <p>Para comenzar vas a necesitar al menos 5 fotos. Podés agregar otras más adelante.</p>
        </div>
        <div>
          <div className="relative">
            <input
              className={`pl-8 w-96 h-10 border rounded-md mb-2 ${errors.image1 && "border-red-500"}`}
              type="file"
              name="image1"
              id="image1"
              placeholder="Seleccione la primer imagen"
              onChange={handleInputChange}
              multiple={false}
            />
            {errors.image1 && <p className="text-red-500">{errors.image1}</p>}
          </div>
          <div className="relative">
            <input
              className={`pl-8 w-96 h-10 border rounded-md mb-2 ${errors.image2 && "border-red-500"}`}
              type="file"
              name="image2"
              id="image2"
              placeholder="Seleccione la segunda imagen"
              onChange={handleInputChange}
              multiple={false}
            />
            {errors.image2 && <p className="text-red-500">{errors.image2}</p>}
          </div>
          <div className="relative">
            <input
              className={`pl-8 w-96 h-10 border rounded-md mb-2 ${errors.image3 && "border-red-500"}`}
              type="file"
              name="image3"
              id="image3"
              placeholder="Seleccione la tercer imagen"
              onChange={handleInputChange}
              multiple={false}
            />
            {errors.image3 && <p className="text-red-500">{errors.image3}</p>}
          </div>
          <div className="relative">
            <input
              className={`pl-8 w-96 h-10 border rounded-md mb-2 ${errors.image4 && "border-red-500"}`}
              type="file"
              name="image4"
              id="image4"
              placeholder="Seleccione la cuarta imagen"
              onChange={handleInputChange}
              multiple={false}
            />
            {errors.image4 && <p className="text-red-500">{errors.image4}</p>}
          </div>
          <div className="relative">
            <input
              className={`pl-8 w-96 h-10 border rounded-md mb-2 ${errors.image5 && "border-red-500"}`}
              type="file"
              name="image5"
              id="image5"
              placeholder="Seleccione la quinta imagen"
              onChange={handleInputChange}
              multiple={false}
            />
            {errors.image5 && <p className="text-red-500">{errors.image5}</p>}
          </div>
          <div className="relative">
            <input
              className="pl-8 w-96 h-10 border rounded-md mb-2"
              type="file"
              name="image6"
              id="image6"
              placeholder="Esta imagen es opcional"
              onChange={handleInputChange}
              multiple={false}
            />
          </div>
          <div className="relative">
            <input
              className="pl-8 w-96 h-10 border rounded-md mb-2"
              type="file"
              name="image7"
              id="image7"
              placeholder="Esta imagen es opcional"
              onChange={handleInputChange}
              multiple={false}
            />
          </div>
        </div>

        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={handleNextStep}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cloudinary;