// Core
import React, { FC } from 'react';
import { Typography } from '@mui/material';

// Type
type Proptypes = {
    children: string;
};

export const Notification: FC<Proptypes> = ({ children }) => {
    return <Typography variant = 'body1'>{children}</Typography>;
};
