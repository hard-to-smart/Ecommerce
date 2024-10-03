import {createBrowserRouter,RouterProvider } from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import { fetchAPI } from "../loaders/AllLoader";
import { getBlogs, getFeaturedProducts, getProducts } from "../constants/apiUrls";
import Blogs from "../pages/Blogs";
import Cart from "../pages/Cart";
import SingleBlog from "../pages/SingleBlog";
import SingleProduct from "../pages/SingleProduct";
import Spinner from "../components/Spinner";

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
            path: "product",
            children:[
            {
              index:true,
              element: <Products/>,
              loader: ()=>{
                return fetchAPI(getProducts)
                }
            },
            {
              path:':id',
              element: <SingleProduct/>,
            }
          ],
            
        },
        {
          path: "blog",
          children:[
            {
              index:true,
              element: <Blogs/>,
              loader:()=>{
                return fetchAPI(getBlogs)
                }
            },
            {
              path:':id',
              element: <SingleBlog/>,
              loader:()=>{
                return fetchAPI(getBlogs)
                }
            }
            
          ]
        },
        {
          path:'/cart',
          element:<Cart/>
        }
    ],
  },
]);

export const Routes=()=>{
    return <RouterProvider router={AllRoutes} fallbackElement={<Spinner/>}> </RouterProvider>
} 