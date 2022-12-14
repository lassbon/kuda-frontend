import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter as Router,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./components/pages/HomePage/HomePage";
import Pay from "./components/pages/Pay/Sendmoney";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Invest from "./components/pages/Invest/Invest";
import Budget from "./components/pages/Budget/Budget";
import Card from "./components/pages/Card/Card";
import Account from "./components/pages/Account/AccountDashboard";
import Referrals from "./components/pages/Referrals/Referrals";
import UpdateTransactionPin from "./components/pages/UpdateTransactionPin/UpdateTransactionPin";
import VerifyEmailOtp from "./components/pages/Otp/VerifyEmailOtp";
import VerifyPhoneOtp from "./components/pages/Otp/VerifyPhoneOtp";

const router = Router(
  [
  {
    path: "/",
    element: <HomePage />,
    errorElement:<PageNotFound />
  },
  {
    path: "/send-money",
    element: <Pay />,
    errorElement:<PageNotFound />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement:<PageNotFound />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement:<PageNotFound />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement:<PageNotFound />
  },
  {
    path: "/invest",
    element: <Invest />,
    errorElement:<PageNotFound />
  },
  {
    path: "/budget",
    element: <Budget />,
    errorElement:<PageNotFound />
  },
  {
    path: "/card",
    element: <Card />,
    errorElement:<PageNotFound />
  },
  {
    path: "/account",
    element: <Account />,
    errorElement:<PageNotFound />
  },
  {
    path: "/referrals",
    element: <Referrals />,
    errorElement:<PageNotFound />
  },
  {
    path: "/update-pin",
    element: <UpdateTransactionPin />,
    errorElement:<PageNotFound />
  },
  {
    path: "/register/verify-otp",
    element: <VerifyEmailOtp />,
    errorElement:<PageNotFound />
  },

  {
    path: "/register/verify-phone-otp",
    element: <VerifyPhoneOtp />,
    errorElement:<PageNotFound />
  }


  

  ]
 
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

