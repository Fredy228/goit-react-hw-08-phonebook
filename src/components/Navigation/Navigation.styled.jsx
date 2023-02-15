import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LinkNav = styled(NavLink)`
    margin-right: 10px;
    color: black;
    padding: 10px;
    border-radius: 7px;
    transition: background-color 250ms linear;
    text-decoration: underline;
    :hover {
        background-color: #a2d0f6;
    }
`