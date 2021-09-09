// Core
import React, { useState } from 'react';
import styled from 'styled-components';

// Styles
const StyledLikesCounter = styled.span`
  font-family: Helvetica;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  &::before {
    content: '♥';
    display: inline;
    font-size: 11px;
    opacity: 0.6;
  }
`;

export const LikesCounter = ({ counts = 315 }) => {
    const [{ likes, liked }, setState ] = useState({
        likes: counts,
        liked: false,
    });

    const toggleLiked = () => {
        if (!liked) {
            return setState((prevState) => ({
                ...prevState,
                likes: prevState.likes + 1,
                liked: !prevState.liked,
            }));
        }

        setState((prevState) => ({
            ...prevState,
            likes: prevState.likes - 1,
            liked: !prevState.liked,
        }));
    };

    return (
        <StyledLikesCounter onClick = { toggleLiked }>{likes}</StyledLikesCounter>
    );
};
