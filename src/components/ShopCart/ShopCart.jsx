import { CiShoppingCart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { getCarts, removeFromCart, changeCountCart } from "../../redux/cart/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./shopCart.styled"

export const ShopCart = () => {
    
    const dispatch = useDispatch();
    const cartItem = useSelector(getCarts)

    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    };

    const handleRemoveItem = (_id) => {
        dispatch(removeFromCart(_id))
    };

    const handleChangeCount = (e, _id) => {
        const {name} = e.currentTarget
        const item = cartItem.find((value) => value._id === _id)
        name === "Decrement" ? dispatch(changeCountCart({_id, quantity: item.count - 1})) : dispatch(changeCountCart({_id, quantity: item.count + 1}))
    };

    const cartList = useSelector(getCarts);

    return(
        <>
            <SC.Btn onClick={toggleModal}>
                <CiShoppingCart size={42} />
            </SC.Btn>
            {isOpenModal && 
                <Modal  toggleModal={toggleModal}> 
                   {cartList.map(({_id, title, price, category, imageURL, count}) => <li key={_id}>   
                        <SC.Title>{title}</SC.Title>
                        <p>${+price * count}</p> 
                        {category.map((value) => <h3 key={value}>{value}</h3>) }
                        <img width="300px" src={imageURL}/>
                        <SC.Count> 
                            <button type="button" onClick= {(e) => handleChangeCount(e, _id)} name="Decrement" disabled={count <= 1}><FaMinus size={30} /></button>
                                {count}
                            <button type="button" onClick= {(e) => handleChangeCount(e, _id)} name="Increment"><FaPlus size={30} /></button>
                        </SC.Count>
                        <button type="button" onClick={() => handleRemoveItem(_id)} >
                            Видалити з корзини
                        </button> 
                    </li>)} 
                </ Modal>}
        </>
    )
}