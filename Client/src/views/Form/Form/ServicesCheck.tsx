import { useState, ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";

interface Service {
  service_id: string;
  name: string;
  icon: string;
}

interface ServicesCheckProps {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  previousStep: () => void;
  formData: FormData;
}

const ServicesCheck = (props: ServicesCheckProps) => {
  const storedFormData = localStorage.getItem('servicesFormData');
  const initialFormData = storedFormData ? JSON.parse(storedFormData) : {};
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const services: Service[] = useSelector((state: any) => state.services);
 

  useEffect(() => {
    localStorage.setItem(
      "servicesFormData",
      JSON.stringify({
        ...props.formData,
      })
    );
  }, []); 

  useEffect(() => {
    const storedServices = localStorage.getItem('selectedServices');
    if (storedServices) {
      setSelectedServices(JSON.parse(storedServices));
    }
  }, []);

  const handleServiceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const serviceName = event.target.value;
    const isSelected = event.target.checked;
  
    if (isSelected) {
      setSelectedServices((prevSelectedServices) => [
        ...prevSelectedServices,
        serviceName,
      ]);
    } else {
      setSelectedServices((prevSelectedServices) =>
        prevSelectedServices.filter((service) => service !== serviceName)
      );
    }
  
    // Guardar las selecciones actualizadas en el localStorage
    localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
  };

  const handleNextStep = () => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      services: selectedServices,
    }));
    console.log("FormData:", props.formData); // Ver el estado actualizado

    props.nextStep();
  };

  return (
    <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">
            Contale a tus huéspedes todo lo que tu propiedad tiene para ofrecer
          </div>
          <p className="font-cairo">
            Podés agregar más servicios luego de publicar el anuncio.  
            <i className="fa-regular fa-circle-question ml-2 cursor-pointer" title="Podeés elegir todos los servicios que tenga tu propiedad"></i>

          </p>
        </div>
        <div>
          <section>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service) => (
                <label className="flex items-center" key={service.service_id}>
                  <input
                    type="checkbox"
                    id={`services_${service.service_id}`}
                    name="Services"
                    value={service.name}
                    onChange={handleServiceChange}
                  />
                  <span className="ml-2">{service.name}</span>
                </label>
              ))}
            </div>
          </section>
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

export default ServicesCheck;