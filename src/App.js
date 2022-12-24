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
import VerifyPhoneOtp from "./components/pages/Otp/VerifyPhoneOtp"

import { Routes, Route } from "react-router-dom"
import PrivateRoutes from "./utils/PrivateRoutes"
function App() {
  return (
    <div>
        <Routes>
          <Route component={<PrivateRoutes />}>
            <Route component={<Dashboard />} path='/dashboard' />
            <Route component={<Invest />} path='/invest' />
            <Route component={<Budget />} path='/budget' />
            <Route component={<Card />} path='/card' />
            <Route component={<Account />} path='/account' />
            <Route component={<Referrals />} path='/refferals' />
            <Route component={<Pay />} path='/send-money' />
            <Route component={<UpdateTransactionPin />} path='/update-pin' />
          </Route>
          <Route component={<HomePage />} path='/' />
          <Route component={<Register />} path='/register' />
          <Route component={<Login />} path='/login' />
          <Route component={<VerifyEmailOtp />} path='/register/verify-otp' />
          <Route element={<PageNotFound />}  path="*"  />
          <Route
            component={<VerifyPhoneOtp />}
            path='/register/verify-phone-otp'
          />
        </Routes>
    </div>
  )
}

export default App
