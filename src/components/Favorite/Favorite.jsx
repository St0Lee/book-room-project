
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { getFavorite, removeFromFavorite } from "../../redux/favorite/favorite-slice";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./Favorite.styled"

export const Favorite = () => {
    
    const dispatch = useDispatch();

    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    };

    const handleRemoveItem = (_id) => {
        dispatch(removeFromFavorite(_id))
    };

    const favoriteList = useSelector(getFavorite);

    return(
        <>
                <SC.Btn onClick={toggleModal}/>
            {isOpenModal && 
                <Modal toggleModal={toggleModal}> 
                   {favoriteList.map(({_id, title, price, category, imageURL}) => <li key={_id}>
                        <SC.Title>{title}</SC.Title>
                        <p>${price}</p> 
                        {category.map((value) => <h3 key={value}>{value}</h3>) }
                        <img width="300px" src={imageURL}/>
                        <button type="button" onClick={() => handleRemoveItem(_id)}>
                            Прибрати з Бажаного
                        </button>
                    </li>)} 
                </Modal>
            }
        </>
    )
};