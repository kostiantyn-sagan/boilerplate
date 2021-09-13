// Core
import React, { FC, useEffect } from 'react';
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom';

// Pages
import { SelfEducation, ReactHw01, ReactHw02, ReactHw03, ReactHw04, ReactHw05, ReactHw06, ReactHw07 } from '../../pages';

// Bus
import { People } from '../../../bus/people';
import { Films } from '../../../bus/films';

// Components
import { RegistrationForm } from '../../../bus/student/components/RegistrationForm';
import { Profile } from '../../../bus/student';
import { Guardian } from '../../components';
import { Person } from '../../../bus/people/components/Person';

// Elements
import { Section, Container, ContactsEmail, SecretRouter } from '../../elements';

// Book
import { book } from './book';

export const Private: FC = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.match(/login|register/)) {
            push('/');
        }
    });

    return (
        <Switch>
            {/* <Route
                exact
                path = '/'>
                <Main />
            </Route> */}
            <Route
                exact
                path = { book.root }>
                <SelfEducation />
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-01` }>
                <ReactHw01 />
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-02` }>
                <ReactHw02 />
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-03` }>
                <ReactHw03 />
            </Route>
            <Route
                exact
                path = { `${book.root}/lectrum-react-hw-04` }>
                <ReactHw04 />
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-04${book.contacts}` }>
                <Section>
                    <Container>
                        <ContactsEmail/>
                    </Container>
                </Section>
            </Route>
            <Route
                exact
                path = { `${book.root}/lectrum-react-hw-05` }>
                <ReactHw05 />
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-05${book.registration}` }>
                <Section>
                    <Container style = {{ fontFamily: 'sans-serif', maxWidth: '500px' }}>
                        <RegistrationForm onSubmit = { (x:any) => console.log(x) }/>
                    </Container>
                </Section>
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-06${book.registration}` }>
                <ReactHw06/>
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-06${book.student}` }>
                <Profile/>
            </Route>
            <Route
                exact
                path = { `${book.root}/lectrum-react-hw-07` }>
                <ReactHw07/>
            </Route>
            <Route
                exact
                path = { `${book.root}/lectrum-react-hw-07${book.people}` }>
                <Section>
                    <Container>
                        <People/>
                    </Container>
                </Section>
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-07${book.person}` }>
                <Person/>
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-07${book.films}` }>
                <Films/>
            </Route>
            <Guardian>
                <Route path = { `${book.root}/lectrum-react-hw-04${book.secret}` }>
                    <Section>
                        <Container>
                            <SecretRouter/>
                        </Container>
                    </Section>
                </Route>
            </Guardian>
            <Redirect to = { book.root }/>
        </Switch>
    );
};
