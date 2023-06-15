import { useState } from "react"
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
    zip_code: string,
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
    start_date: Date|string;
    end_date: Date|string;
    rating?: number,
    rating_amount?: number,
  }

const Form = () => {

    const [ formData, setFormData] = useState<FormData>({
        step: 1,
        id_user: "123123-4444324224-232333",
        property_type: "",
        address: "",
        zip_code:"1234",
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
            step: prevFormData.step + 1
        }));
        console.log("como viajan los datos", formData);
    }

    const previousStep = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            step: prevFormData.step - 1
        }))
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const dispatch = useDispatch();

    const handlePost = () => {
        dispatch(postServices(formData));
        console.log("Datos enviados a la base de datos");
        alert("Propiedad Creada")
    }

    switch (formData.step) {
        case 1:
            return (
                <FirstView 
                nextStep={nextStep}
                />
            )
        case 2:
            return (
                <PropertyType 
                previousStep={previousStep}
                nextStep={nextStep}
                handleInputChange={handleInputChange}
                selectedPropertyType={formData.property_type}
                />
            )
        case 3:
            return (
                <Location 
                previousStep={previousStep}
                nextStep={nextStep}
                handleInputChange={handleInputChange}
                formData={formData}
                />
            )
        case 4:
            return (
                <QuantityCounter 
                previousStep={previousStep}
                nextStep={nextStep}
                handleInputChange={handleInputChange}
                maxGuests={formData.max_guests}
                roomsNumber={formData.rooms_number}
                bedsNumber={formData.beds_number}
                bathroomsNumber={formData.bathrooms_number}
                />
            )
        case 5:
            return (
                <ServicesCheck
                previousStep={previousStep}
                nextStep={nextStep}
                handleInputChange={handleInputChange}
                setFormData={setFormData}
                />
            )
            case 6:
            return (
                <Cloudinary
                previousStep={previousStep}
                nextStep={nextStep}
                setFormData={setFormData}
                formData={formData}
/>
            )
            case 7:
            return (
                <TitleAndDescription
                previousStep={previousStep}
                nextStep={nextStep}
                handleInputChange={handleInputChange}
                formData={formData}
/>
            )
            case 8:
            return (
                <Price
                previousStep={previousStep}
                nextStep={nextStep}
                formData={formData}
                setFormData={setFormData}
              />
            )
            case 9:
            return (
                <Discount
                previousStep={previousStep}
                nextStep={nextStep}
                formData={formData}
                setFormData={setFormData}
              />
            )
            case 10:
            return (
                <Preview
                previousStep={previousStep}
                handlePost={handlePost}
                formData={formData}
                setFormData={setFormData}
              />
            )
        default:
            return <div>Error</div>
    }

}

export default Form;