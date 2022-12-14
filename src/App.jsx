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
import {
  createBrowserRouter as Router,
  RouterProvider,
  Route,
} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Route component={<HomePage />} path='/' />
        <Route component={<Pay />} path='/send-money' />
        <Route component={<Register />} path='/register' />
        <Route component={<Login />} path='/login' />
        <Route component={<Dashboard />} path='/dashboard' />
        <Route component={<Invest />} path='/invest' />
        <Route component={<Budget />} path='/budget' />
        <Route component={<Card />} path='/card' />
        <Route component={<Account />} path='/account' />
        <Route component={<Referrals />} path='/refferals' />
        <Route component={<UpdateTransactionPin />} path='/update-pin' />
        <Route component={<VerifyEmailOtp />} path='/register/verify-otp' />
      </Router>
    </>
  )
}

export default App
