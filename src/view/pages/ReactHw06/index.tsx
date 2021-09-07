// Core
import React from 'react';

// Components
import { RegistrationForm } from '../../../bus/student/components/RegistrationForm';

// Elements
import { Section, Container, HwLink } from '../../elements';

const ReactHw05 = () => {
    return (
        <Section>
            <Container style = {{ fontFamily: 'sans-serif', maxWidth: '500px' }}>
                <RegistrationForm/>
                <HwLink
                    style = {{ width: '174px', height: '80px', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}
                    to = '/self-education/lectrum-react-hw-06/student'>registered user data
                </HwLink>
            </Container>
        </Section>

    );
};

export default ReactHw05;
