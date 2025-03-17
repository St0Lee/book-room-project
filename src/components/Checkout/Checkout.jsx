import { useEffect, useRef } from "react";
import * as SC from "./Checkout.styled";

import { useSelector } from "react-redux";
import { getCarts } from "../../redux/cart/cart-slice";
import { useAddOrderMutation } from "../../redux/orderOperations/orderOperations";

export const Checkout = ({ name, surname, phone, email, comment, cityName, warehouseName, warehouses, cities, showDropdown, handleOnChange, handleSelectCity, handleSelectWarehouse, setShowDropdown, showWarehouseDropdown, setShowWarehouseDropdown }) => {
    const books = useSelector(getCarts);

    const [addOrder] = useAddOrderMutation();

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
                setShowWarehouseDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowDropdown, setShowWarehouseDropdown]);

    const handleSubmit = async(e) => {
        e.preventDefault()
        await addOrder({ name, surname, phone, email, cityName, warehouseName, comment, order: books})
    } 
    
    return (
        <SC.Wrap>
            <SC.Form onSubmit={handleSubmit}>
                <input type="text" value={name} name="name" onChange={handleOnChange} placeholder="Ім'я"/>
                <input type="text" value={surname} name="surname" onChange={handleOnChange} placeholder="Прізвище"/>
                <input type="text" value={phone} name="phone" onChange={handleOnChange} placeholder="Номер телефону"/>
                <input type="email" value={email} name="email" onChange={handleOnChange} placeholder="Email"/>

                <SC.CitiesListWrap ref={dropdownRef}>
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
                    {showWarehouseDropdown &&warehouseName !== "" && warehouses.length > 0 && (
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
                <SC.Text>
                    Коментар до замовлення
                    <textarea name="comment" onChange={handleOnChange} value={comment} rows={4} cols={20} placeholder="Додайте ваш коментар" />
                </SC.Text>
                <button type="submit" disabled={!name || !surname || !phone}>
                    Замовити
                </button >
            </SC.Form>
            <SC.BookList>
                {books.map(({_id, title, count, imageURL}) => 
                <SC.BookListItem key={_id}>
                    <p>{title}</p>
                    <p>x{count}</p>
                    <img src={imageURL} alt={title} width={40} height={40}/>
                </SC.BookListItem>
            )}
            </SC.BookList>
        </SC.Wrap>
    );
};