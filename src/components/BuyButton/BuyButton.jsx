import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { setToCart, getCarts } from "../../redux/cart/cart-slice";

export const BuyButton = ({_id, title, price, category, imageURL}) => {

    const dispatch = useDispatch();

    const books = useSelector(getCarts);

    const isInCart = books.find((book) => book._id === _id)

    const handleClick = () => {
        dispatch(setToCart({_id, title, price, category, imageURL, count: 1}))
    };

    return (
        <button type="button" onClick={handleClick} disabled={isInCart}>
                {isInCart ? "Added to cart" : "Add to cart"}
            </button> 
   )
}

BuyButton.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.array.string,
    imageURL: PropTypes.string.isRequired,
};

BuyButton.defaultProps = {
    subtitle: "",
};