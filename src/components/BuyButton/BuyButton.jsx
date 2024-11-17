import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { setToCart, getCarts } from "../../redux/cart/cart-slice";

export const BuyButton = ({id, title, price, subtitle, img}) => {

    const dispatch = useDispatch();

    const books = useSelector(getCarts);

    const isInCart = books.find((book) => book.id === id)

    const handleClick = () => {
        dispatch(setToCart({id, title, price, subtitle, img, count: 1}))
    };

    return (
        <button type="button" onClick={handleClick} disabled={isInCart}>
                {isInCart ? "Added to cart" : "Add to cart"}
            </button> 
   )
}

BuyButton.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    subtitle: PropTypes.string,
    img: PropTypes.string.isRequired,
};

BuyButton.defaultProps = {
    subtitle: "",
};