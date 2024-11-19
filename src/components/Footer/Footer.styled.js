import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrap = styled.div`
    display: flex;  
    background-color: ${props => props.theme.colors.primary};
    justify-content: center;
`
export const NavLinkStyled = styled(NavLink)`
    color: ${props => props.theme.colors.text};
`
export const NavBarList = styled.ul`
    display: flex;
    gap: 50px;
    justify-content: center
`