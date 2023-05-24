import {Jedi} from "../models/jedi.model";

export const ADD_JEDI = 'ADD_JEDI';
export const REMOVE_JEDI = 'REMOVE_JEDI';
export const LOAD_JEDIS = 'LOAD_JEDIS';

export const jediListActions = {
    add: (id: number, name: string) => ({
        type: ADD_JEDI,
        payload: {id, name}
    }),

    remove: (id: number) => ({
        type: REMOVE_JEDI,
        payload: {id}
    }),

    load: (jedis: Jedi[]) => ({
        type: LOAD_JEDIS,
        payload: jedis
    })
};
// export const addJedi = (id: number, name: string) => ({
//     type: ADD_JEDI,
//     payload: {id, name}
// });
//
// export const removeJedi = (id: number) => ({
//     type: REMOVE_JEDI,
//     payload: {id}
// });
//
// export const loadJedis = (jedis: Jedi[]) => ({
//     type: LOAD_JEDIS,
//     payload: jedis
// });
