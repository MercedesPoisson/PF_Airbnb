import { Reducer } from "redux";
import { GET_USER, CREATE_USER, GET_PROPERTIES, GET_PROPERTY_DETAIL, GET_SERVICES, POST_PROPERTIES, GET_PROVINCES, PUT_USER } from "./actions/actionsType";
import { State, Action } from "./Types"



const inictialState: State = {
    services: [],
    properties: [],
    detail:{},
    pages: 0,
    provinces: [],
    user: {}
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
            return {...state, detail: payload[0]}
        case GET_PROVINCES:
            return {...state, provinces: payload}
        case GET_USER:
            return {...state, user: payload}
        case CREATE_USER:
            return {...state, user: payload}
        case PUT_USER:
            return {...state, user: payload}
        default:
            return state;
    }
}

export default rootReducer;