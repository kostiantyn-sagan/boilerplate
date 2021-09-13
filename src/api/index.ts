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
        fetch: () => {
            return fetch(`${root}/films`, {
                method: 'GET',
            });
        },
    },
});
