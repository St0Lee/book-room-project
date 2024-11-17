import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"


export const Layout = () => {
    return (
        <>
            <Header />
            <div style={{padding: "10px", width: "100vw"}}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}