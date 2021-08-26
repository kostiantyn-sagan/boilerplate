// Core
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// Components
import { Console } from '../../components';

// Elements
import { Flex, Title, ButtonSE, ButtonLink } from '../../elements';

// Global styles for SelfEducation

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`;

const theme: any = {
    colors: {
        primary:   'tomato',
        secondary: 'tomato',
    },
    media: {
        phone:  '(max-width: 425px)',
        tablet: '(max-width: 768px) and (min-width: 425px)',
    },
};

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: black;
    font-family: consolas;
`;


const SelfEducation = () => {
    return (
        <ThemeProvider theme = { theme }>
            <Global/>
            <AppWrapper>
                <ButtonLink
                    primary
                    href = 'https://github.com/styled-components/styled-components'
                    rel = 'noopener'
                    target = '_blank'>
                    GitHub
                </ButtonLink>
                <ButtonLink
                    href = 'https://styled-components.com/docs'
                    target = '_blank'>
                    Documentation
                </ButtonLink>

                <Flex justify = 'center' >
                    <Title>Console cmd 2021. Ulbi TV</Title>
                </Flex>
                <Flex
                    direction = 'column'
                    margin = { '10px 0' }>
                    <Console/>
                    <ButtonSE
                        align = 'flex-end'
                        color = 'teal'>
                        Отправить
                    </ButtonSE>
                </Flex>;
            </AppWrapper>
        </ThemeProvider>
    );
};

export default SelfEducation;

