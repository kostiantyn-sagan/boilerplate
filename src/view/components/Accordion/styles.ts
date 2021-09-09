import styled, { css } from 'styled-components';

export const StyledAccordion = styled.section`
  font-family: Verdana;
  width: 800px;
`;


export const AccordionTitle = styled.h1`
  text-transform: capitalize;
  margin-bottom: 30px;
  text-align: center;
`;

export const AccotdionItem = styled.div<{selected?: boolean}>`
  margin-bottom: 10px;

  &:hover:first-child {
    color: #000;
 }

 ${(props) => props.selected && css`
  &:first-child {
    cursor: initial;
    color: #4886ff;

    &::after {
      content: '-';
    }
   }

  &:last-child {
    display: inline-block;
  }
  `};
`;

export const AccordionQuestion = styled.div<{selected?: boolean}>`
    position: relative;
    padding: 15px 30px;
    background: #f1f4fb;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 24px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 22px;
    transition: color 0.3s;

    &:after {
      content: '+';
      position: absolute;
      right: 30px;
    }

    ${(props) => props.selected && css`
    cursor: initial;
    color: #4886ff;
    &:after {
      content: '-';
    }
  `};
`;

export const AccordionAnswer = styled.p<{selected?: boolean}>`
    padding: 0 30px;
    margin: 0 0 22px;
    font-size: 16px;
    color: #000;
    display: none;

    ${(props) => props.selected && css`
    display: inline-block;
  `};
`;

