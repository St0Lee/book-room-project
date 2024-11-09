import { HomePage } from "../../pages/HomePage/HomePage";
import { StorePage } from "../../pages/StorePage/StorePage";
import { SingleBookPage } from "../../pages/SingleBookPage/SingleBookPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { Contacts } from "../../pages/ContactsPage/ContactsPage";
import { AboutUsPage } from "../../pages/AboutUsPage/AboutUsPage";
import { ReturnPolicy } from "../../pages/ReturnPolicy/ReturnPolicy";

import { Layout } from "../../components/Layout/Layout";
import { ConfidentialityPolicy } from "../../pages/ConfidentialityPolicy/ConfidentialityPolicy";

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
        },
        {
            element: <Contacts />,
            path: "/contacts"
        },
        {
            element: <ReturnPolicy />,
            path: "/return-policy"
        },
        {
            element: <ConfidentialityPolicy />,
            path: "/confidentiality-policy"
        },
        {
        element: <AboutUsPage />,
            path: "/about-us"},
        {
        element: <NotFoundPage />,
            path: "*"}]
    }
];