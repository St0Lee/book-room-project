import { NavLink } from "react-router-dom";
import * as SC from "./Footer.styled"

export const Footer = () => {
    return(
        <SC.Wrap>
            <NavLink to={"/return-policy"}>
                <p>Return Policy</p>
            </NavLink>
            <NavLink to={"/confidentiality-policy"}>
                <p>Confidentiality Policy</p>
            </NavLink>
        </SC.Wrap>        
    )
};