// Core
import React from 'react';

// Elements
import { Section, Container } from '../../view/elements';

// Hooks
import { useStudent } from './hooks/useStudent';

export const Profile  = () => {
    const { student }:any = useStudent();

    const profileJSX = student && (
        <>
            <p>Name: {student.firstName}</p>
            <p>Surname: {student.surname}</p>
            {student.age && <p>Age: {student.age}</p>}
            <p>Email: {student.email}</p>
            <p>Sex: {student.sex}</p>
            <p>Speciality: {student.speciality}</p>
        </>
    );

    return (
        <Section>
            <Container>
                <h1>Profile</h1>
                {profileJSX}
            </Container>
        </Section>
    );
};

