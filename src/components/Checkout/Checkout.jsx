import * as SC from "./Checkout.styled"

export const Checkout = ({name, surname, phone, email, cityName, handleOnChange}) => {
    
    return(
        <SC.Wrap>
            <SC.Form>
                    <input type="string" value={name} name="name" onChange={handleOnChange}/>
                    <input type="string" value={surname} name="surname" onChange={handleOnChange}/>
                    <input type="string" value={phone} name="phone" onChange={handleOnChange}/>
                    <input type="email" value={email} name="email" onChange={handleOnChange}/>
                    <input type="string" value={cityName} name="cityName" onChange={handleOnChange}/>
            </SC.Form>
            <SC.Text>
                Коментар до замовлення
                <textarea name="comment" rows={4} cols={20} placeholder="Додайте ваш коментар"/>
            </SC.Text>
        </SC.Wrap>
    )
};