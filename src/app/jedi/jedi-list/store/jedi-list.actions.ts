import {Jedi} from "../models/jedi.model";
import {JediListConstants} from './jedi-list.constants';

let nextId = 0;

export const JediListActions = {
    add: (name: string) => ({
        type: JediListConstants.ADD,
        payload: {id: nextId++, name}
    }),

    remove: (id: number) => ({
        type: JediListConstants.REMOVE,
        payload: {id}
    }),

    load: (jedis: Jedi[]) => ({
        type: JediListConstants.LOAD,
        payload: jedis
    })
};
