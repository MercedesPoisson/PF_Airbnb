import { Reducer } from "redux";
import { GET_PROPERTIES, GET_PROPERTY_DETAIL, GET_SERVICES, POST_PROPERTIES, GET_PROVINCES } from "./actions/actionsType";
import { State, Action } from "./Types"



const inictialState: State = {
    services: [],
    properties: [],
    detail:{},
    pages: 0,
    provinces: []
}

const rootReducer: Reducer<State, Action> = (state = inictialState, { type, payload }) => {
    switch (type) {
        case GET_SERVICES:
            return { ...state, services: payload};
        case POST_PROPERTIES:
            return { ...state };
        case GET_PROPERTIES:
            return {...state, properties: payload.properties, pages: payload.pagesNumber};
        case GET_PROPERTY_DETAIL:
            return {...state, detail: payload}
        case GET_PROVINCES:
            return {...state, provinces: payload}
        default:
            return state;
    }
}

export default rootReducer;