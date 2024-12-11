import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import * as SC from "./categories.styled"

import PropTypes from "prop-types"

export const Categories = ({categoryItem, onCategorySelect}) => {

    const [category, setCategory] = useState("Оберіть категорію");
    const [isCategory, setIsCategory] = useState(false);

    const handleOpenCategory = () => {
        setIsCategory(!isCategory)
    }

    const handleChosenCategory = (e) => {
        const selectedCategory = e.target.innerText;
        setCategory(selectedCategory)
        onCategorySelect(selectedCategory) 
    }

    const handleShowAll = () => {
        setCategory("Оберіть категорію");
        onCategorySelect("");
    };

    return(
        <SC.Wrap onClick={handleOpenCategory}>
            <SC.Category>{category}</SC.Category>
            {isCategory ? <FaArrowUp size={20}/> : <FaArrowDown size={20}/>}
            {isCategory && <SC.List>
                    <li onClick={handleShowAll}>
                        Усі категорії
                    </li>
                    {categoryItem?.map((value, i) => (
                        <li key={i} onClick={handleChosenCategory}>
                            {value}
                        </li>
                    ))}
                </SC.List>}
        </SC.Wrap>
    )
};

Categories.propTypes = {
    categoryItem: PropTypes.array.isRequired,
    onCategorySelect: PropTypes.func.isRequired,
};
