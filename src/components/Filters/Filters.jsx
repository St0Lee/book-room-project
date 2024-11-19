import { SearchBar } from "./SearchBar/SearchBar"
import { Price } from "./Price/Price"
import { Categories } from "./Categories/Categories"

import * as SC from "./filters.styled"

export const Filters = () => {

    return(
    <SC.Filters>  
        <Price />
        <SearchBar />
        <Categories />
    </SC.Filters>
)

}