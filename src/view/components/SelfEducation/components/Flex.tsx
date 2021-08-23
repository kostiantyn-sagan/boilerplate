import React, { FC } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

type PropTypes = {
    children: ReactNode;
    direction?: string;
    align?: string;
    justify?: string;
    margin?: string;

}

const StyledFlex = styled.div`
display: flex;
flex-direction: ${(props:PropTypes) => props.direction || 'row'};
 align-items: ${(props) => props.align || 'stretch'};
 justify-content: ${(props) => props.justify || 'stretch'};
 margin: ${({ margin }) => margin || '0'}; 
 `;


const Flex:FC<PropTypes> = (props) => {
    return <StyledFlex { ...props }/>;
};

export default Flex;

