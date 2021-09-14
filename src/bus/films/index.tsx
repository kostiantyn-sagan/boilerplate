import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filmsActions } from './actions';

export const useFilmsFetch = (id?:string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filmsActions.fetchAsync(id));
    }, [ dispatch ]);

    const {
        data,
        isFetching,
        error,
    } = useSelector((state:any) => state.films);

    return {
        data,
        isFetching,
        error,
    };
};
