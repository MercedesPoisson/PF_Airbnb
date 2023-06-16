import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstView from "./FirstView";
import PropertyType from "./PropertyType";
import Location from "./Location";
import QuantityCounter from "./QuantityCounters";
import ServicesCheck from "./ServicesCheck";
import TitleAndDescription from "./Title&Description";
import Price from "./Price";
import Discount from "./discount";
import Preview from "./Preview";
import postServices from "../../../redux/actions/postProperties";
import { useDispatch } from "react-redux";
import Cloudinary from "./Cloudinary";

interface FormData {
  step: number;
  property_type: string;
  address: string;
  zip_code: string;
  location: string;
  province: string;
  max_guests: number;
  rooms_number: number;
  beds_number: number;
  bathrooms_number: number;
  services: string[];
  images?: any[];
  title: string;
  description: string;
  price_per_night: number;
  allow_pets: boolean;
  weekly_discount: boolean;
  monthly_discount: boolean;
  min_nights: number;
  is_active: boolean;
  start_date: Date | string;
  end_date: Date | string;
  rating?: number;
  rating_amount?: number;
}

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    step: 1,
    id_user: "123123-4444324224-232333",
    property_type: "",
    address: "",
    zip_code: "1234",
    location: "",
    province: "",
    max_guests: 0,
    rooms_number: 0,
    beds_number: 0,
    bathrooms_number: 0,
    services: [],
    images: [],
    title: "",
    description: "",
    price_per_night: 0,
    start_date: "2023-01-01",
    end_date: "2023-06-06",
    allow_pets: false,
    weekly_discount: false,
    monthly_discount: false,
    min_nights: 0,
    is_active: true,
    rating: 1,
    rating_amount: 1,
  });

  const nextStep = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      step: prevFormData.step + 1,
    }));
    console.log("como viajan los datos", formData);
  };

  const previousStep = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      step: prevFormData.step - 1,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handlePost = () => {
    dispatch(postServices(formData));
    console.log("Datos enviados a la base de datos");
    alert("Propiedad Creada");
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="sticky top-0">
        <div className="grid grid-cols-2 gap-3 h-16 mb-1 bg-white">
          <div className="col-span-1 flex items-center justify-start">
            <div
              className="flex items-center cursor-pointer"
              onClick={handleNavigateToHome}
            >
              <i className="fa fa-sun text-argentina ml-4 text-2xl"></i>
              <span className="ml-1 text-argentina font-comfortaa text-lg">
                argentina
              </span>
            </div>
          </div>
          <div className="col-span-1 font-cairo-play flex items-center justify-end mr-10">
            <button className="mr-4">
              <i className="fa-regular fa-circle-user text-argentina text-xl"></i>
            </button>
            <button className="border border-argentina rounded p-1 w-32">
              Guardar y Salir
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        {formData.step === 1 && (
          <FirstView nextStep={nextStep} />
        )}

        {formData.step === 2 && (
          <PropertyType
            previousStep={previousStep}
            nextStep={nextStep}
            handleInputChange={handleInputChange}
            selectedPropertyType={formData.property_type}
          />
        )}

        {formData.step === 3 && (
          <Location
            previousStep={previousStep}
            nextStep={nextStep}
            handleInputChange={handleInputChange}
            formData={formData}
          />
        )}

        {formData.step === 4 && (
          <QuantityCounter
            previousStep={previousStep}
            nextStep={nextStep}
            handleInputChange={handleInputChange}
            maxGuests={formData.max_guests}
            roomsNumber={formData.rooms_number}
            bedsNumber={formData.beds_number}
            bathroomsNumber={formData.bathrooms_number}
          />
        )}

        {formData.step === 5 && (
          <ServicesCheck
            previousStep={previousStep}
            nextStep={nextStep}
            handleInputChange={handleInputChange}
            setFormData={setFormData}
          />
        )}

        {formData.step === 6 && (
          <Cloudinary
            previousStep={previousStep}
            nextStep={nextStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}

        {formData.step === 7 && (
          <TitleAndDescription
            previousStep={previousStep}
            nextStep={nextStep}
            handleInputChange={handleInputChange}
            formData={formData}
          />
        )}

        {formData.step === 8 && (
          <Price
            previousStep={previousStep}
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {formData.step === 9 && (
          <Discount
            previousStep={previousStep}
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {formData.step === 10 && (
          <Preview
            previousStep={previousStep}
            handlePost={handlePost}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </>
  );
};

export default Form;