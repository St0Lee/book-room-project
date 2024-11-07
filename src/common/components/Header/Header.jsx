import { mainNavigation } from "../../helpers/mainNavigation"
import { NavLink } from "react-router-dom";
import { ShopCart } from "../ShopCart/ShopCart";

import * as SC from "./Header.styled.js"

export const Header = () => {
   return (
    <SC.NavBar>
        <nav>
            <SC.NavBarList>
                {mainNavigation.map(({id, href, text}) => 
                <li key={id}>
                    <NavLink to={href}>
                        {text}
                    </NavLink>
                </li>)}
            </SC.NavBarList>
        </nav>
        <ShopCart />
    </SC.NavBar>
   ) 
};

//Корзина - модальне вікно
//Баннер - інший
//Обране
//Тільки українська
//Реєстрація - необов'язкова


//Create container for content (paddings)

