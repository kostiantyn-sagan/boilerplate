// Core
import React, { FC } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Elements
import { FormLabel } from '../../../../view/elements';

// Hooks
import { useStudent } from '../../hooks/useStudent';

interface FormikProps {
    email?: string;
    onSubmit?: any;
}

const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    surname:   Yup.string().required('Required'),
    age:       Yup.number().positive()
        .integer()
        .min(7, 'You are under 7 years old')
        .max(59, 'You are over 59 years old'),
    email: Yup.string().email('Invalid email address')
        .required('Required'),
    sex: Yup.string().oneOf([ 'Male', 'Female' ])
        .required('Required'),
    speciality: Yup.string().oneOf([ 'designer', 'developer', 'writer' ])
        .required('Required'),
});

export const RegistrationForm: FC<FormikProps> = () => {
    const { fillStudent } = useStudent();

    return (
        <Formik
            initialValues = {{ firstName: '', surname: '', age: '', email: '', sex: '', speciality: '' }}
            validationSchema = { validationSchema }
            // onSubmit = { (values, { setSubmitting }) => {
            //     onSubmit(values);
            //     setSubmitting(false);
            // } }
            onSubmit = { fillStudent }>
            {({ errors }) => (
                <Form
                    autoComplete = 'off'
                    style = {{
                        padding:      '10px',
                        border:       '1px solid #2196f3',
                        borderRadius: '4px',
                    }}>
                    <FormLabel  error = { !!errors.firstName }>
                        First Name
                        <Field
                            name = 'firstName'
                            style = {
                                errors.firstName ? { display: 'block', border: '1px solid red' } : { display: 'block' } }
                            type = 'text'
                        />
                    </FormLabel>
                    <ErrorMessage name = 'firstName'/>
                    <FormLabel error = { !!errors.surname }>
                        Surname
                        <Field
                            name = 'surname'
                            style = { errors.surname ? { display: 'block', border: '1px solid red' } : { display: 'block' } }
                            type = 'text'
                        />
                    </FormLabel>
                    <ErrorMessage name = 'surname'/>
                    <FormLabel error = { !!errors.age }>
                        Age
                        <Field
                            name = 'age'
                            style = { errors.age ? { display: 'block', border: '1px solid red' } : { display: 'block' } }
                            type = 'number'
                        />
                    </FormLabel>
                    <ErrorMessage name = 'age'/>
                    <FormLabel error = { !!errors.email }>
                        Email Address
                        <Field
                            name = 'email'
                            style = { errors.email ? { display: 'block', border: '1px solid red' } : { display: 'block' } }
                            type = 'email'
                        />
                    </FormLabel>
                    <ErrorMessage name = 'email'/>
                    <div
                        id = 'my-radio-group'>Sex
                    </div>
                    <div
                        aria-labelledby = 'my-radio-group'
                        role = 'group'>
                        <FormLabel error = { !!errors.sex }>
                            <Field
                                name = 'sex'
                                type = 'radio'
                                value = 'Male'
                            />
                            Male
                        </FormLabel>
                        <FormLabel error = { !!errors.sex }>
                            <Field
                                name = 'sex'
                                type = 'radio'
                                value = 'Female'
                            />
                            Female
                        </FormLabel>
                    </div>
                    <ErrorMessage name = 'sex'/>
                    <FormLabel error = { !!errors.speciality }>
                        Speciality
                        <Field
                            as = 'select'
                            name = 'speciality'
                            style = { errors.speciality ? { display: 'block', border: '1px solid red' } : { display: 'block' } }>
                            <option value = 'designer'>Designer</option>
                            <option value = 'developer'>Developer</option>
                            <option value = 'writer'>Writer</option>
                        </Field>
                    </FormLabel>
                    <ErrorMessage name = 'speciality'/>
                    <button
                        type = 'submit'>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

