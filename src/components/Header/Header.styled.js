import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const NavBar = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
`
export const NavLinkStyled = styled(NavLink)`
    color: ${props => props.theme.colors.text};

`

export const NavBarList = styled.ul`
    display: flex;
    gap: 50px;
    justify-content: center;
`
