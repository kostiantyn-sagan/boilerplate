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
import { Main, SelfEducation, ReactHw01, ReactHw02, ReactHw03, ReactHw04, ReactHw05, ReactHw06 } from '../../pages';

// Components
import { RegistrationForm } from '../../../bus/student/components/RegistrationForm';
import { Profile } from '../../../bus/student';

// Elements
import { Section, Container } from '../../elements';

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
            <Route
                exact
                path = '/'>
                <Main />
            </Route>
            <Route
                exact
                path = '/self-education'>
                <SelfEducation />
            </Route>
            <Route path = '/self-education/lectrum-react-hw-01'>
                <ReactHw01 />
            </Route>
            <Route path = '/self-education/lectrum-react-hw-02'>
                <ReactHw02 />
            </Route>
            <Route path = '/self-education/lectrum-react-hw-03'>
                <ReactHw03 />
            </Route>
            <Route path = '/self-education/lectrum-react-hw-04'>
                <ReactHw04 />
            </Route>
            <Route
                exact
                path = '/self-education/lectrum-react-hw-05'>
                <ReactHw05 />
            </Route>
            <Route path = '/self-education/lectrum-react-hw-05/registration'>
                <Section>
                    <Container style = {{ fontFamily: 'sans-serif', maxWidth: '500px' }}>
                        <RegistrationForm onSubmit = { (x:any) => console.log(x) }/>
                    </Container>
                </Section>
            </Route>
            <Route path = '/self-education/lectrum-react-hw-06/registration'>
                <ReactHw06/>
            </Route>
            <Route path = '/self-education/lectrum-react-hw-06/student'>
                <Profile/>
            </Route>
            <Redirect to = '/form' />
        </Switch>
    );
};
