import { Reducer } from 'redux';

import { types } from './types';

const initialState = {
    data: {
        firstName:  'your Name',
        surname:    'your Surname',
        age:        '',
        email:      'your email',
        sex:        'your sex',
        speciality: 'your speciality',
    },
};

export const studentReducer: Reducer<any> = (state = initialState, action) => {
    switch (action.type) {
        case types.STUDENT_FILL: {
            return {
                ...state,
                data: action.payload,
            };
        }

        default:
            return state;
    }
};

