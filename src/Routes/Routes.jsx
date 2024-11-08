import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element:<Home/>,
                loader:()=>fetch('/news.json')
            },
            {
                path:"/news/:id",
                element:<PrivateRoute><NewsDetails/></PrivateRoute>,
                loader:()=>fetch('/news.json')

            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            }
            
        ],
    },
])

export default router;