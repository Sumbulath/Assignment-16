import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ProductDetails from "../Pages/ProductDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
    path: "/productdetails/:id",
        element: <ProductDetails/>
     }
  ]);