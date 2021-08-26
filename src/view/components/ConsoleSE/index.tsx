import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../../elements';
import Line from '../../elements/LineSE';

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${(props:any) => props.color || props.theme.colors.primary};
&:focus {
    outline: none;
}

@media ${(props:any) => props.theme.media.phone} {
    border: 1px solid tomato;
}

@media ${(props:any) => props.theme.media.tablet} {
    border: 1px solid teal;
}`;

type PropTypes = {
    color?: string;
}

export const Console:FC<PropTypes> = ({ color, ...props }) => {
    const [{ lines }, setlines ] = useState({ lines: [ 'C/users/qwewe>' ]});

    const onKeyPress = (event:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
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

