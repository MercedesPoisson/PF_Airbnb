import { Dispatch } from "redux";
import { DELETE_FAVORITES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const deleteFavorites = (id: any, id_property:any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
            await axios.delete(`https://airebnb.onrender.com/users/${id}/favorites/${id_property}`);
            dispatch({ type: DELETE_FAVORITES});
    };
};

export default deleteFavorites;

