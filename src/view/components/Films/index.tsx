// Core
import React from 'react';

// Hooks
import { useFilmsFetch } from '../../../bus/films';

// Elements
import { HwLink } from '../../elements';

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

    const listJSX = !isFetching && data?.length && data.map(({ title }:any, index: number) => {
        return (
            <HwLink
                key = { String(index) }
                to = { `/self-education/lectrum-react-hw-07/films/${index + 1}` }>{title}
            </HwLink>
        );
    });

    return (
        <>
            <h1>Films</h1>
            {spinnerJSX}
            {listJSX}
        </>
    );
};
