import { NavLink } from "react-router-dom";
import * as SC from "./Footer.styled"

export const Footer = () => {
    return(
        <SC.Wrap>
            <NavLink to={"/return-policy"}>
                <SC.Text>Return Policy</SC.Text>
            </NavLink>
            <NavLink to={"/confidentiality-policy"}>
                <SC.Text>Confidentiality Policy</SC.Text>
            </NavLink>
        </SC.Wrap>        
    )
};