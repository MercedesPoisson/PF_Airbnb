import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import { GET_ALL_USERS } from "./actionsType"; 

const getAllUsers = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await axios.get(`http://localhost:3001/users`)
        const payload = data.data;
        console.log(payload);
        dispatch({ type: GET_ALL_USERS, payload: payload});        
    }
}
export default getAllUsers;