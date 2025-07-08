import * as SC from "./NovaPostOptions.styled"

export const NovaPostOptions = ({dropdownRef, cityName, handleOnChange, warehouseName, showDropdown, warehouses, cities, showWarehouseDropdown, handleSelectCity, handleSelectWarehouse}) => {
    
    return <SC.CitiesListWrap ref={dropdownRef}>
            <input 
                type="text" 
                value={cityName} 
                name="cityName" 
                onChange={handleOnChange} 
                placeholder="Місто"
            />
            <input 
                type="text" 
                value={warehouseName} 
                name="warehouseName" 
                onChange={handleOnChange} 
                placeholder="Відділення"
            />
            
            {showDropdown && cityName !== "" && cities.length > 0 && (
                <SC.CitiesList>
                    {cities.map(city => (
                        <li 
                            key={city.Ref} 
                            onClick={() => handleSelectCity(city.Description)}
                        >
                            {city.Description}
                        </li>
                    ))}
                </SC.CitiesList>
            )}
            {showWarehouseDropdown && warehouseName !== "" && warehouses.length > 0 && (
                <SC.WarehousesList>
                    {warehouses.map(warehouse => (
                        <li 
                            key={warehouse.Ref} 
                            onClick={() => handleSelectWarehouse(warehouse.Description)}
                        >
                            {warehouse.Description}
                        </li>
                    ))}
                </SC.WarehousesList>
            )}
    </SC.CitiesListWrap>
}