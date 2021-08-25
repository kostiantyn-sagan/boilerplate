import React, { FC } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

type PropTypes = {
    // children: ReactNode;
    direction?: string;
    align?: string;
    justify?: string;
    margin?: string;

}

const StyledFlex = styled.div<{customStyles:PropTypes}>`
display: flex;
flex-direction: ${({ customStyles }) => customStyles.direction || 'row'};
 align-items: ${({ customStyles }) => customStyles.align || 'stretch'};
 justify-content: ${({ customStyles }) => customStyles.justify || 'stretch'};
 margin: ${({ customStyles }) => customStyles.margin || '0'}; 
 `;


const Flex:FC<PropTypes> = ({ children, ...props }) => {
    return (
        <StyledFlex
            children = { children }
            customStyles = { props }
        />
    );
};

export default Flex;

