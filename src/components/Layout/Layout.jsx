import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"


export const Layout = () => {
    return (
        <>
            <Header />
            <div style={{padding: "10px"}}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}