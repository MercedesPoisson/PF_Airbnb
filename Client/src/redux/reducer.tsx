import { Reducer } from "redux";
import { GET_PROPERTIES, GET_SERVICES, POST_PROPERTIES, GET_PROVINCES } from "./actions/actionsType";
import { State, Action } from "./Types"


const inictialState: State = {
    services: [],
    properties: [],
    provinces: []
}

const rootReducer: Reducer<State, Action> = (state = inictialState, { type, payload }) => {
    switch (type) {
        case GET_SERVICES:
            return { ...state, services: payload };
        case POST_PROPERTIES:
            return { ...state };
        case GET_PROPERTIES:
            return {...state, properties: payload}
        case GET_PROVINCES:
            return {...state, provinces: payload}
        default:
            return state;
    }
}

export default rootReducer;