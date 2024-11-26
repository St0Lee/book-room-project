import { BooksListItem } from "./BooksListItem/BooksListItem";
import { useGetBooksQuery } from "../../../redux/bookOperations/bookOperations";

import * as SC from "./booksList.styled"

export const BooksList = () => {
    
    const {data} = useGetBooksQuery();

    return(
        <SC.BooksList>
            {data?.result?.map(({_id, title, imageURL, price, category }) => 
            <BooksListItem key={_id} _id={_id} title={title} price={price} category={category} imageURL={imageURL} />)}
        </SC.BooksList>
    )
}