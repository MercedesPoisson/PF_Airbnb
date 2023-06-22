import { Dispatch, AnyAction } from "redux";
import { PUT_USER } from "./actionsType";
import axios from "axios";

const updateUser = (user: any) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const { id_user, name, surname, email, location, number, Date, gender } = user;

      const updatedUser = {
        id_user,
        ...(name && { name }),
        ...(surname && { surname }),
        ...(email && { email }),
        ...(location && { location }),
        ...(number && { number }),
        ...(Date && { Date }),
        ...(gender && { gender }),
      };

      await axios.put(`http://localhost:3001/users/update/${id_user}`, updatedUser);
      dispatch({ type: PUT_USER, payload: updatedUser });
    } catch (error) {
      console.log("Error al actualizar el usuario:", error);
    }
  };
};

export default updateUser;


// import { Dispatch, AnyAction } from "redux";
// import { PUT_USER } from "./actionsType";
// import axios from "axios";

// const updateUser = (user: any) => {
//   return async (dispatch: Dispatch<AnyAction>) => {
//     try {
//       const { id_user } = user;
//       await axios.post(`http://localhost:3001/users/update/${id_user}`, user);
//       dispatch({ type: PUT_USER, payload: user });
//     } catch (error) {
//       console.log("Error al actualizar el usuario:", error);
//     }
//   };
// };

// export default updateUser;