import { useState } from "react"
import PropTypes from "prop-types"

import * as SC from "./price.styled"


export const Price = ({bookPrice, onMinPriceSelect, onMaxPriceSelect}) => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)

    // const minAmount = Math.min(...(bookPrice || [0]));
    // const maxAmount = Math.max(...(bookPrice || [0]));

    const handleInput = (e) => {
        const { name, value } = e.target;
        // e.target.name === "Min" ? setMinPrice(e.target.value) : setMaxPrice(e.target.value) converted numbers to string so filter worked not as intended
        const numericValue = Number(value);

        if (name === "Min") {
            setMinPrice(numericValue);
            onMinPriceSelect(numericValue);
        } else if (name === "Max") {
            setMaxPrice(numericValue);
            onMaxPriceSelect(numericValue);
        }
    }

    return(
        <SC.Wrap>
            <SC.Text>Від:</SC.Text>
            <SC.Input name="Min" type="text" value={minPrice} onChange={handleInput}/>
            <SC.Text>До:</SC.Text>     
            <SC.Input name="Max" type="text" value={maxPrice} onChange={handleInput}/>
        </SC.Wrap>
    )
};

Price.propTypes = {
    bookPrice: PropTypes.array,
    onMinPriceSelect: PropTypes.func.isRequired,
    onMaxPriceSelect: PropTypes.func.isRequired
}