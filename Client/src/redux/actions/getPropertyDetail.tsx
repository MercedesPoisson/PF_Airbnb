import { Dispatch } from "redux";
import { GET_PROPERTY_DETAIL } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getPropertyDetail=(id:string)=>{
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await axios.get(`http://localhost:3001/property/${id}`)
        const detail = data.data
        dispatch({ type: GET_PROPERTY_DETAIL, payload: detail });
    }
}

export default getPropertyDetail