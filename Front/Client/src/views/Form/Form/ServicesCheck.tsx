import { useState, ChangeEvent } from "react";
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
}

const ServicesCheck = (props: ServicesCheckProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const services: Service[] = useSelector((state: any) => state.services);

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
  };

  const handleNextStep = () => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      services: selectedServices,
    }));
    console.log("FormData:", FormData); // Ver el estado actualizado

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