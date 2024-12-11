import { useState } from "react"
import { Filters } from "../../components/Filters/Filters"
import { BooksList } from "./BooksList/BooksList"
import background from "../../common/images/books-1655783_1920.jpg"

import * as SC from "./homePage.styled"

export const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedMinPrice, setSelectedMinPrice] = useState(0);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(1000);

    return(
        <SC.Container>
            <SC.Img src={background}/>
            <SC.StoreWrap>  
                <Filters onCategorySelect={setSelectedCategory} onMinPriceSelect={setSelectedMinPrice} onMaxPriceSelect={setSelectedMaxPrice}/>
                <BooksList selectedCategory={selectedCategory} selectedMinPrice={selectedMinPrice} selectedMaxPrice={selectedMaxPrice} />
            </SC.StoreWrap>
        </SC.Container>
    )
}

