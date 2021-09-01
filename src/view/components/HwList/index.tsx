// Core
import React from 'react';
import styled from 'styled-components';

// Elements
import { HwItem, HwLink } from '../../elements';

// Styles
const StyledHwList = styled.ul`
    display: flex;
    justify-content: space-between;
`;

export const Hwlist = () => {
    return (
        <StyledHwList>
            <HwItem>
                <HwLink to = '/self-education/lectrum-react-hw-01'>hw-01</HwLink>
            </HwItem>
            <HwItem>
                <HwLink to = '/self-education/lectrum-react-hw-02'>hw-02</HwLink>
            </HwItem>
            <HwItem>
                <HwLink to = '/self-education/lectrum-react-hw-03'>hw-03</HwLink>
            </HwItem>
            <HwItem>
                <HwLink to = '/self-education/lectrum-react-hw-04'>hw-04</HwLink>
            </HwItem>
            <HwItem>
                <HwLink to = '/self-education/lectrum-react-hw-05'>hw-05</HwLink>
            </HwItem>
        </StyledHwList>
    );
};
