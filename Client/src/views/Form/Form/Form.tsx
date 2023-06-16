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
  [x: string]: any;
  step: number;
  id_user: string | any;
  property_type: string | any;
  address: string | any;
  zip_code: string | any;
  location: string | any;
  province: string | any;
  max_guests: number| any;
  rooms_number: number| any;
  beds_number: number| any;
  bathrooms_number: number| any;
  services: string[] | any;
  images?: any[] | any;
  title: string | any;
  description: string | any;
  price_per_night: number | any;
  allow_pets: boolean | any;
  weekly_discount: boolean | any;
  monthly_discount: boolean | any;
  min_nights: number | any;
  is_active: boolean | any;
  start_date: Date | string | any;
  end_date: Date | string | any;
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

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handlePost = () => {

    const newForm = new FormData()
    newForm.append('id_user', formData.id_user)
    newForm.append('property_type', formData.property_type)
    newForm.append('address', formData.address)
    newForm.append('zip_code', formData.zip_code)
    newForm.append('location', formData.location)
    newForm.append('province', formData.province)
    newForm.append('max_guests', formData.max_guests)
    newForm.append('rooms_number', formData.rooms_number)
    newForm.append('beds_number', formData.beds_number)
    newForm.append('bathrooms_number', formData.bathrooms_number)
    newForm.append('services', formData.services)
    formData.images.forEach((image: any, index: any) => {
      newForm.append(`image-${index}`, image);
    })
    newForm.append('title', formData.title)
    newForm.append('description', formData.description)
    newForm.append('price_per_night', formData.price_per_night)
    newForm.append('start_date', formData.start_date)
    newForm.append('end_date', formData.end_date)
    newForm.append('allow_pets', formData.allow_pets)
    newForm.append('weekly_discount', formData.weekly_discount)
    newForm.append('monthly_discount', formData.monthly_discount)
    newForm.append('min_nights', formData.min_nights)
    newForm.append('is_active', formData.is_active)


    
    dispatch(postServices(newForm));
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