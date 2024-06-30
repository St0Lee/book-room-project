import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { getCarts } from "../../../redux/cart/cart-slice";
import { useSelector } from "react-redux";

export const ShopCart = () => {
   
    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    const cartList = useSelector(getCarts);
    console.log(cartList)

    return(
        <>
            <button onClick={toggleModal}>
                <CiShoppingCart size={42} />
            </button>
            {isOpenModal && 
                <Modal toggleModal={toggleModal}> 
                   {cartList.map(({id, title, price, subtitle, img}) => <li key={id}>   
                        <h2>{title}</h2>
                        <p>{price}</p> 
                        <h3>{subtitle}</h3>
                        <img src={img}/>
                        <button type="button" onClick={() => {}} >
                            Remove from Cart
                        </button> 
                    </li>)} 
                </ Modal>}
        </>
    )
}