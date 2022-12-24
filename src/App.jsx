import { useState } from "react"
import {BlurContextProvider} from './components/context/ContextBlur'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./components/pages/HomePage/HomePage"
import Pay from "./components/pages/Pay/Sendmoney"
import Register from "./components/pages/Register/Register"
import Login from "./components/pages/Login/Login"
import PageNotFound from "./components/pages/PageNotFound/PageNotFound"
import Dashboard from "./components/pages/Dashboard/Dashboard"
import Invest from "./components/pages/Invest/Invest"
import Budget from "./components/pages/Budget/Budget"
import Card from "./components/pages/Card/Card"
import Account from "./components/pages/Account/AccountDashboard"
import Referrals from "./components/pages/Referrals/Referrals"
import UpdateTransactionPin from "./components/pages/UpdateTransactionPin/UpdateTransactionPin"
import VerifyEmailOtp from "./components/pages/Otp/VerifyEmailOtp"
import VerifyPhoneOtp from "./components/pages/Otp/VerifyPhoneOtp";
import Faqs from "./components/pages/Faqs/Faqs"
import ProfilePage from './components/pages/Profile/ProfilePage'
import Legal from './components/pages/Legal/Legal'
import AccountStatement from './components/pages/Statement/AccountStatement'
import {Routes, Route} from 'react-router-dom'
// import {
//   createBrowserRouter as Router,
//   RouterProvider,
//   Route,
// } from "react-router-dom"

function App() {
  const [isToggled, setIsToggled] = useState(true)
  return (
    <>
    <ToastContainer />
      <Routes>
      <Route component={<PageNotFound />} path='*' />
        <Route element={<HomePage />} path='/' />
        <Route component={<Pay />} path='/send-money' />
        <Route component={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<Dashboard active={isToggled} inactive={()=>setIsToggled(!isToggled)} />} path='/dashboard' />
        <Route component={<Invest />} path='/invest' />
        <Route component={<Budget />} path='/budget' />
        <Route component={<Card />} path='/card' />
        <Route element={<Account active={isToggled} inactive={()=>setIsToggled(!isToggled)} />} path='/account' />
        <Route component={<Referrals />} path='/refferals' />
        <Route component={<UpdateTransactionPin />} path='/update-pin' />
        <Route component={<VerifyEmailOtp />}  path="/register/verify-otp" />
        <Route component={<VerifyPhoneOtp />}  path="/register/verify-phone-otp" />
        <Route component={<Faqs />} path='/faqs' />
        <Route component={<ProfilePage />} path='/profile-page' />
        <Route component={<Legal />} path='/legal' />
        <Route component={<AccountStatement />} path='/account-statement' />
      </Routes>
    </>
  )
}

export default App
