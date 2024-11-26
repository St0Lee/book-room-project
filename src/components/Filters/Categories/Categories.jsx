import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import PropTypes from "prop-types"

export const Categories = ({categoryItem}) => {

    const [category, setCategory] = useState("Оберіть категорію");
    const [isCategory, setIsCategory] = useState(false);

    const handleOpenCategory = () => {
        setIsCategory(!isCategory)
    }

    const handleChosenCategory = (e) => {
        setCategory(e.target.innerText)
    }

    return(
        <div onClick={handleOpenCategory}>
            <p>{category}</p>
            {isCategory ? <FaArrowUp size={20}/> : <FaArrowDown size={20}/>}
            {isCategory && <ul>{categoryItem?.map((value, i) => <li key={i} onClick={handleChosenCategory}>{value}</li>)}</ul>}
        </div>
    )
};

Categories.propTypes = {
    categoryItem: PropTypes.array.isRequired,
};
