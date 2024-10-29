import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./page/category/Category.jsx";
import Items from "./page/Items/Items.jsx";
import Suppliers from "./page/Suppliers/Suppliers.jsx";
import Customers from "./page/Customers/Customers.jsx";
import Stock from "./page/Stock/Stock.jsx";
import SaleOrder from "./page/Sale Order/SaleOrder.jsx";
import Reports from "./page/Reports/Reports.jsx";
import ManageWebsite from "./page/ManageWebsite/ManageWebsite.jsx";
import DashBoard from "./page/Dashboard/Dashboard.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/items",
        element: <Items></Items>,
      },
      {
        path: "/supplier",
        element: <Suppliers></Suppliers>,
      },
      {
        path: "/customers",
        element: <Customers></Customers>,
      },
      {
        path: "/stock",
        element: <Stock></Stock>,
      },
      {
        path: "/saleorder",
        element: <SaleOrder></SaleOrder>,
      },
      {
        path: "/reports",
        element: <Reports></Reports>,
      },
      {
        path: "/managewebsite",
        element: <ManageWebsite></ManageWebsite>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
