import { Dispatch } from "redux";
import { GET_PROVINCES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getProvinces= () =>{
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await axios.get(`pfback-production-a519.up.railway.app/locations`)
        const properties = [...data.data]
        dispatch({ type: GET_PROVINCES, payload: properties });
    }
}

export default getProvinces