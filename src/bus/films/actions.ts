// API;
import { api } from '../people/api';

// Types;
import { types } from './types';

export const filmsActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.FILMS_START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.FILMS_STOP_FETCHING,
        };
    },
    fill: (payload:any) => {
        return {
            type: types.FILMS_FILL,
            payload,
        };
    },
    setFetchingError: (error:any) => {
        return {
            type:    types.FILMS_SET_FETCHING_ERROR,
            error:   true,
            payload: error,
        };
    },

    fetchAsync: (id?:string) => async(dispatch:any) => {
        dispatch(filmsActions.startFetching());

        const response = await api.films.fetch(id);

        if (response.status === 200) {
            const  results  = await response.json();
            const data = id ? results : results.results;

            dispatch(filmsActions.fill(data));
        } else {
            const error = {
                status: response.status,
            };

            dispatch(filmsActions.setFetchingError(error));
        }
        dispatch(filmsActions.stopFetching());
    },
});
