import { useState } from "react"
import { Checkout } from "../../components/Checkout/Checkout"
import { useGetByCityNameMutation } from "../../redux/NovaPostOperations/novaPostOperations"

export const CheckoutPage = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [cityName, setCityName] = useState("")

    const [getCities] = useGetByCityNameMutation();

    const handleOnChange = (e) => {
        const {value, name} = e.target
        switch(name){
            case "name": 
                setName(value)
                return
            case "surname": 
            setSurname(value)
                return
            case "phone": 
            setPhone(value)
                return
            case "email": 
                setEmail(value)
                return
            case "cityName":
                setCityName(value)
                getCities(value)
            default: 
                return
        }
    }


    return(
        <>
            <Checkout name={name} surname={surname} phone={phone} email={email} cityName={cityName} handleOnChange={handleOnChange}/>
        </>
    )
}