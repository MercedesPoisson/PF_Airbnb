import { Dispatch } from "redux";
import { GET_PROPERTIES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getProperties=(querys?:string)=>{
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await axios.get(`http://localhost:3001/property/?${querys}`)
        const properties = [...data.data]
        dispatch({ type: GET_PROPERTIES, payload: properties });
    }
}

export default getProperties