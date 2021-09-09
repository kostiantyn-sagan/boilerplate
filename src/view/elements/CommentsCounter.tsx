// Core
import React from 'react';
import styled from 'styled-components';

// Styles
const StyledCommentsCounter = styled.span`
   font-family: Helvetica;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  &::before {
    content: '👋';
    display: inline;
    font-size: 11px;
    opacity: 0.6;
  }
`;

export const CommentsCounter = ({ counts = 10 }) => {
    return (
        <StyledCommentsCounter>{counts}</StyledCommentsCounter>
    );
};
