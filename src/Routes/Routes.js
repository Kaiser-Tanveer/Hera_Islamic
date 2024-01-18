import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            // {
            //     path: '/logIn',
            //     element: <LogIn />
            // },
            // {
            //     path: '/reg',
            //     element: <Register />
            // },
        ]
    }
]);

export default Router;