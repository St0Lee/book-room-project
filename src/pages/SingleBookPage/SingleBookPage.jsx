import { useParams } from "react-router-dom";
import {useGetBookByIdQuery} from "../../redux/bookOperations/bookOperations"
import { BuyButton } from "../../components/BuyButton/BuyButton";

export const SingleBookPage = () => {
    const {id} = useParams();

    const {data} = useGetBookByIdQuery(id);
 
    if(!data) return

    const {title, imageURL, price, category, _id} = data.result;
    
    return(
        <>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <ul>{category.map((value, i) => <li key={i}>{value}</li>)}</ul>
            <img src={imageURL} alt={title}/>
            <BuyButton _id={_id} title={title} price={price} category={category} imageURL={imageURL}/>
        </>
        )
 };
    