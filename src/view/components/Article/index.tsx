// Core
import React, { FC } from 'react';

// Elements
import { Tag, CommentsCounter, LikesCounter } from '../../elements';

// Styles
import { StyledArticle, StyledHeader, Poster, Image, Tags, TagsConatiner, ArticleContent, ArticleTitle, ArticleText, ArticleFooter, Controls } from './styles';

const parseDateString = (dateString:any) => {
    const date = new Date(Date.parse(dateString));

    const dayOfMonth = date.getDate();
    const month
      = date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${dayOfMonth}.${month}.${year}`;
};

const tagsJSX = (
    <>
        <TagsConatiner>
            <Tag>Literature</Tag>
        </TagsConatiner>
        <TagsConatiner>
            <Tag>Books</Tag>
        </TagsConatiner>
    </>
);

type PropTypes = {
    description?: string;
    title?: string;
    published?: any;
    likes?: any;
    comments?: any;
    image?: any;
    tags?: any;
}

export const Article:FC<PropTypes> = ({
    title = 'American writer of bad cowboy stories arrived in',
    description = 'Volunteering to help people in need combined with travelling to faraway places is a new',
    published,
    likes,
    comments,
    image = 'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png',
    tags,
}) => {
    return (
        <StyledArticle>
            <StyledHeader>
                <Poster>
                    <Image
                        alt = { tags }
                        src = { image }
                    />
                </Poster>
                <Tags>
                    {!tags ? tagsJSX
                        : tags.map((tag:any, idx:number) => (
                            <TagsConatiner key = { idx }>
                                <Tag
                                    key = { tag }
                                    source = { tag }
                                />
                            </TagsConatiner>
                        ))}

                </Tags>
            </StyledHeader>
            <ArticleContent>
                <ArticleTitle>{title}</ArticleTitle>
                <ArticleText>{description}</ArticleText>
            </ArticleContent>
            <ArticleFooter>
                <span>{!published ? '15.07.2017' : parseDateString(published)}</span>
                <Controls>
                    <CommentsCounter counts = { comments }/>
                    <LikesCounter counts = { likes }/>
                </Controls>
            </ArticleFooter>
        </StyledArticle>
    );
};
