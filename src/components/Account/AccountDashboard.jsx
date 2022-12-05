import React from 'react'
import Card from './Card'

import account from "../../img/account.jpg"
import {IoCopy} from  "react-icons/io5"
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
import Navbar from './Navbar'


const AccountDashboard = () => {
  return (
    <main className="font-Mulish">
        <Navbar />
        <div className="content px-4 sm:flex sm:flex-col sm:items-center text-kuda-purple">
            <h1 className='font-bold text-2xl text-center my-8'>Account</h1>
            <div className='shadow-3xl p-4 bg-white rounded-sm'>
            <div className='sm:flex sm:justify-between  p-4 sm:gap-12 max-w-[53.5rem] w-full'>
                <div className="left  sm:basis-1/2 flex flex-col sm:gap-y-4">
                    <div className="profile flex items-center p-2 ">
                         <div className="profile-pics basis-1/4">
                            <img src={account} alt="brandName" className='object-cover w-24 h-24 shadow-3xl rounded-full'/>
                         </div> 
                        <div className="profile-info pt-2 px-4 basis-3/4 ">
                           
                             <p className='flex justify-between font-bold text-black'>Aminah Adedeji <span>T3</span></p>
                             <p className='font-semibold'>Copy Account Number</p>
                            <p className='flex gap-2 items-center text-lg'><span><IoCopy className='w-[1.3rem] h-[1.3rem]' /></span> 2007595039</p>
                        </div>
                    </div>
                          <Card text='Verify Profile' icon={svg10}/>
                          <Card text='Statements & Reports' icon={svg12}/>
                          <Card text='Saved Cards' icon={svg13}/>
                          <Card text='Get Help' icon={svg14} />
                          <Card text='Linked Accounts' icon={svg15}/>
                          <Card text='Account Limits' icon={svg16}/>

                </div>

                <div className="right sm:basis-1/2  flex flex-col sm:gap-y-4">
                    <div className="invite text-center bg-[#40196d] px-20 py-5 rounded-sm">
                        <p className='text-white mb-2'>Invite and Earn</p>
                        <button className='px-8 py-2 bg-opay-green rounded-lg'>View code</button>
                    </div>

                   <Card text='Security' icon={svg17}/>
                   <Card text='Legal' icon={svg18}/>
                   <Card text='FAQs' icon={svg13}/>
                   <Card text='Chat With Us' icon={svg19}/>
                   <Card text='Hide Balance' icon={svg20} isIconChevron={false}/>
                   <Card text='Dark Mode' icon={svg21} isIconChevron={false}/>
                </div>   
            </div>
            <div className="signOut text-center mt-8 mb-2 font-bold text-red-500">
                    <button>Sign Out</button>
                </div>
            </div>
            
        </div>
       
    </main>
   
  )
}

export default AccountDashboard