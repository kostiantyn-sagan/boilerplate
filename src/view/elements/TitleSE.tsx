import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
color: ${(props:any) => props.color || props.theme.colors.primary};
`;

type PropTypes = {
    children: string;
    // color: string;
}

export const Title:FC<PropTypes> = (props) => {
    return <StyledTitle  { ...props }/>;
};

