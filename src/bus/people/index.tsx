// Core
import React from 'react';

// Hooks
import { usePeopleFetch } from './hooks/usePeopleFetch';

// Elements
import { HwLink } from '../../view/elements';

export const People = () => {
    const { isFetching, data, error } = usePeopleFetch();
    if (error && error.status === 404) {
        return <p>Not Found!</p>;
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong</p>;
    }

    const spinnerJSX = isFetching && (
        <p>Loading data from api</p>
    );

    const listJSX = !isFetching && data?.length && data.map(({ name }:any, index: number) => {
        return (
            <HwLink
                key = { String(index) }
                to = { `/self-education/lectrum-react-hw-07/people/${index + 1}` }>{name}
            </HwLink>
        );
    });

    return (
        <>
            <h1>People</h1>
            {spinnerJSX}
            {listJSX}
        </>
    );
};
