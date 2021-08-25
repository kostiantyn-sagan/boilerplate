import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
color: ${(props) => props.color};
`;

type PropTypes = {
    children: string;
    color: string;
}

const Title:FC<PropTypes> = (props) => {
    return <StyledTitle  { ...props }/>;
};

export default Title;
