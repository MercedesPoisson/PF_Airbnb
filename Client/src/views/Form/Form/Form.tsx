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

const Form = () => {

    const [ formData, setFormData] = useState({
        step: 1,
        property_type: "",
        address: "",
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
        availability: [],
        allow_pets: false,
        weekly_discount: false,
        monthly_discount: false,
        min_nights: 0,
        is_active: false,      
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
                <TitleAndDescription
                previousStep={previousStep}
                nextStep={nextStep}
                handleInputChange={handleInputChange}
                formData={formData}
/>
            )
            case 7:
            return (
                <Price
                previousStep={previousStep}
                nextStep={nextStep}
                formData={formData}
                setFormData={setFormData}
              />
            )
            case 8:
            return (
                <Discount
                previousStep={previousStep}
                nextStep={nextStep}
                formData={formData}
                setFormData={setFormData}
              />
            )
            case 9:
            return (
                <Preview
                previousStep={previousStep}
                nextStep={nextStep}
                formData={formData}
                setFormData={setFormData}
              />
            )
        default:
            return <div>Error</div>
    }

}

export default Form;