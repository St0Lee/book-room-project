import { useEffect, useRef } from "react";
import * as SC from "./Checkout.styled";

// page freezes sometimes

export const Checkout = ({ name, surname, phone, email, cityName, cities, showDropdown, handleOnChange, handleSelectCity, setShowDropdown }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowDropdown]);

    return (
        <SC.Wrap>
            <SC.Form>
                <input type="text" value={name} name="name" onChange={handleOnChange} placeholder="Ім'я" />
                <input type="text" value={surname} name="surname" onChange={handleOnChange} placeholder="Прізвище" />
                <input type="text" value={phone} name="phone" onChange={handleOnChange} placeholder="Номер телефону" />
                <input type="email" value={email} name="email" onChange={handleOnChange} placeholder="Email" />

                <SC.CitiesListWrap ref={dropdownRef}>
                    <input 
                        type="text" 
                        value={cityName} 
                        name="cityName" 
                        onChange={handleOnChange} 
                        placeholder="Місто" 
                    />
                    
                    {showDropdown && cities.length > 0 && (
                        <SC.CitiesList>
                            {cities.map((city) => (
                                <li 
                                    key={city.Ref} 
                                    onClick={() => handleSelectCity(city.Description)}
                                >
                                    {city.Description}
                                </li>
                            ))}
                        </SC.CitiesList>
                    )}
                </SC.CitiesListWrap>
            </SC.Form>

            <SC.Text>
                Коментар до замовлення
                <textarea name="comment" rows={4} cols={20} placeholder="Додайте ваш коментар" />
            </SC.Text>
        </SC.Wrap>
    );
};

