import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const HwLink = styled(NavLink)`
height:         90px;
display:        flex;
justify-content: center;
align-items:     center;
border:         1px solid #afb1b8;
border-radius:   4px;
font-family: sans-serif;
font-size: 18px;
color:          #afb1b8 ;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
  border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
    color: #2196f3;
    border-color: #2196f3;
}
`;
