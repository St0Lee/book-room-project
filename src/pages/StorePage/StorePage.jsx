import { Filters } from "../../components/Filters/Filters"
import { BooksList } from "./BooksList/BooksList"

import * as SC from "./storePage.styled"

export const StorePage = () => {
    return (
        <SC.Wrap>  
            <Filters />
            <BooksList />
        </SC.Wrap>
    )
}