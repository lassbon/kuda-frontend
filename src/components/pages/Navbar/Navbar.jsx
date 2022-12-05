import React from "react"
import logo from "../../../img/Svg/Kuda_Logo.svg"
import home from "../../../img/Svg/Home.svg"
import pay from "../../../img/Svg/Pay.svg"
import invest from "../../../img/Svg/Invest.svg"
import budget from "../../../img/Svg/Budget.svg"
import card from "../../../img/Svg/Card.svg"
import account from "../../../img/account.jpg"

function Navbar() {
  return (
    <nav className='bg-white flex justify-between items-center px-[3rem] py-[1rem] drop-shadow-md'>
      <img src={logo} alt='logo' className='w-[5rem] ' />

      <div className='flex gap-x-8'>
        <div className='flex items-center'>
          <img src={home} alt='home' className='w-[1.5rem] ' />
          <p className='text-[#b2a2c4] mx-[1rem]'>
            <a href='/'>Home</a>
          </p>
        </div>
        <div className='flex items-center'>
          <img src={pay} alt='pay' className='w-[1.5rem]' />
          <p className='text-[#b2a2c4] mx-[1rem]'>
            <a href='/send-money'>Pay</a>
          </p>
        </div>
        <div className='flex items-center'>
          <img src={invest} alt='invest' className='w-[1.5rem]' />
          <p className='text-[#b2a2c4] mx-[1rem]'>Invest</p>
        </div>
        <div className='flex items-center'>
          <img src={budget} alt='budget' className='w-[1.5rem]' />
          <p className='text-[#b2a2c4] mx-[1rem]'>Budget</p>
        </div>
        <div className='flex items-center'>
          <img src={card} alt='card' className='w-[1.5rem]' />
          <p className='text-[#b2a2c4] mx-[1rem]'>Card</p>
        </div>
      </div>
      <div className='flex items-center'>
        <img
          src={account}
          alt='account'
          className='w-[2rem] h-[2rem] rounded-full '
        />
        <h1 className='mx-[0.5rem]'>Account</h1>
      </div>
    </nav>
  )
}
export default Navbar
