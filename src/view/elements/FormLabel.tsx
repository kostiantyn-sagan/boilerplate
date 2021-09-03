import styled, { css } from 'styled-components';


export const FormLabel = styled.label<{error?: boolean}>`
display: block;
margin-bottom: 20px;

${(props) => props.error && css`
color: red;
`};
`;
