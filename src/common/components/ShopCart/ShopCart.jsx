import { CiShoppingCart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { getCarts, removeFromCart, changeCountCart } from "../../../redux/cart/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./shopCart.styled"

export const ShopCart = () => {
    
    const dispatch = useDispatch();
    const cartItem = useSelector(getCarts)

    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id))
    };

    const handleChangeCount = (e, id) => {
        const {name} = e.currentTarget
        const item = cartItem.find((value) => value.id === id)
        name === "Decrement" ? dispatch(changeCountCart({id, quantity: item.count - 1})) : dispatch(changeCountCart({id, quantity: item.count + 1}))
    };

    const cartList = useSelector(getCarts);

    return(
        <>
            <button onClick={toggleModal}>
                <CiShoppingCart size={42} />
            </button>
            {isOpenModal && 
                <Modal toggleModal={toggleModal}> 
                   {cartList.map(({id, title, price, subtitle, img, count}) => <li key={id}>   
                        <SC.Title>{title}</SC.Title>
                        <p>${+price * count}</p> 
                        <h3>{subtitle}</h3>
                        <img src={img}/>
                        <SC.Count> 
                            <button type="button" onClick= {(e) => handleChangeCount(e, id)} name="Decrement" disabled={count <= 1}><FaMinus size={30} /></button>
                                {count}
                            <button type="button" onClick= {(e) => handleChangeCount(e, id)} name="Increment"><FaPlus size={30} /></button>
                        </SC.Count>
                        <button type="button" onClick={() => handleRemoveItem(id)} >
                            Remove from Cart
                        </button> 
                    </li>)} 
                </ Modal>}
        </>
    )
}