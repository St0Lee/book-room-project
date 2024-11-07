import { useParams } from "react-router-dom";
import allBooks from "../../common/data/books.json"
import { BuyButton } from "../../common/components/BuyButton/BuyButton";

export const SingleBookPage = () => {

    const {id} = useParams()

    const {title, price, subtitle, img} = allBooks.find((value) => value.id === id)

    return(
        <>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{subtitle}</p>
            <img src={img} alt={title}/>
            <BuyButton id={id} title={title} price={price} subtitle={subtitle} img={img}/>            
        </>
        )
 };
    