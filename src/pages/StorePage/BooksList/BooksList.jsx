import allBooks from "../../../data/books.json"
import { BooksListItem } from "./BooksListItem/BooksListItem";

import * as SC from "./booksList.styled"

export const BooksList = () => {

    return(
        <SC.BooksList>
            {allBooks.map(({id, title, price, subtitle, img}) => 
            <BooksListItem key={id} id={id} title={title} price={price} subtitle={subtitle} img={img} />)}
        </SC.BooksList>
    )
}