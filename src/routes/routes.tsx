import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import ProductList from "../components/product-list";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:'list/:category',
            element:<ProductList />
        }
      ]
    },
    
  ]);