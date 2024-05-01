import { HomePage } from "../../../pages/HomePage/HomePage";
import { StorePage } from "../../../pages/StorePage/StorePage";
import { Layout } from "../../components/Layout/Layout";

export const routes = [
{
    element: <Layout />,
    path: "/",
    children:
        [{
            element: <HomePage />,
            path: "/"
        },
        {
            element: <StorePage />,
            path: "/store",
            }]
    }
]