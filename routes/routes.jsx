
import HomePage from "../src/pages/HomePage.jsx";
import LoginPage from "../src/pages/LoginPage.jsx";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage />,
        errorElement:""
    },
    // {
    //     path:"/login",
    //     element: <LoginPage />,
    //     errorElement:""
    // }
])
