import { Dispatch } from "redux";
import { POST_PROPERTIES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";


const postServices = (formData: FormData) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        await axios.post("https://backofback-production.up.railway.app/property/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        dispatch({ type: POST_PROPERTIES })
    }
}

export default postServices