import { SearchBar } from "./SearchBar/SearchBar"
import { Price } from "./Price/Price"
import { Categories } from "./Categories/Categories"
import { useGetBooksQuery } from "../../redux/bookOperations/bookOperations";

import PropTypes from "prop-types"

import * as SC from "./filters.styled"

export const Filters = ({onCategorySelect, onMinPriceSelect, onMaxPriceSelect}) => {

    const {data} = useGetBooksQuery();

    const allCategories = data?.result?.flatMap(({ category }) => category);
    const uniqueCategories = [...new Set(allCategories)];

    const bookPrice = data?.result?.map(({price}) => price) 

    return(
    <SC.Filters>  
        <Price onMinPriceSelect={onMinPriceSelect} onMaxPriceSelect={onMaxPriceSelect} bookPrice={bookPrice} />
        <SearchBar />
        <Categories onCategorySelect={onCategorySelect} categoryItem={uniqueCategories}/>
    </SC.Filters>
)};

Filters.propTypes = {
    onCategorySelect: PropTypes.func.isRequired,
    onMinPriceSelect: PropTypes.func.isRequired,
    onMaxPriceSelect: PropTypes.func.isRequired
}