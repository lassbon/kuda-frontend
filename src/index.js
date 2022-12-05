import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css"
import HomePage from "./components/pages/HomePage/HomePage";
import Pay from "./components/pages/Pay/Sendmoney";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Invest from "./components/pages/Invest/Invest";
import Budget from "./components/pages/Budget/Budget";


const router = createBrowserRouter([
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

