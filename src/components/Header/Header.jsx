import { mainNavigation } from "../../helpers/mainNavigation"
import { Favorite } from "../Favorite/Favorite.jsx";
import { ShopCart } from "../ShopCart/ShopCart";

import * as SC from "./Header.styled.js"

export const Header = () => {
   return (
    <SC.NavBar>
        <nav>
            <SC.NavBarList>
                {mainNavigation.map(({id, href, text}) => 
                <li key={id}>
                    <SC.NavLinkStyled to={href}>
                        {text}
                    </SC.NavLinkStyled>
                </li>)}
            </SC.NavBarList>
        </nav>
        <ShopCart />
        <Favorite />
    </SC.NavBar>
   ) 
};

//Корзина - модальне вікно - done
//Баннер - інший
//Обране - done
//Тільки українська
//Реєстрація - необов'язкова

//Обране - modal

