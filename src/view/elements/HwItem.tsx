// Core
import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface Props  {
    children: ReactElement;
}

// Styles
const Styled = styled.li`
    width: calc((100% - 150px) / 6);
`;

export const HwItem: FC<Props> = ({ children }) => {
    return (
        <Styled >
            {children}
        </Styled>
    );
};
