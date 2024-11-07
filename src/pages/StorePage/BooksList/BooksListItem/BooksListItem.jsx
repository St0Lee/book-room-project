import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BuyButton } from "../../../../common/components/BuyButton/BuyButton";

export const BooksListItem = ({id, title, price, subtitle, img}) => {

    return(
        <li>
            <Link to={`/books/${id}`}>
                <h2>{title}</h2>
                <img src={img} alt={title}/>
            </Link>
            <h3>{subtitle}</h3>
            <p>{price}</p>
            <BuyButton id={id} title={title} price={price} subtitle={subtitle} img={img}/>
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

