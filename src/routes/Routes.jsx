import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main";
import { Children } from "react";
import Header from "../component/Header";
import Login from "../component/chef/Login";

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
            }
        ]
    },

])

export default router;