import { BooksListItem } from "./BooksListItem/BooksListItem";
// import { useGetBooksQuery } from "../../../redux/bookOperations/bookOperations";

import PropTypes from "prop-types"

import * as SC from "./booksList.styled"

export const BooksList = ({data, selectedCategory, selectedMinPrice, selectedMaxPrice}) => {
    
    const filteredBooks = data?.result?.filter((book) => {
        const matchesCategory = selectedCategory ? book.category.includes(selectedCategory) : true;
        const matchesMinPrice = selectedMinPrice ? book.price >= selectedMinPrice : true;
        const matchesMaxPrice = selectedMaxPrice ? book.price <= selectedMaxPrice : true;
        
        return matchesCategory && matchesMinPrice && matchesMaxPrice;
    });

    return(
        <SC.BooksList>
            {filteredBooks?.map(({_id, title, imageURL, price, category}) => 
            <BooksListItem key={_id} _id={_id} title={title} price={price} category={category} imageURL={imageURL} />)}
        </SC.BooksList>
    )
}

BooksList.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    selectedMinPrice: PropTypes.number.isRequired,
    selectedMaxPrice: PropTypes.number.isRequired,

}