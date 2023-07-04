import { Dispatch, AnyAction } from "redux";
// import { PUT_PROPERTY } from "./actionsType";
import axios from "axios";

const updateProperty = (property: any) => {
    return async (dispatch:Dispatch<AnyAction>) =>{
        const {
            id_property,
            id_user,
            title,
            province,
            location,
            address,
            zip_code,
            property_type,
            description,
            price_per_night,
            images,
            rating,
            ratings_amount,
            start_date,
            end_date,
            rooms_number,
            bathrooms_number,
            beds_number,
            max_guests,
            allow_pets,
            weekly_discount,
            monthly_discount,
            min_nights,
            accessibility,
            services
        } = property
    try {
        const updatedProperty ={
            ...(id_property && {id_property}),
            ...(id_user && {id_user}),
            ...(title && {title}),
            ...(province && {province}),
            ...(location && {location}),
            ...(address && {address}),
            ...(zip_code && {zip_code}),
            ...(property_type && {property_type}),
            ...(description && {description}),
            ...(price_per_night && {price_per_night}),
            ...(images && {images}),
            ...(rating && {rating}),
            ...(ratings_amount && {ratings_amount}),
            ...(start_date && {start_date}),
            ...(end_date && {end_date}),
            ...(rooms_number && {rooms_number}),
            ...(bathrooms_number && {bathrooms_number}),
            ...(beds_number && {beds_number}),
            ...(max_guests && {max_guests}), 
            ...({allow_pets}),
            ...({weekly_discount}),
            ...({monthly_discount}),
            ...(min_nights && {min_nights}),
            ...(accessibility && {accessibility}),
            ...(services && {services})
        }
        console.log(updatedProperty);
        
        await axios.put(`https://airebnb.onrender.com/property/update/${id_property}`, updatedProperty)
        // dispatch({type:PUT_PROPERTY, payload: updatedProperty})
        
    } catch (error) {
        console.log("Error al actualizar la propiedad:", error)
    }
    }
}

export default updateProperty