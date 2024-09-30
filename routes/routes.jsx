
import HomePage from "../src/pages/HomePage.jsx";
import LoginPage from "../src/pages/LoginPage.jsx";
import {createBrowserRouter} from "react-router-dom";
import AboutUsPage from "../src/pages/AboutUsPage.jsx";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage />,
        errorElement:""
    },{
        path: "/aboutUs",
        element: <AboutUsPage />,
        errorElement: ""
    }
    // {
    //     path:"/login",
    //     element: <LoginPage />,
    //     errorElement:""
    // }
])
