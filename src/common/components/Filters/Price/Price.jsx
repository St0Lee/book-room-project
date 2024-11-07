import { useState } from "react"

export const Price = () => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)

    const handleInput = (e) => {
        e.target.name === "Min" ? setMinPrice(e.target.value) : setMaxPrice(e.target.value)
    }
    
    return(
        <div>
            <input name="Min" type="text" value={minPrice} onChange={handleInput}/>
            <input name="Max" type="text" value={maxPrice} onChange={handleInput}/>
        </div>
    )
};