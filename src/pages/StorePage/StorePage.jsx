import { Filters } from "../../common/components/Filters/Filters"
import { BooksList } from "./BooksList/BooksList"

export const StorePage = () => {
    return (
        <div>  
            <Filters />
            <BooksList />
        </div>
    )
}