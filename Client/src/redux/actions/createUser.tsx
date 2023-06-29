import { Dispatch } from "redux";
import { CREATE_USER } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";


const createUser = (user: any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        await axios.post("https://pfback-production-a519.up.railway.app/users", user)
        dispatch({ type: CREATE_USER, payload: user })
    }
}

export default createUser