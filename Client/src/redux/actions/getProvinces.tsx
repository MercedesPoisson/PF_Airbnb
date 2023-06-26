import { Dispatch } from "redux";
import { GET_PROVINCES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getProvinces= () =>{
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await axios.get(`https://backofback-production.up.railway.app/locations`)
        const properties = [...data.data]
        dispatch({ type: GET_PROVINCES, payload: properties });
    }
}

export default getProvinces