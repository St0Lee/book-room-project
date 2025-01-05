import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import { CategoriesItem } from "./CategoriesItem/CategoriesItem";

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
            <SC.Button type="button">
                {isCategory ? <FaArrowUp size={20}/> : <FaArrowDown size={20}/>}
            </SC.Button>
            {isCategory && <ul>
                    <SC.Item onClick={handleShowAll}>
                        Усі категорії
                    </SC.Item>
                    {categoryItem?.map((value, i) => (
                     <CategoriesItem categoryItem={value} key={i} onHandleChosenCategory={handleChosenCategory}/>   
                    ))}
                </ul>}
        </SC.Wrap>
    )
};

Categories.propTypes = {
    categoryItem: PropTypes.array.isRequired,
    onCategorySelect: PropTypes.func.isRequired,
};
