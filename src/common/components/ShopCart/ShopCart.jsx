import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const ShopCart = () => {
   
    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    return(
        <>
            <button onClick={toggleModal}>
                <CiShoppingCart size={42} />
            </button>
            {isOpenModal && 
                <Modal toggleModal={toggleModal}> 
                   asfjgfdgjopnfsvfjnadfv;jnknsfv;jno 
                </ Modal>}
        </>
    )
}