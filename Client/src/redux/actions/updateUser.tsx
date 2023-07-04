import { Dispatch, AnyAction } from "redux";
import { PUT_USER } from "./actionsType";
import axios from "axios";

const updateUser = (user: any) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const { id_user, name, surname, email, address, number, date, gender } = user;

      const updatedUser = {
        id_user,
        ...(name && { name }),
        ...(surname && { surname }),
        ...(email && { email }),
        ...(address && { address }),
        ...(number && { number }),
        ...(date && { date }),
        ...(gender && { gender }),
      };

      await axios.put(`https://airebnb.onrender.com/users/update/${id_user}`, updatedUser);
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
//       await axios.post(`https://airebnb.onrender.com/users/update/${id_user}`, user);
//       dispatch({ type: PUT_USER, payload: user });
//     } catch (error) {
//       console.log("Error al actualizar el usuario:", error);
//     }
//   };
// };

// export default updateUser;