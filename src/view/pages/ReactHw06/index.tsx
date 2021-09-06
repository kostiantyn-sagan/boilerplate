// Core
import React from 'react';

// Components
import { StudentRegistration } from '../../../bus/student/components/StudentRegistration';

// Elements
import { Section, Container } from '../../elements';

const ReactHw05 = () => {
    return (
        <Section>
            <Container style = {{ fontFamily: 'sans-serif', maxWidth: '500px' }}>
                <StudentRegistration/>
            </Container>
        </Section>

    );
};

export default ReactHw05;
