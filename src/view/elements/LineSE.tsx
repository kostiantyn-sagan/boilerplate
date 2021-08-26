import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
font-size: 24px;
color: ${(props:any) => props.color || props.theme.colors.primary}`;

type PropTypes = {
    color?: string;
}

const Line:FC<PropTypes> = (props) => {
    return <StyledLine { ...props }/>;
};

export default Line;
