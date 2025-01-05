import * as SC from "./categoriesItem.styled"

export const CategoriesItem = ({categoryItem, onHandleChosenCategory}) => {
     
    return( 
                <SC.Item onClick={onHandleChosenCategory}>
                    {categoryItem}
                </SC.Item>
    )
};