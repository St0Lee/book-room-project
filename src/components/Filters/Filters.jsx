import { SearchBar } from "./SearchBar/SearchBar"
import { Price } from "./Price/Price"
import { Categories } from "./Categories/Categories"
import { useGetBooksQuery } from "../../redux/bookOperations/bookOperations";

import * as SC from "./filters.styled"

export const Filters = () => {

    const {data} = useGetBooksQuery();

    const allCategories = data?.result?.flatMap(({ category }) => category);
    const uniqueCategories = [...new Set(allCategories)];

    return(
    <SC.Filters>  
        <Price />
        <SearchBar />
        <Categories categoryItem={uniqueCategories}/>
    </SC.Filters>
)};