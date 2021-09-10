import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../tools/hooks';
import { book } from '../../App/Routes/book';

export const Guardian = ({ children }:any) => {
    const history = useHistory();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            history.replace(book.root);
        }
    }, [ history, isAuthenticated ]);

    return <>{children}</>;
};
