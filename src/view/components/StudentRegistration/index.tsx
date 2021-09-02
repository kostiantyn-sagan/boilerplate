// Core
import React, { FC } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormikProps {
    email?: string;
    onSubmit?: any;
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Минимум 6 символов')
        .max(20, 'Максимум 20 символов')
        .required('Обязательное поле'),
});

export const StudentRegistration: FC<FormikProps> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues = {{ firstName: '', surname: '', age: null, email: '', sex: null, password: '' }}
            validationSchema = { validationSchema }
            onSubmit = { (values, { setSubmitting }) => {
                console.log(values);
                onSubmit(values);
                setSubmitting(false);
            } }>
            <Form autoComplete = 'off'>
                <Field
                    name = 'firstName'
                    type = 'text'
                />
                <Field
                    name = 'surname'
                    type = 'text'
                />
                <Field
                    name = 'age'
                    type = 'number'
                />
                <Field
                    name = 'email'
                    type = 'email'
                />
                <ErrorMessage name = 'email'/>
                <Field
                    name = 'sex'
                    type = 'email'
                />
                <Field
                    name = 'password'
                    type = 'password'
                />
                <ErrorMessage name = 'password'/>
                <button
                    type = 'submit'>
                    Submit
                </button>
            </Form>
        </Formik>
    );
};
