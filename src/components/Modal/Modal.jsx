import { createPortal } from "react-dom";
import { useEffect } from "react";
import * as SC from "./modal.styled.js"

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({children, toggleModal}) => {
    
    const closeModal = (event) => {
        if(event.target === event.currentTarget){
            toggleModal()
        }
    }
    useEffect(() =>{
        const closeOnKey = (event) => {
            console.log(event.code)
            if(event.code === "Escape"){
                toggleModal()
            }
        }    
        window.addEventListener("keydown", closeOnKey)
        document.body.style.overflow = "hidden"
        return () => {
            window.removeEventListener("keydown", closeOnKey)
            document.body.style.overflow = ""
        }
    }, [toggleModal])

    return createPortal(
        <SC.Overlay onClick={closeModal}>
            <SC.Inner>
                {children}
                <SC.CloseBtn type="button" onClick={toggleModal}>
                    X
                </ SC.CloseBtn>
            </ SC.Inner>
        </ SC.Overlay>, modalRoot
    )
};