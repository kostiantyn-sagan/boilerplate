// Core
import React from 'react';

// Components
import { RegistrationForm } from '../../../bus/student/components/RegistrationForm';

// Elements
import { Section, Container, HwLink } from '../../elements';

const ReactHw07 = () => {
    return (
        <Section>
            <Container>
                <h1>This is page hw-07</h1>
                <RegistrationForm/>
                <HwLink
                    style = {{ width: '174px', height: '80px', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}
                    to = '/self-education/lectrum-react-hw-06/student'>registered user data
                </HwLink>
            </Container>
        </Section>

    );
};

export default ReactHw07;
