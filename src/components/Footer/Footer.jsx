import { footerNavigation } from "../../helpers/footerNavigation";
import * as SC from "./Footer.styled"

export const Footer = () => {
    return(
        <SC.Wrap>
            <SC.NavBarList>
                {footerNavigation.map(({id, href, text}) =>
                <li key={id}>
                    <SC.NavLinkStyled to={href}>
                        {text}
                    </SC.NavLinkStyled>
                </li>)}
            </SC.NavBarList>
            <ul>
                <li>
                    <a href="https://www.facebook.com">https://www.facebook.com</a>
                </li>
            </ul>
        </SC.Wrap>        
    )
};