import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
border: none;
padding: 10px 15px;
font-size:18px;
cursor: pointer;
&:focus {
    outline: none;
};
align-self: ${(props:PropTypes) => props.align || 'stretch'};

${(props) => props.primary && css`
color: ${(props:PropTypes) => props.color || 'white'};
background: ${(props) => props.background || 'white'};
`
}`;

type PropTypes = {
    children: string;
    align?: string;
    primary?: boolean;
    color?: string;
    background?: string;
}

const Button:FC<PropTypes> = (props) => {
    return <StyledButton { ...props }/>;
};

export default Button;
