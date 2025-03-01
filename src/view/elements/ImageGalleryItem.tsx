// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Styles
const StyledImageGalleryItem = styled.li`
   border-radius: 2px;
   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

type PropTypes = {
    webformatURL?: string;
    tags?: any;
}


export const ImageGalleryItem:FC<PropTypes> = ({ webformatURL, tags  }) => {
    return (
        <StyledImageGalleryItem>
            <StyledImage
                alt = { tags }
                src = { webformatURL }
            />
        </StyledImageGalleryItem>
    );
};
