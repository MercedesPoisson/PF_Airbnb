import { Dispatch } from "redux";
import { GET_SERVICES } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getServices = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const data = await axios.get("https://airebnb.onrender.com/services");
    const services = [...data.data];
    dispatch({ type: GET_SERVICES, payload: services });
  };
};

export default getServices


