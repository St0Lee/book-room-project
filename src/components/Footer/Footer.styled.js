import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { PiInstagramLogoLight } from "react-icons/pi";

export const Wrap = styled.div`
    display: flex;  
    background-color: ${props => props.theme.colors.primary};
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
`
export const NavLinkStyled = styled(NavLink)`
    color: ${props => props.theme.colors.text};
`
export const NavBarList = styled.ul`
    display: flex;
    gap: 50px;
`

export const InstaIcon = styled(PiInstagramLogoLight)`
    display: flex;
    height: 30px;
    width: 30px;
    color: black;
    align-items: center;
    &:hover{
        color: red;
    }
`

// export const Socials = styled.ul`
//     height: 40px;
//     width: 40px;
// `