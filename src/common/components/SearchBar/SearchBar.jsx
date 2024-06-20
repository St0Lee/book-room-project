// import * as SC from "./SearchBar.styled"

import { useState } from "react"


export const SearchBar = () => {
    const[inputValue, setInputValue] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Input")
    }

    const handleInputChange = ({target:{value}}) => {
        setInputValue(value);
    }

    return(
        <> 
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange}/>
            </form>
        </>
    )
}