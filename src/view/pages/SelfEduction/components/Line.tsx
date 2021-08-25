import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
font-size: 24px;
color: ${(props) => props.color || 'white'}`;

type PropTypes = {
    color?: string;
}

const Line:FC<PropTypes> = (props) => {
    return <StyledLine { ...props }/>;
};

export default Line;
