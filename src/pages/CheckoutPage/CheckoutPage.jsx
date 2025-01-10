import { useState } from "react"
import { Checkout } from "../../components/Checkout/Checkout"

export const CheckoutPage = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    
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
            default: 
                return
        }
    }


    return(
        <>
            <Checkout name={name} surname={surname} phone={phone} email={email} handleOnChange={handleOnChange}/>
        </>
    )
}