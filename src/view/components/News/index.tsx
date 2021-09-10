// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Components
import { Article } from '../';

// Styles
const StyledNews = styled.section`
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;

type PropTypes = {
    source?: any;
}

export const News:FC<PropTypes> = ({ source }) => {
    return (
        <StyledNews>
            {!source ? <><Article/><Article/><Article/></>
                : source.map(({ title, description, published, likes, comments, image, tags }:any) => (
                    <Article
                        comments = { comments }
                        description = { description }
                        image = { image }
                        key = { title }
                        likes = { likes }
                        published = { published }
                        tags = { tags }
                        title = { title }
                    />
                )) }
        </StyledNews>
    );
};
