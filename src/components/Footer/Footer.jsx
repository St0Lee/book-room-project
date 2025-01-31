import { footerNavigation } from "../../helpers/footerNavigation";

import * as SC from "./Footer.styled"

export const Footer = () => {
    return (
        <SC.Wrap>
            <p>Copyright © 2024 Книжкова кімната</p>
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
                    <a href="https://www.instagram.com/book_room_ukr?igsh=MWhmdnVjYTQ4bDB6OQ==" target="_blank"><SC.InstaIcon /></a> 
                </li>
            </ul>
        </SC.Wrap>        
    )
};