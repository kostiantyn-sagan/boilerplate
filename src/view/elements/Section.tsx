// Core
import React, { FC, ReactElement } from 'react';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

// Type
type Proptypes = {
    title?: string;
    children?: ReactElement;
};

// Styles
const Styled = styled.section`
  padding-top: 22px;
    padding-bottom: 22px;
`;

const Title = styled.h2`
  margin-top: 0;
    margin-bottom: 44px;
  
    font-size: 36px;
    font-weight: 500;
    line-height: 1.17;
    color: #212121;
    letter-spacing: 0.03em;
`;

export const Section: FC<Proptypes> = ({ title, children }) => {
    return (
        <Container fixed>
            {title && <Typography variant = 'h2'>{title}</Typography>}
            {children}
        </Container>
    );
};
