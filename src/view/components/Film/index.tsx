// Core
import React from 'react';
import { useParams } from 'react-router';

// Hooks
import { useFilmsFetch } from '../../../bus/films';

export const Film = () => {
    const { value }:any = useParams();
    const { isFetching, data, error } = useFilmsFetch(value);

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
        title, episode_id, opening_crawl, director, producer, created, edited, release_date, url,
    } = data;

    const filmInfoJSX = !isFetching && data && (
        <section>
            <h2>{title}</h2>
            <ul>
                <li><p>Opening crawl: {opening_crawl}</p></li>
                <li><p>Director: {director}</p></li>
                <li><p>Producer: {producer}</p></li>
                <li><p>Release date: {release_date}</p></li>
                <li><p>Episode id: {episode_id}</p></li>
                <li><p>Created: {created}</p></li>
                <li><p>URL: {url}</p></li>
                <li><p>Edited: {edited}</p></li>
            </ul>
        </section>
    );

    return (
        <section>
            {spinnerJSX}
            {filmInfoJSX}
        </section>
    );
};
