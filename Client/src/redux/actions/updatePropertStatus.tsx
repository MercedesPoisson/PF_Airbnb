import { Dispatch, AnyAction } from "redux";
import { PUT_PROPERTY_STATUS } from "./actionsType";
import axios from "axios";

const updatePropertyStatus = (property: any) => {
    return async (dispatch:Dispatch<AnyAction>)=>{
        const {id_property}= property
        try {
            await axios.put(`pfback-production-a519.up.railway.app/property/${id_property}/deactivate`)
            dispatch({type: PUT_PROPERTY_STATUS})
        } catch (error) {
            console.log("Error al actualizar la propiedad:", error)
        }
    }
}

export default updatePropertyStatus

