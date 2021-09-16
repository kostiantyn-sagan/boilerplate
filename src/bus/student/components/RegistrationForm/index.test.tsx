/**
 * @jest-environment jsdom
 */

// Core
import  React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';

// Component
import { RegistrationForm } from './index';

// Store
import { store } from '../../../../init/redux/index';


describe('registrationForm component', () => {
    test('should render without crashing', () => {
        const div = document.createElement('div');
        render(<Provider store = { store }><RegistrationForm /></Provider>, div);
        unmountComponentAtNode(div);
    });
});

