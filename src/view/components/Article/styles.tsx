import styled from 'styled-components';

export const StyledArticle = styled.section`
  width: 330px;
  height: 530px;
  margin-right: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.5);

  &:last-child {
    margin-right: 0;
  }
`;


export const StyledHeader = styled.header`
  position: relative;
  background: red;
  height: 280px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const Poster = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
`;

export const Tags = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 35px;
`;

export const TagsConatiner = styled.div`
  margin-right: 8px;

  &:last-child {
  margin-right: 0;
}
`;

export const ArticleContent = styled.article`
  padding: 35px 34px 15px;
`;

export const ArticleTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 15px;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
`;

export const ArticleText = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
`;

export const ArticleFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top-color: lightgray;
  border-top-width: 1px;
  border-top-style: solid;
  padding: 16px 34px 0;
  font-family: Helvetica;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Controls = styled.div`
  display: flex;
  width: 136px;
  justify-content: space-betwee
`;
