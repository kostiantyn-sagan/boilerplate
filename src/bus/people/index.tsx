import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from './actions';

export const usePeopleFetch = (id?:string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(peopleActions.fetchAsync(id));
    }, [ dispatch ]);

    const {
        data,
        isFetching,
        error,
    } = useSelector((state:any) => state.people);

    return {
        data,
        isFetching,
        error,
    };
};

