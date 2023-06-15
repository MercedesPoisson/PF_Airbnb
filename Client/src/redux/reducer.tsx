import { Reducer } from "redux";
import { GET_SERVICES } from "./actions/actionsType";
import { State, Action } from "./Types"


const inictialState: State = {
    services: []
}

const rootReducer: Reducer<State, Action> = (state= inictialState, {type,payload}) => {
    switch (type) {
        case GET_SERVICES:
            return { ...state, services: payload };
        
            default:
                return state;
    }
}

export default rootReducer;