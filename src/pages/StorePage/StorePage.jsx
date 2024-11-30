import { useState } from "react"
import { Filters } from "../../components/Filters/Filters"
import { BooksList } from "./BooksList/BooksList"

import * as SC from "./storePage.styled"

export const StorePage = () => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedMinPrice, setSelectedMinPrice] = useState(0);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(1000);

    return(
        <SC.Wrap>  
            <Filters onCategorySelect={setSelectedCategory} onMinPriceSelect={setSelectedMinPrice} onMaxPriceSelect={setSelectedMaxPrice}/>
            <BooksList selectedCategory={selectedCategory} selectedMinPrice={selectedMinPrice} selectedMaxPrice={selectedMaxPrice} />
        </SC.Wrap>
    )
}