import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main";
import { Children } from "react";
import Header from "../component/Header";
import Register from "../component/Register";
import Login from "../component/Login";
import ChefDetails from "../component/ChefDetails";
import Blog from "../component/Blog";

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
                element:<Blog></Blog>
            }
        ]
    },

])

export default router;