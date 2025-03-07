import { useState } from "react";
import { Checkout } from "../../components/Checkout/Checkout";
import { useGetByCityNameMutation } from "../../redux/novaPostOperations/novaPostOperations";

export const CheckoutPage = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [cityName, setCityName] = useState("");
    const [comment, setComment] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const [getCities, { data }] = useGetByCityNameMutation();

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case "name":
                setName(value);
                return;
            case "surname":
                setSurname(value);
                return;
            case "phone":
                setPhone(value);
                return;
            case "email":
                setEmail(value);
                return;
            case "comment":
                setComment(value);
                return;
            case "cityName":
                setCityName(value);
                getCities(value);
                setShowDropdown(true);
                return;
            default:
                return;
        }
    };

    const handleSelectCity = (selectedCity) => {
        setCityName(selectedCity);
        setShowDropdown(false);
    };

    return (
        <Checkout 
            name={name} 
            surname={surname} 
            phone={phone} 
            email={email} 
            cityName={cityName} 
            comment={comment}
            cities={data?.data || []} 
            showDropdown={showDropdown}
            handleOnChange={handleOnChange} 
            handleSelectCity={handleSelectCity}
            setShowDropdown={setShowDropdown}
        />
    );
};
