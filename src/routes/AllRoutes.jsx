import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import Home from "../pages/Home";
const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
        {   index: true,
            element: <Home/>
        },
        // {
        //     path: "/products",
        //     element: <Products />

        // }
    ],
  },
]);

export const Routes=()=>{
    return <RouterProvider router={AllRoutes}> </RouterProvider>
} 