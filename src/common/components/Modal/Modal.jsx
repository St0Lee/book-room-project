import { createPortal } from "react-dom";
import * as SC from "./modal.styled.js"

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({children, toggleModal}) => {
    return createPortal(
        <div>
            <div>
                {children}
                <button type="button" onClick={toggleModal}>
                    X
                </button>
            </div>
        </div>, modalRoot
    )
};