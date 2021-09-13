// Core
import React from 'react';
import { useParams } from 'react-router';

// Hooks
import { usePeopleFetch } from '../../hooks/usePeopleFetch';
import { HwLink } from '../../../../view/elements';

export const Person = () => {
    const { value }:any = useParams();
    // console.log(value);
    const { isFetching, data, error } = usePeopleFetch(value);
    if (error && error.status === 404) {
        return <p>Not Found!</p>;
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong</p>;
    }

    const spinnerJSX = isFetching && (
        <p>Loading data from api</p>
    );

    const personInfoJSX = !isFetching && data?.length && data.map(({ name }:any, index: number) => {
        return (
            <HwLink
                key = { String(index) }
                to = { `/self-education/lectrum-react-hw-07/people/${index + 1}` }>{name}
            </HwLink>
        );
    });

    return (
        <>
            <h1>Person</h1>
            {spinnerJSX}
            {personInfoJSX}
        </>
    );
};
