import { Reducer } from "redux";
import { GET_PROPERTIES } from "./actions";
import { State, Action } from "./Types"


const inictialState: State = {
    properties: [],
    allProperties: [],
    detail: [],
    services: [],
    filteredProperties: [],
}

const rootReducer: Reducer<State, Action> = (state = inictialState, action) => {
    switch (action.type) {
        case GET_PROPERTIES:
            return { ...state, properties: action.payload, allProperties: action.payload };
        
            default:
                return state;
    }
}

export default rootReducer;