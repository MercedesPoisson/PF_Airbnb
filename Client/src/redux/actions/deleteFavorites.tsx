import { Dispatch } from "redux";
import { DELETE_FAVORITES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const deleteFavorites = (id: any, id_property:any) => {
    return async (dispatch: Dispatch<AnyAction>) => {
            await axios.delete(`http://localhost:3001/users/${id}/favorites/${id_property}`);
            dispatch({ type: DELETE_FAVORITES});
    };
};

export default deleteFavorites;

