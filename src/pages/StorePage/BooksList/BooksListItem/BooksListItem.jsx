import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoHeart, GoHeartFill } from "react-icons/go";
import PropTypes from "prop-types";

import { BuyButton } from "../../../../components/BuyButton/BuyButton";

import { getFavorite, removeFromFavorite, setToFavorite  } from "../../../../redux/favorite/favorite-slice";


export const BooksListItem = ({_id, title, imageURL, price, category }) => {

    const dispatch = useDispatch();
    const favoriteItem = useSelector(getFavorite)

    const isInFavorite = favoriteItem.find((favorite) => favorite._id === _id)
    
    const handleChangeFavorite = (_id) => {
        {isInFavorite ? dispatch(removeFromFavorite(_id)) : dispatch(setToFavorite({_id, title, price, category, imageURL}))  }
    }

    return(
        <li>
            <Link to={`/books/${_id}`}>
                <h2>{title}</h2>
                <img width="300px" height="400px" src={imageURL} alt={title}/>
            </Link>
            {category.map((value) => <h3 key={value}>{value}</h3>) }
            <p>{price}</p>
            <BuyButton _id={_id} title={title} price={price} category ={category} imageURL={imageURL}/>
            <button type="button"onClick={() => handleChangeFavorite(_id)}>{isInFavorite ? <GoHeartFill /> : <GoHeart />}</button>
        </li>
)
}

BooksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired,
    imageURL: PropTypes.string.isRequired,
};

BooksListItem.defaultProps = {
    subtitle: "",
};

