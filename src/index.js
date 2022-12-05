import React from "react"
import ReactDOM from "react-dom/client"
import "./App.css"
// import Register from "./components/Register/Register"
import VerifyEmailOtp from "./components/Otp/VerifyEmailOtp"
import VerifyPhoneOtp from "./components/Otp/VerifyPhoneOtp"
import Dashboard from "./components/Dashboard/Dashboard"
import Assignment from "./components/Budget/Budget"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
   <Assignment />
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
