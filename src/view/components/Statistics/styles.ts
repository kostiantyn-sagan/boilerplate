import styled from 'styled-components';

export const StyledStatistics = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
&:not(:last-child) {
   margin-bottom: 12px;
}
`;

export const Text = styled.p`
margin-top: 0;
  margin-bottom: 0;

  color: #212121;
  letter-spacing: 0.03em;
  font-size: 24px;
  line-height: 1.17;
`;
