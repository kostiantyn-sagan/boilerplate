// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';


// Components
import { UserMenu } from './UserMenu';

// Images
import logo from '../../../assets/images/logo.png';

// Styles
import { TopbarContainer, Logo } from './styles';

export const TopBar: FC = () => {
    return (
        <TopbarContainer>
            <Logo src = { logo } />
            <Link to = '/self-education'>Self-education</Link>
            <h1>Boilerplate</h1>
            <UserMenu />
        </TopbarContainer>
    );
};
