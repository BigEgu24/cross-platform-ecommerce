import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import ProductPage from "./pages/ProductPage/ProductPage";

export const routes = [
    {
      path: "/",
      render: <Homepage />
    },
    {
      path: "/product-page/",
      render: <ProductPage />
    },
    {
      path: "/product-page/",
      render: <ProductPage />
    },
    {
      path: "/product-page/dp/:productID",
      render: <ProductPage />
    }
];