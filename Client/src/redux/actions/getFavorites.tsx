import { Dispatch } from "redux";
import { GET_FAVORITES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getFavorites = (id: any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        if (id !== undefined) {
            const data = await axios.get(`http://localhost:3001/users/${id}/favorites`);
            const properties = data.data;
            dispatch({ type: GET_FAVORITES, payload: properties });
        } else {

            console.log("El ID es undefined");
        }
    };
};

export default getFavorites;

