import { types } from './types';

export const studentActions = {
    fillProfile: (profile:any) => {
        return {
            type:    types.STUDENT_FILL,
            payload: profile,
        };
    },
};
