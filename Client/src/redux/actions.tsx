// import axios from "axios";
import { Property, BedsType } from "./Types";

export const GET_PROPERTIES = "GET_PROPERTIES";
export const GET_BY_ID = "GET_BY_ID";
export const GET_BY_CITY = "GET_BY_CITY";
export const GET_SERVICES = "GET_SERVICES"
export const GET_BY_PROVINCE = "GET_BY_PROVINCE"
export const GET_BY_LOCATION = "GET_BY_LOCATION"
export const POST_PROPERTY = "POST_PROPERTY"

// interface GetPropertiesAction {
//     type: typeof GET_PROPERTIES;
//     payload: Property[];
// }

// interface GetByIdAction {
//     type:  typeof GET_BY_ID;
//     payload: Property[];
// }

interface PostPropertyAction {
    type: typeof POST_PROPERTY;
    payload: Property;
    bed_types?: BedsType
}


export const PostProperty = (
        id_property: number,
        title: string,
        province: string,
        location: string,
        address: string,
        property_type: 'House' | 'Apartment' | 'Room',
        description: string,
        price_per_night: number,
        images: string[],
        rating: number,
        ratings_amount: number,
        availability: Date[],
        is_active: boolean,
        rooms_number: number,
        beds_number: number,
        max_guests: number,
        allow_pets: boolean,
        weekly_discount: boolean,
        monthly_discount: boolean,
        min_nights: number,
        beds_type?: BedsType[], 
        bathrooms_number?: number,): PostPropertyAction => {
            const property: Property = {
        id_property,
        title,
        province,
        location,
        address,
        property_type,
        description,
        price_per_night,
        images,
        rating,
        ratings_amount,
        availability,
        is_active,
        rooms_number,
        bathrooms_number,
        beds_number,
        beds_type,
        max_guests,
        allow_pets,
        weekly_discount,
        monthly_discount,
        min_nights
    }
    return {
        type: POST_PROPERTY,
        payload: property,
    }
}
