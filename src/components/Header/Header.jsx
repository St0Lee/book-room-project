import { mainNavigation } from "../../helpers/mainNavigation"
import { Favorite } from "../Favorite/Favorite.jsx";
import { ShopCart } from "../ShopCart/ShopCart";

import { NavLink } from "react-router-dom";

import logo from "../../common/images/logo-placeholder-image.png"

import * as SC from "./Header.styled.js"


export const Header = () => {
   return (
    <SC.NavBar>
        <NavLink to={"/"}>
            <img src={logo} width={80} height={80}/>
        </NavLink>
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
        <SC.Buttons>
            <Favorite />
            <ShopCart />
        </SC.Buttons>
    </SC.NavBar>
   ) 
};

//Корзина - модальне вікно - done
//Баннер - інший
//Обране - done
//Тільки українська
//Реєстрація - необов'язкова

//Обране - modal

//категорії - підкаткгорії
