import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import categories from "../../../data/categories.json"

export const Categories = () => {

    const [category, setCategory] = useState("Choose a category");
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
            {isCategory && <ul>{categories.map(({id, text}) => <li key={id} onClick={handleChosenCategory}>{text}</li>)}</ul>}
        </div>
    )
}