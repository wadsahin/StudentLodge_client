import Root from "../layouts/Root";
import Home from "../pages/Home";

import {
    createBrowserRouter,
  } from "react-router-dom";
import AddMeal from "../pages/meal/AddMeal";
import Checkout from "../pages/payment/Checkout";
import Meals from "../pages/meal/Meals";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import MealDetails from "../pages/meal/MealDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRouter from "./PrivateRouter";


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/meals')
        },
        {
            path: "/meals",
            element: <Meals></Meals>
        },
        {
            path: "/meal/:mealId",
            element: <MealDetails />
        },
        {
            path: "/add-meal",
            element: <AddMeal></AddMeal>
        },
        {
            path: "/checkout/:pkgname",
            element: <Checkout />
        },
        {
            path: "/auth/signup",
            element: <Signup></Signup>
        },
        {
            path: "/auth/login",
            element: <Login></Login>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRouter><DashboardLayout /></PrivateRouter>,
      children: [
        {
          path: "/dashboard",
        }
      ]
    }
  ]);

  export default router;