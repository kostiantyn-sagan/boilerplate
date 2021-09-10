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

// Components
import { RegistrationForm } from '../../../bus/student/components/RegistrationForm';
import { Profile } from '../../../bus/student';
import { Guardian } from '../../components';

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
            <Route path = { `${book.root}/lectrum-react-hw-05/registration` }>
                <Section>
                    <Container style = {{ fontFamily: 'sans-serif', maxWidth: '500px' }}>
                        <RegistrationForm onSubmit = { (x:any) => console.log(x) }/>
                    </Container>
                </Section>
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-06/registration` }>
                <ReactHw06/>
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-06/student` }>
                <Profile/>
            </Route>
            <Route path = { `${book.root}/lectrum-react-hw-07` }>
                <ReactHw07/>
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
