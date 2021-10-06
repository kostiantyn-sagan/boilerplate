// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Type
type Proptypes = {
    children: string;
};

// Styles
const Styled = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  color: #212121;
  letter-spacing: 0.03em;
  font-size: 24px;
  line-height: 1.17;
`;

export const Notification: FC<Proptypes> = ({ children }) => {
    return <Styled>{children}</Styled>;
};
