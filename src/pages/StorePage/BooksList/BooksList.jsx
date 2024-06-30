import allBooks from "../../../common/data/books.json"
import { useDispatch } from "react-redux"
import { setToCart } from "../../../redux/cart/cart-slice";
export const BooksList = () => {
    const dispatch = useDispatch();

    const handleClick = (book) => {
        dispatch(setToCart(book))
    }

    return(
        <ul>
            {allBooks.map(({id, title, price, subtitle, img}) => <li key={id}>
                <h2>{title}</h2>
                <p>{price}</p> 
                <h3>{subtitle}</h3>
                <img src={img}/>
                <button type="button" onClick={() => handleClick({id, title, price, subtitle, img}) } >
                    Add to Cart
                </button> 
            </li>)}
        </ul>
    )
}