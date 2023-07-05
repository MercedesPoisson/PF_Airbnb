import { Dispatch } from "redux";
import { GET_USER } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getUser = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const data = await axios.get(`http://localhost:3001/users/${id}`);
    const user = data.data;
    dispatch({ type: GET_USER, payload: user });
  };
};

export default getUser