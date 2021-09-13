import React from 'react';
import { useFilmsFetch } from './hooks/useFilmsFetch';

export const Films = () => {
    const { isFetching, data, error } = useFilmsFetch();

    if (error && error.status === 404) {
        return <p>Not Found!</p>;
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong</p>;
    }

    const spinnerJSX = isFetching && (
        <p>Loading data from api</p>
    );

    const listJSX = !isFetching && data && data.length && data.map(({ title }:any, index: number) => {
        return <li key = { String(index) }>{title}</li>;
    });

    return (
        <>
            <h1>Films</h1>
            {spinnerJSX}
            {listJSX}
        </>
    );
};
