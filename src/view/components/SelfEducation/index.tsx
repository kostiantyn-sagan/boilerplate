import React from 'react';
import styled from 'styled-components';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';
import Button from './components/Button';

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: black;
    font-family: consolas;
`;

const SelfEducation = () => {
    return (
        <AppWrapper>
            <Flex justify = 'center' >
                <Title color = { 'teal' }>Console cmd 2021. Ulbi TV</Title>
            </Flex>
            <Flex direction = 'column'>
                <Console/>
                <Button
                    primary
                    align = 'flex-end'
                    color = { 'red' }>Отправить
                </Button>
            </Flex>;
        </AppWrapper>
    );
};

export default SelfEducation;
