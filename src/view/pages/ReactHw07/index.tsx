// Core
import React from 'react';

// Elements
import { Section, Container, HwLink } from '../../elements';

const ReactHw07 = () => {
    return (
        <Section>
            <Container>
                <HwLink
                    style = {{ width: '174px', height: '80px', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}
                    to = '/self-education/lectrum-react-hw-07/people'>people data
                </HwLink>
                <HwLink
                    style = {{ width: '174px', height: '80px', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}
                    to = '/self-education/lectrum-react-hw-07/films'>films data
                </HwLink>
            </Container>
        </Section>

    );
};

export default ReactHw07;
