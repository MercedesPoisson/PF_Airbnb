import { Reducer } from "redux";
<<<<<<< HEAD
import { GET_SERVICES, POST_PROPERTIES } from "./actions/actionsType";
=======
import { GET_SERVICES } from "./actionsType";
>>>>>>> ccb4bb3 (action Type)
import { State, Action } from "./Types"


const inictialState: State = {
    services: []
}

const rootReducer: Reducer<State, Action> = (state = inictialState, { type, payload }) => {
    switch (type) {
        case GET_SERVICES:
            return { ...state, services: payload };
        case POST_PROPERTIES:
            return { ...state };
        default:
            return state;
    }
}

export default rootReducer;