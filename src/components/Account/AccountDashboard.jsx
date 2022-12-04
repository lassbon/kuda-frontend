import React from 'react'
import Card from './Card'
import logo from "../../img/Svg/Kuda_Logo.svg"
import home from "../../img/Svg/Home.svg"
import pay from "../../img/Svg/Pay.svg"
import invest from "../../img/Svg/Invest.svg"
import budget from "../../img/Svg/Budget.svg"
import card from "../../img/Svg/Card.svg"
import account from "../../img/account.jpg"
import svg9 from '../../img/Svg/svg9.svg'
import svg10 from '../../img/Svg/svg10.svg'
import svg12 from '../../img/Svg/svg12.svg'
import svg13 from '../../img/Svg/svg13.svg'
import svg14 from '../../img/Svg/svg14.svg'
import svg15 from '../../img/Svg/svg15.svg'
import svg16 from '../../img/Svg/svg16.svg'
import svg17 from '../../img/Svg/svg17.svg'
import svg18 from '../../img/Svg/svg18.svg'
import svg19 from '../../img/Svg/svg19.svg'
import svg20 from '../../img/Svg/svg20.svg'
import svg21 from '../../img/Svg/svg21.svg'
import {FaToggleOff} from 'react-icons/fa'

const AccountDashboard = () => {
  return (
    <main className="font-Mulish">
        <nav className="bg-white flex justify-between items-center px-[3rem] py-[1rem] drop-shadow-md">

<img src={logo} alt="" className="w-[5rem] " />

<div className="flex gap-x-8">
    <div className="flex items-center">
        <img src={home} alt="home" className="w-[1.5rem] " />
        <p className="text-[#b2a2c4] mx-[1rem]" >Home</p>
    </div>
    <div className="flex items-center">
        <img src={pay} alt="pay" className="w-[1.5rem]" />
        <p className="text-[#b2a2c4] mx-[1rem]">Pay</p>
    </div>
    <div className="flex items-center">
        <img src={invest} alt="invest" className="w-[1.5rem]" />
        <p className="text-[#b2a2c4] mx-[1rem]">Invest</p>
    </div>
    <div className="flex items-center">
        <img src={budget} alt="budget" className="w-[1.5rem]" />
        <p className="text-[#b2a2c4] mx-[1rem]">Budget</p>
    </div>
    <div className="flex items-center">
        <img src={card} alt="card" className="w-[1.5rem]" />
        <p className="text-[#b2a2c4] mx-[1rem]">Card</p>
    </div>
    
    
</div>
<div className="flex items-center">
        <img src={account} alt="account" className="w-[2rem] h-[2rem] rounded-full " />
        <h1 className="mx-[0.5rem]">Account</h1>
</div>


</nav>


        <div className="content flex flex-col items-center">
            <h1 className='font-bold text-2xl text-center my-8'>Account</h1>
            <div className='shadow-3xl p-4 bg-white relative rounded-sm'>
            <div className='flex justify-between p-4 gap-12 w-[53.5rem]'>
                <div className="left  basis-1/2 flex flex-col gap-y-4">
                    <div className="profile flex items-center p-2 ">
                         <div className="profile-pics basis-1/4">
                            <img src={account} alt="brandName" className=' w-24 h-24 shadow-3xl rounded-full'/>
                         </div> 
                        <div className="profile-info pt-2 px-4 basis-3/4 ">
                           
                             <p className='flex justify-between font-bold'>Aminah Adedeji <span>T3</span></p>
                             <p className='font-semibold'>Copy Account Number</p>
                            <p className='flex gap-2 items-center text-lg'><span><img src={svg9} alt="" className='w-[1.3rem] h-[1.3rem]' /></span> 2007595039</p>
                        </div>
                    </div>
                          <Card text='Verify Profile' icon={svg10}/>
                          <Card text='Statements & Reports' icon={svg12}/>
                          <Card text='Saved Cards' icon={svg13}/>
                          <Card text='Get Help' icon={svg14} />
                          <Card text='Linked Accounts' icon={svg15}/>
                          <Card text='Account Limits' icon={svg16}/>

                </div>

                <div className="right basis-1/2  flex flex-col gap-y-4">
                    <div className="invite text-center bg-[#40196d] px-20 py-5 rounded-sm">
                        <p className='text-white mb-2'>Invite and Earn</p>
                        <button className='px-8 py-2 bg-opay-green rounded-lg'>View code</button>
                    </div>

                   <Card text='Security' icon={svg17}/>
                   <Card text='Legal' icon={svg18}/>
                   <Card text='FAQs' icon={svg13}/>
                   <Card text='Chat With Us' icon={svg19}/>
                   <Card text='Hide Balance' icon={svg20}/>
                   <Card text='Dark Mode' icon={svg21}/>
                </div>

                
            </div>
            <div className="signOut text-center my-8  font-bold text-red-500">
                    <button>Sign Out</button>
                </div>
            </div>
            
        </div>
       
    </main>
   
  )
}

export default AccountDashboard