import { useState } from "react"
import { Filters } from "../../components/Filters/Filters"
import { BooksList } from "./BooksList/BooksList"

import * as SC from "./homePage.styled"
import { useGetBooksQuery } from "../../redux/bookOperations/bookOperations"

export const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedMinPrice, setSelectedMinPrice] = useState(0);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(1000);
    const [keyword, setKeyword] = useState("")

    const handleSearch = (e) => {
        setKeyword(e.target.value)
    }

    const {data} = useGetBooksQuery(keyword ? keyword : null);

    return(
        <SC.Container>
            <SC.Background>
            </SC.Background>
            <SC.StoreWrap>  
                <Filters keyword={keyword} onHandleSearch={handleSearch} onCategorySelect={setSelectedCategory} onMinPriceSelect={setSelectedMinPrice} onMaxPriceSelect={setSelectedMaxPrice}/>
                <BooksList data={data} selectedCategory={selectedCategory} selectedMinPrice={selectedMinPrice} selectedMaxPrice={selectedMaxPrice} />
            </SC.StoreWrap>
        </SC.Container>
    )
}

