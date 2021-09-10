import { Reducer } from 'redux';

// types
import { types } from './types';

const initialState = {
    data:       null,
    isFetching: false,
    error:      null,
};

export const peopleReducer: Reducer<any> = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.PEOPLE_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.PEOPLE_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.PEOPLE_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data:  null,
            };
        case types.PEOPLE_FILL:
            return {
                ...state,
                data:  payload,
                error: null,
            };

        default:
            return state;
    }
};
