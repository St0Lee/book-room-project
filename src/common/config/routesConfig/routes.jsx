import { HomePage } from "../../../pages/HomePage/HomePage";
import { StorePage } from "../../../pages/StorePage/StorePage";
import { SingleBookPage } from "../../../pages/SingleBookPage/SingleBookPage";

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
            },
        {
            element: <SingleBookPage />,
            path: "/books/:id",
        }]       
    }
];