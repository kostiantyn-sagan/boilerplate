import styled, { css } from 'styled-components';


export const ButtonLink = styled.a<{primary?: boolean}>`
box-sizing: border-box;
text-decoration: none;

display: inline-block;
width: 11rem;
margin: 0.5rem 1rem;
border: 2px solid white;
border-radius: 3px;
padding: 0.5rem 0;

font-family: sans-serif;
font-size: 18px;
line-height: 1.6;
text-align: center;
color: white;
background: transparent;


${(props) => props.primary && css`
color: black;
background: white;
`};`;

