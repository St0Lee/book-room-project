import { Filters } from "../../components/Filters/Filters"
import { BooksList } from "./BooksList/BooksList"

export const StorePage = () => {
    return (
        <div>  
            <Filters />
            <BooksList />
        </div>
    )
}