export const Checkout = ({name, surname, phone, email, handleOnChange}) => {
    
    return(
        <>
            <form>
                    <input type="string" value={name} name="name" onChange={handleOnChange}/>
                    <input type="string" value={surname} name="surname" onChange={handleOnChange}/>
                    <input type="string" value={phone} name="phone" onChange={handleOnChange}/>
                    <input type="email" value={email} name="email" onChange={handleOnChange}/>
            </form>
            <form>
                    <input type="string" value={name} name="name" onChange={handleOnChange}/>
                    <input type="string" value={surname} name="surname" onChange={handleOnChange}/>
                    <input type="string" value={phone} name="phone" onChange={handleOnChange}/>
            </form>
        </>
    )
}