// import React from 'react';
// import { usePeopleFetch } from './hooks/usePeopleFetch';

// export const People = () => {
//     const { isFetching, data, error } = usePeopleFetch();
//     if (error && error.status === 404) {
//         return <p>Not Found!</p>;
//     }

//     if (error && error.status !== 404) {
//         return <p>Something went wrong</p>;
//     }

//     const spinnerJSX = isFetching && (
//         <p>Loading data from api</p>
//     );

//     const listJSX = !isFetching && data && data.length && data.map(({ name }, index) => {
//         return <li key = { String(index) }>{name}</li>;
//     });

//     return (
//         <>
//             <h1>People</h1>
//             {spinnerJSX}
//             {listJSX}
//         </>
//     );
// };
