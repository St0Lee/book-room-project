import { useState } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { NovaPostOptions } from "./NovaPostOptions/NovaPostOptions";
import { UkrPostOptions } from "./UkrPostOptions/UkrPostOptions"
 
export const DeliveryOption = ({dropdownRef, cityName, handleOnChange, warehouseName, showDropdown, warehouses, cities, showWarehouseDropdown, handleSelectCity, handleSelectWarehouse}) => {
   const [postOption, setPostOption] = useState("Оберіть спосіб доставки")
   const [isPostOption, setIsPostOption] = useState(false)
   const allOptions = ["Нова Пошта", "УкрПошта"];

    const handleShowPostOption = () => {
        setIsPostOption(!isPostOption) 
    }

    const handleSetPostOption = (e) => {
        setPostOption(e.target.innerText)
        handleShowPostOption()
    }

    const filteredOptions = allOptions.filter(option => option !== postOption);

    return <>
        <div onClick={handleShowPostOption}>{postOption} {isPostOption ? <FaArrowDown/> : <FaArrowUp/>}</div>
            {isPostOption && (
        <div>
          {filteredOptions.map(option => (
            <div key={option} onClick={handleSetPostOption} style={{ cursor: "pointer" }}>
              {option}
            </div>
          ))}
        </div>
      )}
        {postOption === "Нова Пошта" && <NovaPostOptions 
            dropdownRef={dropdownRef} 
                cityName={cityName} 
                handleOnChange={handleOnChange} 
                warehouseName={warehouseName} 
                showDropdown={showDropdown} 
                warehouses={warehouses} 
                cities={cities}
                showWarehouseDropdown={showWarehouseDropdown}
                handleSelectCity={handleSelectCity}
                handleSelectWarehouse={handleSelectWarehouse}
        />}
        {postOption === "УкрПошта" && <UkrPostOptions/>}
    </>
}