import { Dispatch } from "redux";
import { GET_USER } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getUser = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const data = await axios.get(`https://pfback-production-a519.up.railway.app/users/${id}`);
    const user = data.data;
    dispatch({ type: GET_USER, payload: user });
  };
};

export default getUser