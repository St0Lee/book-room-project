import { useState } from "react";
import { Checkout } from "../../components/Checkout/Checkout";
import { useGetByCityNameMutation, useGetWarehousesMutation } from "../../redux/NovaPostOperations/novaPostOperations";

export const CheckoutPage = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [cityName, setCityName] = useState("");
    const [comment, setComment] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [warehouseName, setWarehouseName] = useState("");
    const [showWarehouseDropdown, setShowWarehouseDropdown] = useState(false);


    const [getCities, { data }] = useGetByCityNameMutation();
    const [getWarehouses, { data: warehouses }] = useGetWarehousesMutation();

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
            case "warehouseName":
                setWarehouseName(value);
                getWarehouses(value);
                setShowWarehouseDropdown(true);
                return;
            default:
                return;
        }
    };

    const handleSelectCity = (selectedCity) => {
        setCityName(selectedCity);
        setShowDropdown(false);
    };

    const handleSelectWarehouse = (selectedWarehouse) => {
        setWarehouseName(selectedWarehouse);
        setShowWarehouseDropdown(false);
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
            warehouseName={warehouseName}
            warehouses={warehouses?.data || []}
            showWarehouseDropdown={showWarehouseDropdown}
            showDropdown={showDropdown}
            handleOnChange={handleOnChange} 
            handleSelectCity={handleSelectCity}
            handleSelectWarehouse={handleSelectWarehouse}
            setShowDropdown={setShowDropdown}
            setShowWarehouseDropdown={setShowWarehouseDropdown}
        />
    );
};
