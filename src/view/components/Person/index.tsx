// Core
import React from 'react';
import { useParams } from 'react-router';

// Hooks
import { usePeopleFetch } from '../../../bus/people';

export const Person = () => {
    const { value }:any = useParams();
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

    const {
        name, height, mass, skin_color, created, edited, eye_color, homeworld, url,
    } = data;

    const personInfoJSX = !isFetching && data && (
        <section>
            <h2>{name}</h2>
            <ul>
                <li><p>Created: {created}</p></li>
                <li><p>Height: {height}</p></li>
                <li><p>Mass: {mass}</p></li>
                <li><p>Skin color: {skin_color}</p></li>
                <li><p>Eye color: {eye_color}</p></li>
                <li><p>Homeworld: {homeworld}</p></li>
                <li><p>URL: {url}</p></li>
                <li><p>Edited: {edited}</p></li>
            </ul>
        </section>
    );

    return (
        <section>
            {spinnerJSX}
            {personInfoJSX}
        </section>
    );
};
