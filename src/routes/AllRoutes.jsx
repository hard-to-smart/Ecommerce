import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import { fetchAPI } from "../loaders/AllLoader";
import { getBlogs, getFeaturedProducts, getProducts } from "../constants/apiUrls";
import Blogs from "../pages/Blogs";
const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
        {   index: true,
            element: <Home/>,
            loader: ()=>{
              return fetchAPI(getFeaturedProducts)
              }        
            },
        {
            path: "/products",
            element: <Products/>,
            loader: ()=>{
            return fetchAPI(getProducts)
            }
            
        },
        {
          path: "/blog",
          children:[
            {
              index:true,
              element: <Blogs/>,
              loader:()=>{
                return fetchAPI(getBlogs)
                }
            },
            
          ]
        }
    ],
  },
]);

export const Routes=()=>{
    return <RouterProvider router={AllRoutes}> </RouterProvider>
} 