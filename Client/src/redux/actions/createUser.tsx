import { Dispatch } from "redux";
import { CREATE_USER } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";


const createUser = (user: any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        await axios.post("http://localhost:3001/users", user)
        dispatch({ type: CREATE_USER, payload: user })
    }
}

export default createUser