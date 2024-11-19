import { GoHeart } from "react-icons/go";
import { useState } from "react";
import { ModalFavorite } from "../Modal/modalFavorite/ModalFavorite";
import { getFavorite, removeFromFavorite } from "../../redux/favorite/favorite-slice";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./Favorite.styled"

export const Favorite = () => {
    
    const dispatch = useDispatch();

    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromFavorite(id))
    };

    const favoriteList = useSelector(getFavorite);

    return(
        <>
            <SC.Btn onClick={toggleModal}>
                <GoHeart size={42} />
            </SC.Btn>
            {isOpenModal && 
                <ModalFavorite  toggleModal={toggleModal}> 
                   {favoriteList.map(({id, title, price, subtitle, img}) => <li key={id}>   
                        <SC.Title>{title}</SC.Title>
                        <p>${price}</p> 
                        <h3>{subtitle}</h3>
                        <img src={img}/>
                        <button type="button" onClick={() => handleRemoveItem(id)} >
                            Прибрати з Бажаного
                        </button> 
                    </li>)} 
                </ ModalFavorite>}
        </>
    )
}