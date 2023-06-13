// import axios from "axios";
import { Property } from "./Types";

export const GET_PROPERTIES = "GET_PROPERTIES";
export const GET_BY_ID = "GET_BY_ID";
export const GET_BY_CITY = "GET_BY_CITY";
export const GET_SERVICES = "GET_SERVICES"
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
}


export const PostProperty = (id: number, title: string, description: string, price: number, image: string[], rating: number): PostPropertyAction => {
    const property: Property = {
        id,
        title,
        description,
        price,
        image,
        rating
    }
    return {
        type: POST_PROPERTY,
        payload: property,
    }
}
