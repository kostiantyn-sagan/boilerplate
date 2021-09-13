// API;
import { api } from '../../api';

// Types;
import { types } from './types';

export const peopleActions = Object.freeze({
    // Sync
    startFetching: () => {
        return {
            type: types.PEOPLE_START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.PEOPLE_STOP_FETCHING,
        };
    },
    fill: (payload:any) => {
        return {
            type: types.PEOPLE_FILL,
            payload,
        };
    },
    setFetchingError: (error:any) => {
        return {
            type:    types.PEOPLE_SET_FETCHING_ERROR,
            error:   true,
            payload: error,
        };
    },

    fetchAsync: (id?:string) => async(dispatch:any) => {
        dispatch(peopleActions.startFetching());

        const response = await api.people.fetch(id);
        console.log(response);

        if (response.status === 200) {
            console.log(id);
            const  results  = await response.json();
            console.log(results);
            const data = id ? results : results.results;
            console.log(data);


            dispatch(peopleActions.fill(data));
        } else {
            const error = {
                status: response.status,
            };

            dispatch(peopleActions.setFetchingError(error));
        }
        dispatch(peopleActions.stopFetching());
    },
});
