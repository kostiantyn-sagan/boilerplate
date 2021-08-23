import React, { FC } from 'react';
import styled from 'styled-components';

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${({ color }) => color || 'white'};
&:focus {
    outline: none;
}`;

type PropTypes = {
    color?: string;
}

const Console:FC<PropTypes> = (props) => {
    return <StyledConsole { ...props }/>;
};

export default Console;
