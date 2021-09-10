import React from 'react';
import { useParams } from 'react-router';

export function SecretRouter() {
    const { value }:any = useParams();

    return (
        <p>My Secret: {value}</p>
    );
}
