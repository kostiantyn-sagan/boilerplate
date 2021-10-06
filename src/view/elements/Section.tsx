// Core
import React, { FC, ReactElement } from 'react';
import { Container, Typography } from '@mui/material';

// Type
type Proptypes = {
    title?: string;
    children?: ReactElement;
};

export const Section: FC<Proptypes> = ({ title, children }) => {
    return (
        <Container
            fixed
            sx = {{ marginBottom: '30px' }}>
            {title && (
                <Typography
                    gutterBottom
                    variant = 'h2'>
                    {title}
                </Typography>
            )}
            {children}
        </Container>
    );
};
