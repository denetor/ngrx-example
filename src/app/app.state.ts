import {Jedi} from "./store/models/jedi.model";

export interface AppState {
    counter: number;
    jediList: Jedi[],
}
