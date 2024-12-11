import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const NavBar = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const Buttons = styled.div`
    display: flex;
    gap: 20px;
    margin-right: 40px;
`
