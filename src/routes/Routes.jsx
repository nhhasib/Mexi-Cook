import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main";
import { Children } from "react";
import Header from "../component/Header";
import Register from "../component/Register";
import Login from "../component/Login";
import ChefDetails from "../component/ChefDetails";
import Blog from "../component/Blog";
import PrivateRoutes from "../component/privateRoute/PrivateRoutes";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Header></Header>,
        children:[
            {
                path:"/",
                element:<Main></Main>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/chef/:id",
                element:<ChefDetails></ChefDetails>
            },
            {
                path:"/blog",
                element:<PrivateRoutes><Blog></Blog></PrivateRoutes>
            }
        ]
    },

])

export default router;