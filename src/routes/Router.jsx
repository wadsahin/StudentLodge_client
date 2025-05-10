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
import MyProfile from "../pages/dashboard/user_dashboard/MyProfile";
import MyReviews from "../pages/dashboard/user_dashboard/MyReviews";
import RequestedMeals from "../pages/dashboard/user_dashboard/RequestedMeals";
import PaymentHistory from "../pages/dashboard/user_dashboard/PaymentHistory";
import AdminProifile from "../pages/dashboard/admin_dashboard/AdminProifile";
import UpcomingMeals from "../pages/dashboard/admin_dashboard/UpcomingMeals";
import AllReviews from "../pages/dashboard/admin_dashboard/AllReviews";
import ServeMeals from "../pages/dashboard/admin_dashboard/ServeMeals";
import AllMeals from "../pages/dashboard/admin_dashboard/AllMeals";
import ManageUsers from "../pages/dashboard/admin_dashboard/ManageUsers";



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
      // admin routes
      {
        path: "/dashboard/admin-profile",
        element: <AdminProifile />,
        loader: () => fetch("http://localhost:5000/meals"),
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />
      },
      {
        path: "/dashboard/all-meals",
        element: <AllMeals />
      },
      {
        path: "/dashboard/serve-meals",
        element: <ServeMeals />
      },
      {
        path: "/dashboard/all-reviews",
        element: <AllReviews />
      },
      {
        path: "/dashboard/upcoming-meals",
        element: <UpcomingMeals />
      },
      // User routes
      {
        path: "/dashboard/my-profile",
        element: <MyProfile />
      },
      {
        path: "/dashboard/my-reviews",
        element: <MyReviews />
      },
      {
        path: "/dashboard/requested-meals",
        element: <RequestedMeals />
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />
      },
    ]
  }
]);

export default router;