// Config
import { root } from './config';

export const api = Object.freeze({
    people: {
        fetch: () =>{
            return fetch(`${root}/people`, {
                method: 'GET',
            });
        },
    },

    films: {
        fetch: () => {
            return fetch(`${root}/films`, {
                method: 'GET',
            });
        },
    },
});
