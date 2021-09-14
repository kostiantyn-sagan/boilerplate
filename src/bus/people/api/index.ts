// Config
import { root } from './config';

export const api = Object.freeze({
    people: {
        fetch: (id?:string) => {
            const url = id ? `${root}/people/${id}` : `${root}/people`;

            return fetch(url, {
                method: 'GET',
            });
        },
    },

    films: {
        fetch: (id?:string) => {
            const url = id ? `${root}/films/${id}` : `${root}/films`;

            return fetch(url, {
                method: 'GET',
            });
        },
    },
});
