import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

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

const Console:FC<PropTypes> = ({ color, ...props }) => {
    const [{ lines }, setlines ] = useState({ lines: [ 'C/users/qwewe>' ]});

    const onKeyPress = (event:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            console.log(event.key);
            setlines(({ lines }) => ({ lines: [ ...lines, 'C/users/qwewe>' ]}));
        }
    };

    return (
        <Flex>
            <Flex
                direction = { 'column' }
                margin = '0 10px'>{lines.map((line, idx) => (
                    <Line
                        color = { color }
                        key = { idx }>{line}
                    </Line>
                ))}
            </Flex>
            <StyledConsole
                color = { color }
                onKeyPress = { onKeyPress }
                { ...props }
            />
        </Flex>
    );
};

export default Console;
