import { Dispatch } from "redux";
import { GET_PROPERTY_DETAIL } from "./actionsType";
import { AnyAction } from "redux";
import axios from "axios";

const getPropertyDetail = (id: any) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    if (id !== undefined) {
      const data = await axios.get(`https://pfback-production-a519.up.railway.app/property/${id}`);
      const detail = data.data;
      dispatch({ type: GET_PROPERTY_DETAIL, payload: detail });
    } else {
      
      console.log("El ID es undefined");
    }
  };
};

export default getPropertyDetail;



// import { Dispatch } from "redux";
// import { GET_PROPERTY_DETAIL } from "./actionsType";
// import { AnyAction } from "redux";
// import axios from "axios";

// const getPropertyDetail=(id:any)=>{
//     return async (dispatch: Dispatch<AnyAction>) => {
//         const data = await axios.get(`https://pfback-production-a519.up.railway.app/property/${id}`)
//         const detail = data.data
//         dispatch({ type: GET_PROPERTY_DETAIL, payload: detail });
//     }
// }

// export default getPropertyDetail