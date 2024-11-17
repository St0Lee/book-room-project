import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoHeart, GoHeartFill } from "react-icons/go";
import PropTypes from "prop-types";

import { BuyButton } from "../../../../components/BuyButton/BuyButton";

import { getFavorite, removeFromFavorite, setToFavorite  } from "../../../../redux/favorite/favorite-slice";


export const BooksListItem = ({id, title, price, subtitle, img}) => {

    const dispatch = useDispatch();
    const favoriteItem = useSelector(getFavorite)

    const isInFavorite = favoriteItem.find((favorite) => favorite.id === id)
    
    const handleChangeFavorite = (id) => {
        {isInFavorite ? dispatch(removeFromFavorite(id)) : dispatch(setToFavorite({id}))  }
    }

    return(
        <li>
            <Link to={`/books/${id}`}>
                <h2>{title}</h2>
                <img src={img} alt={title}/>
            </Link>
            <h3>{subtitle}</h3>
            <p>{price}</p>
            <BuyButton id={id} title={title} price={price} subtitle={subtitle} img={img}/>
            <button type="button"onClick={() => handleChangeFavorite(id)}>{isInFavorite ? <GoHeartFill /> : <GoHeart />}</button>
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

