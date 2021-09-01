// Core
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';


// Components
import { UserMenu } from './UserMenu';

// Images
import logo from '../../../assets/images/logo.png';

// Styles
import { TopbarContainer, Logo, SelfEducationLink } from './styles';

export const TopBar: FC = () => {
    return (
        <TopbarContainer>
            <Logo src = { logo } />
            <SelfEducationLink>
                <NavLink
                    style = {{ textDecoration: 'none', color: 'inherit' }}
                    to = '/self-education'>Self-education
                </NavLink>
            </SelfEducationLink>
            <h1>Boilerplate</h1>
            <UserMenu />
        </TopbarContainer>
    );
};
