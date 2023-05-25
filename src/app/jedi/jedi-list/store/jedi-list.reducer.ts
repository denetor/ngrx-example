import {Jedi} from "../models/jedi.model";
import {JediListConstants} from './jedi-list.constants';

const initialState: Jedi[] = [];

export function jediListReducer(state = initialState, action: any) {
    switch (action.type) {
        case JediListConstants.ADD:
            return [...state, {... action.payload}];
        case JediListConstants.REMOVE:
            return state.filter(jedi => jedi.id !== action.payload.id);
        case JediListConstants.LOAD:
            return action.payload.map((jedi: Jedi) => ({...jedi}));
        default:
            return state;
    }
}
