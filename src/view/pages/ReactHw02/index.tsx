// Core
import React from 'react';

// Components
import { News, Accordion } from '../../components';

// Elements
import { Section, Container } from '../../elements';

// Data
import newsData from '../../../api/sourceHw2.json';
import accordionData from '../../../api/accordionData.json';

const ReactHw02 = () => {
    return (
        <Section>
            <Container>
                <News source = { newsData }/>
                <Accordion source = { accordionData }/>
            </Container>
        </Section>
    );
};

export default ReactHw02;
