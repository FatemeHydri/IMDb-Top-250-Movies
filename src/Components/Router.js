import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import SingleItem from "../Pages/SingleItem";
import Search from "../Pages/Search";
import Genre from "../Pages/Genre";
import AllMovie from "../Pages/AllMovie";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/SignIn";
import AllGenre from "../Pages/AllGenre";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/movie/:id",
        element: <SingleItem />,
    },
    {
        path: "/search",
        element: <Search />,
    },
    {
        path: "/genre/:id",
        element: <Genre />,
    },
    {
        path: "/allMovie",
        element: <AllMovie />,
    },
    {
        path: "/allGenre",
        element: <AllGenre />,
    },
    {
        path: "/contactUs",
        element: <ContactUs />,
    },
    {
        path: "/signIn",
        element: <SignIn />,
    },
    {
        path: "*",
        element: <h1>not found</h1>,
    }
]);

export default function Router() {
    return <RouterProvider router={routes} />;
}

