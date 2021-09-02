import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const SignUpLink = styled(NavLink)`
text-decoration: none;
max-width: 200px;
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
border: 1px solid #2196f3;
border-radius: 4px;
padding: 10px 28px;
font-size: 18px;
font-weight: 700;
line-height: 1.87;
letter-spacing: 0.06em;
text-transform: uppercase;
color: #2196f3;
box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

&:hover,
&:focus {
    text-decoration: underline;
}
`;
