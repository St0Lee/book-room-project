import { useDispatch, useSelector } from "react-redux";
import { setToCart, getCarts } from "../../../../redux/cart/cart-slice";
import PropTypes from "prop-types";


export const BooksListItem = ({id, title, price, subtitle, img}) => {
    const dispatch = useDispatch();

    const books = useSelector(getCarts);
    
    const isInCart = books.find((book) => book.id === id)
    
    const handleClick = () => {
        dispatch(setToCart({id, title, price, subtitle, img, count: 1}))
    };

    return(
        <li>
            <h2>{title}</h2>
            <p>{price}</p> 
            <h3>{subtitle}</h3>
            <img src={img} alt={title}/>
            <button type="button" onClick={handleClick} disabled={isInCart}>
                {isInCart ? "Added to cart" : "Add to cart"}
            </button> 
        </li>
)
}

BooksListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    subtitle: PropTypes.string,
    img: PropTypes.string.isRequired,
};

BooksListItem.defaultProps = {
    subtitle: "",
};

