import allBooks from "../../../common/data/books.json"
import { BooksListItem } from "./BooksListItem/BooksListItem";

export const BooksList = () => {

    return(
        <ul>
            {allBooks.map(({id, title, price, subtitle, img}) => 
            <BooksListItem key={id} id={id} title={title} price={price} subtitle={subtitle} img={img} />)}
        </ul>
    )
}