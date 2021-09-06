import { useDispatch, useSelector } from 'react-redux';

import { studentActions } from '../actions';

export const useStudent = () => {
    const selector = (state:any) => state.student;
    const { data } = useSelector(selector);
    const dispatch = useDispatch();

    const fillStudent = (profile:any) => {
        const action = studentActions.fillProfile(profile);

        dispatch(action);
    };

    return {
        user: data,
        fillStudent,
    };
};
