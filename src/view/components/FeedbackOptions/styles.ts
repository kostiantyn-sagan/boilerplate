import styled from 'styled-components';

export const StyledOptions = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const OptionsItem = styled.li`
&:not(:last-child) {
   margin-right: 10px;
}
`;

export const Btn = styled.button`
 border: 1px solid #afb1b8;
  border-radius: 6px;
  padding: 2px 16px;

  color: #212121;
  background-color: #ffffff;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: capitalize;

  box-shadow: 0px 2px 2px rgb(0 0 0 / 12%), 0px 1px 2px rgb(0 0 0 / 8%),
    0px 3px 1px rgb(0 0 0 / 10%);

    &:active {
  background-color: #2196f3;
}
`;
