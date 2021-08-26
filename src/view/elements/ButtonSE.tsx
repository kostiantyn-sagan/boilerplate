import React, { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0% {
    transform : rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}`;

type PropTypes = {
    children: string;
    align?: string;
    primary?: boolean;
    color?: string;
    background?: string;
    outlined?: boolean;
}

const StyledButton = styled.button.attrs(() => ({ outlined: true }))`
border: none;
padding: 10px 15px;
font-size:18px;
cursor: pointer;
&:focus {
    outline: none;
};
&:hover {
    animation: ${rotateAnimation} 1s infinite linear;
};
align-self: ${(props:PropTypes) => props.align || 'stretch'};

${(props) => props.primary && css`
color: ${(props:PropTypes) => props.color || 'white'};
background: ${(props) => props.background || 'white'};
`
}

${(props) => props.outlined && css`
color: ${(props:PropTypes) => props.color || 'white'};
border: 1px solid ${(props) => props.color || 'white'};
background: transparent;
`
}`;

// const LargeButton = styled(StyledButton)`font-size: 32px;`;


export const ButtonSE:FC<PropTypes> = (props) => {
    return <StyledButton { ...props }/>;
};

